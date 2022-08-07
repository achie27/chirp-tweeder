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
 * @interface UsersRetweetsCreateResponseData
 */
export interface UsersRetweetsCreateResponseData {
    /**
     * 
     * @type {boolean}
     * @memberof UsersRetweetsCreateResponseData
     */
    retweeted?: boolean;
}

/**
 * Check if a given object implements the UsersRetweetsCreateResponseData interface.
 */
export function instanceOfUsersRetweetsCreateResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersRetweetsCreateResponseDataFromJSON(json: any): UsersRetweetsCreateResponseData {
    return UsersRetweetsCreateResponseDataFromJSONTyped(json, false);
}

export function UsersRetweetsCreateResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersRetweetsCreateResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'retweeted': !exists(json, 'retweeted') ? undefined : json['retweeted'],
    };
}

export function UsersRetweetsCreateResponseDataToJSON(value?: UsersRetweetsCreateResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'retweeted': value.retweeted,
    };
}

