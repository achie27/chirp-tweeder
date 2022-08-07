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
 * @interface BookmarkAddRequest
 */
export interface BookmarkAddRequest {
    /**
     * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof BookmarkAddRequest
     */
    tweetId: string;
}

/**
 * Check if a given object implements the BookmarkAddRequest interface.
 */
export function instanceOfBookmarkAddRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tweetId" in value;

    return isInstance;
}

export function BookmarkAddRequestFromJSON(json: any): BookmarkAddRequest {
    return BookmarkAddRequestFromJSONTyped(json, false);
}

export function BookmarkAddRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkAddRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tweetId': json['tweet_id'],
    };
}

export function BookmarkAddRequestToJSON(value?: BookmarkAddRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tweet_id': value.tweetId,
    };
}

