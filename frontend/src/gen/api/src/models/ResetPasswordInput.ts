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
 * @interface ResetPasswordInput
 */
export interface ResetPasswordInput {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordInput
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordInput
     */
    passwordConfirmation?: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordInput
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordInput
     */
    userId?: string;
}

/**
 * Check if a given object implements the ResetPasswordInput interface.
 */
export function instanceOfResetPasswordInput(value: object): boolean {
    return true;
}

export function ResetPasswordInputFromJSON(json: any): ResetPasswordInput {
    return ResetPasswordInputFromJSONTyped(json, false);
}

export function ResetPasswordInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetPasswordInput {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'passwordConfirmation': json['passwordConfirmation'] == null ? undefined : json['passwordConfirmation'],
        'token': json['token'] == null ? undefined : json['token'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function ResetPasswordInputToJSON(value?: ResetPasswordInput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'password': value['password'],
        'passwordConfirmation': value['passwordConfirmation'],
        'token': value['token'],
        'userId': value['userId'],
    };
}

