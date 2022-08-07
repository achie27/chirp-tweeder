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
 * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 * @export
 * @interface TweetWithheld
 */
export interface TweetWithheld {
    /**
     * Indicates if the content is being withheld for on the basis of copyright infringement.
     * @type {boolean}
     * @memberof TweetWithheld
     */
    copyright: boolean;
    /**
     * Provides a list of countries where this content is not available.
     * @type {Set<string>}
     * @memberof TweetWithheld
     */
    countryCodes: Set<string>;
    /**
     * Indicates whether the content being withheld is the `tweet` or a `user`.
     * @type {string}
     * @memberof TweetWithheld
     */
    scope?: TweetWithheldScopeEnum;
}


/**
 * @export
 */
export const TweetWithheldScopeEnum = {
    Tweet: 'tweet',
    User: 'user'
} as const;
export type TweetWithheldScopeEnum = typeof TweetWithheldScopeEnum[keyof typeof TweetWithheldScopeEnum];


/**
 * Check if a given object implements the TweetWithheld interface.
 */
export function instanceOfTweetWithheld(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "copyright" in value;
    isInstance = isInstance && "countryCodes" in value;

    return isInstance;
}

export function TweetWithheldFromJSON(json: any): TweetWithheld {
    return TweetWithheldFromJSONTyped(json, false);
}

export function TweetWithheldFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetWithheld {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyright': json['copyright'],
        'countryCodes': json['country_codes'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function TweetWithheldToJSON(value?: TweetWithheld | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyright': value.copyright,
        'country_codes': value.countryCodes,
        'scope': value.scope,
    };
}

