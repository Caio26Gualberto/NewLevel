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

import { mapValues } from '../runtime';
import type { RegisterResponseDto } from './RegisterResponseDto';
import {
    RegisterResponseDtoFromJSON,
    RegisterResponseDtoFromJSONTyped,
    RegisterResponseDtoToJSON,
} from './RegisterResponseDto';

/**
 * 
 * @export
 * @interface RegisterResponseDtoNewLevelResponse
 */
export interface RegisterResponseDtoNewLevelResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RegisterResponseDtoNewLevelResponse
     */
    isSuccess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterResponseDtoNewLevelResponse
     */
    message?: string;
    /**
     * 
     * @type {RegisterResponseDto}
     * @memberof RegisterResponseDtoNewLevelResponse
     */
    data?: RegisterResponseDto;
}

/**
 * Check if a given object implements the RegisterResponseDtoNewLevelResponse interface.
 */
export function instanceOfRegisterResponseDtoNewLevelResponse(value: object): boolean {
    return true;
}

export function RegisterResponseDtoNewLevelResponseFromJSON(json: any): RegisterResponseDtoNewLevelResponse {
    return RegisterResponseDtoNewLevelResponseFromJSONTyped(json, false);
}

export function RegisterResponseDtoNewLevelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterResponseDtoNewLevelResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'isSuccess': json['isSuccess'] == null ? undefined : json['isSuccess'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : RegisterResponseDtoFromJSON(json['data']),
    };
}

export function RegisterResponseDtoNewLevelResponseToJSON(value?: RegisterResponseDtoNewLevelResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'isSuccess': value['isSuccess'],
        'message': value['message'],
        'data': RegisterResponseDtoToJSON(value['data']),
    };
}

