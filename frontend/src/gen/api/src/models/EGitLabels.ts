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


/**
 * 
 * @export
 */
export const EGitLabels = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type EGitLabels = typeof EGitLabels[keyof typeof EGitLabels];


export function instanceOfEGitLabels(value: any): boolean {
    return Object.values(EGitLabels).includes(value);
}

export function EGitLabelsFromJSON(json: any): EGitLabels {
    return EGitLabelsFromJSONTyped(json, false);
}

export function EGitLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EGitLabels {
    return json as EGitLabels;
}

export function EGitLabelsToJSON(value?: EGitLabels | null): any {
    return value as any;
}

