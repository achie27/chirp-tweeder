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
import type { Expansions } from './Expansions';
import {
    ExpansionsFromJSON,
    ExpansionsFromJSONTyped,
    ExpansionsToJSON,
} from './Expansions';
import type { Get2TweetsIdQuoteTweetsResponseMeta } from './Get2TweetsIdQuoteTweetsResponseMeta';
import {
    Get2TweetsIdQuoteTweetsResponseMetaFromJSON,
    Get2TweetsIdQuoteTweetsResponseMetaFromJSONTyped,
    Get2TweetsIdQuoteTweetsResponseMetaToJSON,
} from './Get2TweetsIdQuoteTweetsResponseMeta';
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';
import type { Tweet } from './Tweet';
import {
    TweetFromJSON,
    TweetFromJSONTyped,
    TweetToJSON,
} from './Tweet';

/**
 * 
 * @export
 * @interface Get2TweetsIdQuoteTweetsResponse
 */
export interface Get2TweetsIdQuoteTweetsResponse {
    /**
     * 
     * @type {Array<Tweet>}
     * @memberof Get2TweetsIdQuoteTweetsResponse
     */
    data?: Array<Tweet>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2TweetsIdQuoteTweetsResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2TweetsIdQuoteTweetsResponse
     */
    includes?: Expansions;
    /**
     * 
     * @type {Get2TweetsIdQuoteTweetsResponseMeta}
     * @memberof Get2TweetsIdQuoteTweetsResponse
     */
    meta?: Get2TweetsIdQuoteTweetsResponseMeta;
}

/**
 * Check if a given object implements the Get2TweetsIdQuoteTweetsResponse interface.
 */
export function instanceOfGet2TweetsIdQuoteTweetsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2TweetsIdQuoteTweetsResponseFromJSON(json: any): Get2TweetsIdQuoteTweetsResponse {
    return Get2TweetsIdQuoteTweetsResponseFromJSONTyped(json, false);
}

export function Get2TweetsIdQuoteTweetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2TweetsIdQuoteTweetsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(TweetFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
        'meta': !exists(json, 'meta') ? undefined : Get2TweetsIdQuoteTweetsResponseMetaFromJSON(json['meta']),
    };
}

export function Get2TweetsIdQuoteTweetsResponseToJSON(value?: Get2TweetsIdQuoteTweetsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(TweetToJSON)),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
        'includes': ExpansionsToJSON(value.includes),
        'meta': Get2TweetsIdQuoteTweetsResponseMetaToJSON(value.meta),
    };
}

