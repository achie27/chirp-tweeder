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
 * Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id and Poll.
 * @export
 * @interface TweetCreateRequestMedia
 */
export interface TweetCreateRequestMedia {
    /**
     * A list of Media Ids to be attached to a created Tweet.
     * @type {Array<string>}
     * @memberof TweetCreateRequestMedia
     */
    mediaIds: Array<string>;
    /**
     * A list of User Ids to be tagged in the media for created Tweet.
     * @type {Array<string>}
     * @memberof TweetCreateRequestMedia
     */
    taggedUserIds?: Array<string>;
}

/**
 * Check if a given object implements the TweetCreateRequestMedia interface.
 */
export function instanceOfTweetCreateRequestMedia(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mediaIds" in value;

    return isInstance;
}

export function TweetCreateRequestMediaFromJSON(json: any): TweetCreateRequestMedia {
    return TweetCreateRequestMediaFromJSONTyped(json, false);
}

export function TweetCreateRequestMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCreateRequestMedia {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mediaIds': json['media_ids'],
        'taggedUserIds': !exists(json, 'tagged_user_ids') ? undefined : json['tagged_user_ids'],
    };
}

export function TweetCreateRequestMediaToJSON(value?: TweetCreateRequestMedia | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'media_ids': value.mediaIds,
        'tagged_user_ids': value.taggedUserIds,
    };
}
