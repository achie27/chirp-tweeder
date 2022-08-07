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
 * Poll options for a Tweet with a poll. This is mutually exclusive from Media and Quote Tweet Id.
 * @export
 * @interface TweetCreateRequestPoll
 */
export interface TweetCreateRequestPoll {
    /**
     * Duration of the poll in minutes.
     * @type {number}
     * @memberof TweetCreateRequestPoll
     */
    durationMinutes: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TweetCreateRequestPoll
     */
    options: Array<string>;
    /**
     * Settings to indicate who can reply to the Tweet.
     * @type {string}
     * @memberof TweetCreateRequestPoll
     */
    replySettings?: TweetCreateRequestPollReplySettingsEnum;
}


/**
 * @export
 */
export const TweetCreateRequestPollReplySettingsEnum = {
    Following: 'following',
    MentionedUsers: 'mentionedUsers'
} as const;
export type TweetCreateRequestPollReplySettingsEnum = typeof TweetCreateRequestPollReplySettingsEnum[keyof typeof TweetCreateRequestPollReplySettingsEnum];


/**
 * Check if a given object implements the TweetCreateRequestPoll interface.
 */
export function instanceOfTweetCreateRequestPoll(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "durationMinutes" in value;
    isInstance = isInstance && "options" in value;

    return isInstance;
}

export function TweetCreateRequestPollFromJSON(json: any): TweetCreateRequestPoll {
    return TweetCreateRequestPollFromJSONTyped(json, false);
}

export function TweetCreateRequestPollFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCreateRequestPoll {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'durationMinutes': json['duration_minutes'],
        'options': json['options'],
        'replySettings': !exists(json, 'reply_settings') ? undefined : json['reply_settings'],
    };
}

export function TweetCreateRequestPollToJSON(value?: TweetCreateRequestPoll | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration_minutes': value.durationMinutes,
        'options': value.options,
        'reply_settings': value.replySettings,
    };
}
