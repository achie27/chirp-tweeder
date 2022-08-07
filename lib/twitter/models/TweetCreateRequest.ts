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
import type { TweetCreateRequestGeo } from './TweetCreateRequestGeo';
import {
    TweetCreateRequestGeoFromJSON,
    TweetCreateRequestGeoFromJSONTyped,
    TweetCreateRequestGeoToJSON,
} from './TweetCreateRequestGeo';
import type { TweetCreateRequestMedia } from './TweetCreateRequestMedia';
import {
    TweetCreateRequestMediaFromJSON,
    TweetCreateRequestMediaFromJSONTyped,
    TweetCreateRequestMediaToJSON,
} from './TweetCreateRequestMedia';
import type { TweetCreateRequestPoll } from './TweetCreateRequestPoll';
import {
    TweetCreateRequestPollFromJSON,
    TweetCreateRequestPollFromJSONTyped,
    TweetCreateRequestPollToJSON,
} from './TweetCreateRequestPoll';
import type { TweetCreateRequestReply } from './TweetCreateRequestReply';
import {
    TweetCreateRequestReplyFromJSON,
    TweetCreateRequestReplyFromJSONTyped,
    TweetCreateRequestReplyToJSON,
} from './TweetCreateRequestReply';

/**
 * 
 * @export
 * @interface TweetCreateRequest
 */
export interface TweetCreateRequest {
    /**
     * Link to take the conversation from the public timeline to a private Direct Message.
     * @type {string}
     * @memberof TweetCreateRequest
     */
    directMessageDeepLink?: string;
    /**
     * Exclusive Tweet for super followers.
     * @type {boolean}
     * @memberof TweetCreateRequest
     */
    forSuperFollowersOnly?: boolean;
    /**
     * 
     * @type {TweetCreateRequestGeo}
     * @memberof TweetCreateRequest
     */
    geo?: TweetCreateRequestGeo;
    /**
     * 
     * @type {TweetCreateRequestMedia}
     * @memberof TweetCreateRequest
     */
    media?: TweetCreateRequestMedia;
    /**
     * 
     * @type {TweetCreateRequestPoll}
     * @memberof TweetCreateRequest
     */
    poll?: TweetCreateRequestPoll;
    /**
     * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof TweetCreateRequest
     */
    quoteTweetId?: string;
    /**
     * 
     * @type {TweetCreateRequestReply}
     * @memberof TweetCreateRequest
     */
    reply?: TweetCreateRequestReply;
    /**
     * Settings to indicate who can reply to the Tweet.
     * @type {string}
     * @memberof TweetCreateRequest
     */
    replySettings?: TweetCreateRequestReplySettingsEnum;
    /**
     * The content of the Tweet.
     * @type {string}
     * @memberof TweetCreateRequest
     */
    text?: string;
}


/**
 * @export
 */
export const TweetCreateRequestReplySettingsEnum = {
    Following: 'following',
    MentionedUsers: 'mentionedUsers'
} as const;
export type TweetCreateRequestReplySettingsEnum = typeof TweetCreateRequestReplySettingsEnum[keyof typeof TweetCreateRequestReplySettingsEnum];


/**
 * Check if a given object implements the TweetCreateRequest interface.
 */
export function instanceOfTweetCreateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TweetCreateRequestFromJSON(json: any): TweetCreateRequest {
    return TweetCreateRequestFromJSONTyped(json, false);
}

export function TweetCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'directMessageDeepLink': !exists(json, 'direct_message_deep_link') ? undefined : json['direct_message_deep_link'],
        'forSuperFollowersOnly': !exists(json, 'for_super_followers_only') ? undefined : json['for_super_followers_only'],
        'geo': !exists(json, 'geo') ? undefined : TweetCreateRequestGeoFromJSON(json['geo']),
        'media': !exists(json, 'media') ? undefined : TweetCreateRequestMediaFromJSON(json['media']),
        'poll': !exists(json, 'poll') ? undefined : TweetCreateRequestPollFromJSON(json['poll']),
        'quoteTweetId': !exists(json, 'quote_tweet_id') ? undefined : json['quote_tweet_id'],
        'reply': !exists(json, 'reply') ? undefined : TweetCreateRequestReplyFromJSON(json['reply']),
        'replySettings': !exists(json, 'reply_settings') ? undefined : json['reply_settings'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function TweetCreateRequestToJSON(value?: TweetCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'direct_message_deep_link': value.directMessageDeepLink,
        'for_super_followers_only': value.forSuperFollowersOnly,
        'geo': TweetCreateRequestGeoToJSON(value.geo),
        'media': TweetCreateRequestMediaToJSON(value.media),
        'poll': TweetCreateRequestPollToJSON(value.poll),
        'quote_tweet_id': value.quoteTweetId,
        'reply': TweetCreateRequestReplyToJSON(value.reply),
        'reply_settings': value.replySettings,
        'text': value.text,
    };
}

