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
import type { TweetComplianceSchemaTweet } from './TweetComplianceSchemaTweet';
import {
    TweetComplianceSchemaTweetFromJSON,
    TweetComplianceSchemaTweetFromJSONTyped,
    TweetComplianceSchemaTweetToJSON,
} from './TweetComplianceSchemaTweet';

/**
 * 
 * @export
 * @interface TweetComplianceSchema
 */
export interface TweetComplianceSchema {
    /**
     * Event time.
     * @type {Date}
     * @memberof TweetComplianceSchema
     */
    eventAt: Date;
    /**
     * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof TweetComplianceSchema
     */
    quoteTweetId?: string;
    /**
     * 
     * @type {TweetComplianceSchemaTweet}
     * @memberof TweetComplianceSchema
     */
    tweet: TweetComplianceSchemaTweet;
}

/**
 * Check if a given object implements the TweetComplianceSchema interface.
 */
export function instanceOfTweetComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eventAt" in value;
    isInstance = isInstance && "tweet" in value;

    return isInstance;
}

export function TweetComplianceSchemaFromJSON(json: any): TweetComplianceSchema {
    return TweetComplianceSchemaFromJSONTyped(json, false);
}

export function TweetComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventAt': (new Date(json['event_at'])),
        'quoteTweetId': !exists(json, 'quote_tweet_id') ? undefined : json['quote_tweet_id'],
        'tweet': TweetComplianceSchemaTweetFromJSON(json['tweet']),
    };
}

export function TweetComplianceSchemaToJSON(value?: TweetComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event_at': (value.eventAt.toISOString()),
        'quote_tweet_id': value.quoteTweetId,
        'tweet': TweetComplianceSchemaTweetToJSON(value.tweet),
    };
}
