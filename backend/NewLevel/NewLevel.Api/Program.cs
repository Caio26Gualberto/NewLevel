using Microsoft.OpenApi.Models;
using NewLevel.Infra.IoC;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        // Permite qualquer origem. Substitua "*" pelo dom�nio do seu aplicativo em produ��o.
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddInfrastructure(builder.Configuration);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Description = "Bearer Authentication with JWT Token",
        Type = SecuritySchemeType.Http
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Id = "Bearer",
                    Type = ReferenceType.SecurityScheme
                }
            },
            new List<string>()
        }
    });
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "NewLevel", Version = "v1" });

    // Definir o baseUrl na especifica��o OpenAPI
    options.SwaggerGeneratorOptions.Servers = new List<OpenApiServer>
        {
            new OpenApiServer { Url = "https://localhost:7258" } // Defina o baseUrl aqui
        };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(c => { c.RouteTemplate = "swagger/{documentName}/swagger.json"; });
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("https://localhost:7258/swagger/v1/swagger.json", "New Level API v1");
        options.RoutePrefix = "https://localhost:7258";
    });
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
