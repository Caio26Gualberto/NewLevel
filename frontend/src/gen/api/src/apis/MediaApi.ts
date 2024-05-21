/* tslint:disable */
/* eslint-disable */
/**
 * NewLevel
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BooleanNewLevelResponse,
  MediaByUserIdDtoGenericListNewLevelResponse,
  MediaDtoGenericListNewLevelResponse,
  Pagination,
  RequestMediaDto,
  UpdateMediaByIdInput,
} from '../models/index';
import {
    BooleanNewLevelResponseFromJSON,
    BooleanNewLevelResponseToJSON,
    MediaByUserIdDtoGenericListNewLevelResponseFromJSON,
    MediaByUserIdDtoGenericListNewLevelResponseToJSON,
    MediaDtoGenericListNewLevelResponseFromJSON,
    MediaDtoGenericListNewLevelResponseToJSON,
    PaginationFromJSON,
    PaginationToJSON,
    RequestMediaDtoFromJSON,
    RequestMediaDtoToJSON,
    UpdateMediaByIdInputFromJSON,
    UpdateMediaByIdInputToJSON,
} from '../models/index';

export interface ApiMediaApproveMediaGetRequest {
    mediaId?: number;
    isApprove?: boolean;
}

export interface ApiMediaDeleteMediaByIdPostRequest {
    id?: number;
}

export interface ApiMediaGetMediaPostRequest {
    pagination?: Pagination;
}

export interface ApiMediaGetMediaToApprovePostRequest {
    pagination?: Pagination;
}

export interface ApiMediaGetMediasByUserIdPostRequest {
    pagination?: Pagination;
}

export interface ApiMediaRequestMediaPostRequest {
    requestMediaDto?: RequestMediaDto;
}

export interface ApiMediaUpdateMediaByIdPostRequest {
    updateMediaByIdInput?: UpdateMediaByIdInput;
}

/**
 * 
 */
export class MediaApi extends runtime.BaseAPI {

    /**
     */
    async apiMediaApproveMediaGetRaw(requestParameters: ApiMediaApproveMediaGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanNewLevelResponse>> {
        const queryParameters: any = {};

        if (requestParameters['mediaId'] != null) {
            queryParameters['mediaId'] = requestParameters['mediaId'];
        }

        if (requestParameters['isApprove'] != null) {
            queryParameters['isApprove'] = requestParameters['isApprove'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/ApproveMedia`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BooleanNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaApproveMediaGet(requestParameters: ApiMediaApproveMediaGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanNewLevelResponse> {
        const response = await this.apiMediaApproveMediaGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMediaDeleteMediaByIdPostRaw(requestParameters: ApiMediaDeleteMediaByIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanNewLevelResponse>> {
        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/DeleteMediaById`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BooleanNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaDeleteMediaByIdPost(requestParameters: ApiMediaDeleteMediaByIdPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanNewLevelResponse> {
        const response = await this.apiMediaDeleteMediaByIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMediaGetMediaPostRaw(requestParameters: ApiMediaGetMediaPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MediaDtoGenericListNewLevelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/GetMedia`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaginationToJSON(requestParameters['pagination']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MediaDtoGenericListNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaGetMediaPost(requestParameters: ApiMediaGetMediaPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MediaDtoGenericListNewLevelResponse> {
        const response = await this.apiMediaGetMediaPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMediaGetMediaToApprovePostRaw(requestParameters: ApiMediaGetMediaToApprovePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MediaDtoGenericListNewLevelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/GetMediaToApprove`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaginationToJSON(requestParameters['pagination']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MediaDtoGenericListNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaGetMediaToApprovePost(requestParameters: ApiMediaGetMediaToApprovePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MediaDtoGenericListNewLevelResponse> {
        const response = await this.apiMediaGetMediaToApprovePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMediaGetMediasByUserIdPostRaw(requestParameters: ApiMediaGetMediasByUserIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MediaByUserIdDtoGenericListNewLevelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/GetMediasByUserId`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaginationToJSON(requestParameters['pagination']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MediaByUserIdDtoGenericListNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaGetMediasByUserIdPost(requestParameters: ApiMediaGetMediasByUserIdPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MediaByUserIdDtoGenericListNewLevelResponse> {
        const response = await this.apiMediaGetMediasByUserIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMediaRequestMediaPostRaw(requestParameters: ApiMediaRequestMediaPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanNewLevelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/RequestMedia`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestMediaDtoToJSON(requestParameters['requestMediaDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BooleanNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaRequestMediaPost(requestParameters: ApiMediaRequestMediaPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanNewLevelResponse> {
        const response = await this.apiMediaRequestMediaPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMediaUpdateMediaByIdPostRaw(requestParameters: ApiMediaUpdateMediaByIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanNewLevelResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Media/UpdateMediaById`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateMediaByIdInputToJSON(requestParameters['updateMediaByIdInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BooleanNewLevelResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMediaUpdateMediaByIdPost(requestParameters: ApiMediaUpdateMediaByIdPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanNewLevelResponse> {
        const response = await this.apiMediaUpdateMediaByIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
