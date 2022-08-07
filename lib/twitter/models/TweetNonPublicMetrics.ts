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
 * Nonpublic engagement metrics for the Tweet at the time of the request.
 * @export
 * @interface TweetNonPublicMetrics
 */
export interface TweetNonPublicMetrics {
    /**
     * Number of times this Tweet has been viewed.
     * @type {number}
     * @memberof TweetNonPublicMetrics
     */
    impressionCount?: number;
}

/**
 * Check if a given object implements the TweetNonPublicMetrics interface.
 */
export function instanceOfTweetNonPublicMetrics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TweetNonPublicMetricsFromJSON(json: any): TweetNonPublicMetrics {
    return TweetNonPublicMetricsFromJSONTyped(json, false);
}

export function TweetNonPublicMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetNonPublicMetrics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'impressionCount': !exists(json, 'impression_count') ? undefined : json['impression_count'],
    };
}

export function TweetNonPublicMetricsToJSON(value?: TweetNonPublicMetrics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'impression_count': value.impressionCount,
    };
}

