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
 * @interface Get2ListsIdFollowersResponseMeta
 */
export interface Get2ListsIdFollowersResponseMeta {
    /**
     * The next token.
     * @type {string}
     * @memberof Get2ListsIdFollowersResponseMeta
     */
    nextToken?: string;
    /**
     * The previous token.
     * @type {string}
     * @memberof Get2ListsIdFollowersResponseMeta
     */
    previousToken?: string;
    /**
     * The number of results returned in this response.
     * @type {number}
     * @memberof Get2ListsIdFollowersResponseMeta
     */
    resultCount?: number;
}

/**
 * Check if a given object implements the Get2ListsIdFollowersResponseMeta interface.
 */
export function instanceOfGet2ListsIdFollowersResponseMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2ListsIdFollowersResponseMetaFromJSON(json: any): Get2ListsIdFollowersResponseMeta {
    return Get2ListsIdFollowersResponseMetaFromJSONTyped(json, false);
}

export function Get2ListsIdFollowersResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2ListsIdFollowersResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextToken': !exists(json, 'next_token') ? undefined : json['next_token'],
        'previousToken': !exists(json, 'previous_token') ? undefined : json['previous_token'],
        'resultCount': !exists(json, 'result_count') ? undefined : json['result_count'],
    };
}

export function Get2ListsIdFollowersResponseMetaToJSON(value?: Get2ListsIdFollowersResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'next_token': value.nextToken,
        'previous_token': value.previousToken,
        'result_count': value.resultCount,
    };
}
