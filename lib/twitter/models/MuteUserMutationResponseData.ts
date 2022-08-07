/* tslint:disable */
/* eslint-disable */
/**
 * Twitter API v2
 * Twitter API v2 available endpoints
 *
 * The version of the OpenAPI document: 2.49
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MuteUserMutationResponseData
 */
export interface MuteUserMutationResponseData {
    /**
     * 
     * @type {boolean}
     * @memberof MuteUserMutationResponseData
     */
    muting?: boolean;
}

/**
 * Check if a given object implements the MuteUserMutationResponseData interface.
 */
export function instanceOfMuteUserMutationResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MuteUserMutationResponseDataFromJSON(json: any): MuteUserMutationResponseData {
    return MuteUserMutationResponseDataFromJSONTyped(json, false);
}

export function MuteUserMutationResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuteUserMutationResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'muting': !exists(json, 'muting') ? undefined : json['muting'],
    };
}

export function MuteUserMutationResponseDataToJSON(value?: MuteUserMutationResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'muting': value.muting,
    };
}
