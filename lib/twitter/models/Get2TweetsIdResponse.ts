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
 * @interface Get2TweetsIdResponse
 */
export interface Get2TweetsIdResponse {
    /**
     * 
     * @type {Tweet}
     * @memberof Get2TweetsIdResponse
     */
    data?: Tweet;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2TweetsIdResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2TweetsIdResponse
     */
    includes?: Expansions;
}

/**
 * Check if a given object implements the Get2TweetsIdResponse interface.
 */
export function instanceOfGet2TweetsIdResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2TweetsIdResponseFromJSON(json: any): Get2TweetsIdResponse {
    return Get2TweetsIdResponseFromJSONTyped(json, false);
}

export function Get2TweetsIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2TweetsIdResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : TweetFromJSON(json['data']),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
    };
}

export function Get2TweetsIdResponseToJSON(value?: Get2TweetsIdResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TweetToJSON(value.data),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
        'includes': ExpansionsToJSON(value.includes),
    };
}
