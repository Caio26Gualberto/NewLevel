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
 * @interface PendingInvitesDto
 */
export interface PendingInvitesDto {
    /**
     * 
     * @type {number}
     * @memberof PendingInvitesDto
     */
    notificationId?: number;
    /**
     * 
     * @type {string}
     * @memberof PendingInvitesDto
     */
    avatarURL?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingInvitesDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingInvitesDto
     */
    instrument?: string;
}

/**
 * Check if a given object implements the PendingInvitesDto interface.
 */
export function instanceOfPendingInvitesDto(value: object): boolean {
    return true;
}

export function PendingInvitesDtoFromJSON(json: any): PendingInvitesDto {
    return PendingInvitesDtoFromJSONTyped(json, false);
}

export function PendingInvitesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingInvitesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'notificationId': json['notificationId'] == null ? undefined : json['notificationId'],
        'avatarURL': json['avatarURL'] == null ? undefined : json['avatarURL'],
        'name': json['name'] == null ? undefined : json['name'],
        'instrument': json['instrument'] == null ? undefined : json['instrument'],
    };
}

export function PendingInvitesDtoToJSON(value?: PendingInvitesDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'notificationId': value['notificationId'],
        'avatarURL': value['avatarURL'],
        'name': value['name'],
        'instrument': value['instrument'],
    };
}

