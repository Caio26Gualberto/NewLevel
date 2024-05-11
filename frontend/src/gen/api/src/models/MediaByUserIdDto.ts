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
/**
 * 
 * @export
 * @interface MediaByUserIdDto
 */
export interface MediaByUserIdDto {
    /**
     * 
     * @type {number}
     * @memberof MediaByUserIdDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaByUserIdDto
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaByUserIdDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaByUserIdDto
     */
    url?: string;
}

/**
 * Check if a given object implements the MediaByUserIdDto interface.
 */
export function instanceOfMediaByUserIdDto(value: object): boolean {
    return true;
}

export function MediaByUserIdDtoFromJSON(json: any): MediaByUserIdDto {
    return MediaByUserIdDtoFromJSONTyped(json, false);
}

export function MediaByUserIdDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaByUserIdDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function MediaByUserIdDtoToJSON(value?: MediaByUserIdDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'url': value['url'],
    };
}

