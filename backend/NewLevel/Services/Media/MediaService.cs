﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NewLevel.Context;
using NewLevel.Dtos.Medias;
using NewLevel.Dtos.Utils;
using NewLevel.Entities;
using NewLevel.Interfaces.Services.Media;
using NewLevel.Utils;

namespace NewLevel.Services.Media
{
    public class MediaService : IMediaService
    {
        private readonly NewLevelDbContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly UserManager<User> _userManager;
        private readonly Utils.Utils _utils;
        public MediaService(NewLevelDbContext newLevelDb, IHttpContextAccessor httpContextAccessor, UserManager<User> userManager)
        {
            _context = newLevelDb;
            _httpContextAccessor = httpContextAccessor;
            _userManager = userManager;
            _utils = new Utils.Utils(httpContextAccessor, userManager);
        }

        public async Task<bool> UpdateMediaById(UpdateMediaByIdInput input)
        {
            var media = await _context.Medias.FirstOrDefaultAsync(media => media.Id == input.MediaId);

            if (media == null)
                return false;

            media.UpdateMedia(media.Src, media.Title, input.Description, media.IsPublic);
            _context.Medias.Update(media);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<GenericList<MediaByUserIdDto>> GetMediaByUserId(Pagination input)
        {
            var user = await _utils.GetUser();

            var totalMedias = await _context.Medias
                .Where(media => media.UserId == user.Id)
                .WhereIf(!string.IsNullOrEmpty(input.Search), media => media.Title.ToLower().Contains(input.Search.ToLower()) || media.Title.ToLower() == input.Search.ToLower())
                .CountAsync();

            var skip = (input.Page - 1) * input.PageSize;

            var mediaList = await _context.Medias
                .Where(media => media.UserId == user.Id)
                .WhereIf(!string.IsNullOrEmpty(input.Search), media => media.Title.ToLower().Contains(input.Search.ToLower()) || media.Title.ToLower() == input.Search.ToLower())
                .Skip(skip)
                .Take(input.PageSize)
                .Select(media => new MediaByUserIdDto
                {
                    Id = media.Id,
                    Url = media.Src,
                    Title = media.Title,
                    Description = media.Description,
                })
                .ToListAsync();

            return new GenericList<MediaByUserIdDto>
            {
                Items = mediaList,
                TotalCount = totalMedias
            };
        }

        public async Task<bool> DeleteMediaById(int id)
        {
            var media = await _context.Medias.FirstOrDefaultAsync(media => media.Id == id);
            if (media == null)
                return false;

            _context.Medias.Remove(media);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<GenericList<MediaDto>> GetAllMedias(Pagination input)
        {
            var totalMedias = await _context.Medias
                .Where(x => x.IsPublic)
                .WhereIf(!string.IsNullOrEmpty(input.Search), media => media.Title.ToLower().Contains(input.Search.ToLower()) || media.Title.ToLower() == input.Search.ToLower())
                .CountAsync();

            var skip = (input.Page - 1) * input.PageSize;

            var medias = await _context.Medias
                .Include(x => x.User)
                .Where(x => x.IsPublic)
                .WhereIf(!string.IsNullOrEmpty(input.Search), media => media.Title.ToLower().Contains(input.Search.ToLower()) || media.Title.ToLower() == input.Search.ToLower())
                .OrderByDescending(media => media.CreationTime)
                .Skip(skip)
                .Take(input.PageSize)
                .Select(media => new MediaDto
                {
                    Src = media.Src,
                    Title = media.Title,
                    CreationTime = media.CreationTime,
                    Nickname = media.User.Nickname,
                    Description = media.Description,
                })
                .ToListAsync();

            return new GenericList<MediaDto>
            {
                Items = medias,
                TotalCount = totalMedias
            };
        }

        public async Task<bool> RequestMedia(RequestMediaDto input)
        {
            try
            {
                var user = await _utils.GetUser();
                NewLevel.Entities.Media media = new NewLevel.Entities.Media(input.Src, input.Title, input.Description, isPublic: false, DateTime.UtcNow.AddHours(-3), user.Id);
                media.Src = media.Src.Replace("watch?v=", "embed/");

                await _context.Medias.AddAsync(media);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
