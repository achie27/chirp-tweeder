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
 * Tweet information of the Tweet being replied to.
 * @export
 * @interface TweetCreateRequestReply
 */
export interface TweetCreateRequestReply {
    /**
     * A list of User Ids to be excluded from the reply Tweet.
     * @type {Array<string>}
     * @memberof TweetCreateRequestReply
     */
    excludeReplyUserIds?: Array<string>;
    /**
     * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof TweetCreateRequestReply
     */
    inReplyToTweetId: string;
}

/**
 * Check if a given object implements the TweetCreateRequestReply interface.
 */
export function instanceOfTweetCreateRequestReply(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "inReplyToTweetId" in value;

    return isInstance;
}

export function TweetCreateRequestReplyFromJSON(json: any): TweetCreateRequestReply {
    return TweetCreateRequestReplyFromJSONTyped(json, false);
}

export function TweetCreateRequestReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCreateRequestReply {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'excludeReplyUserIds': !exists(json, 'exclude_reply_user_ids') ? undefined : json['exclude_reply_user_ids'],
        'inReplyToTweetId': json['in_reply_to_tweet_id'],
    };
}

export function TweetCreateRequestReplyToJSON(value?: TweetCreateRequestReply | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exclude_reply_user_ids': value.excludeReplyUserIds,
        'in_reply_to_tweet_id': value.inReplyToTweetId,
    };
}
