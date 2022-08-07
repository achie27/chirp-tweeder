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
import type { Get2ListsIdFollowersResponseMeta } from './Get2ListsIdFollowersResponseMeta';
import {
    Get2ListsIdFollowersResponseMetaFromJSON,
    Get2ListsIdFollowersResponseMetaFromJSONTyped,
    Get2ListsIdFollowersResponseMetaToJSON,
} from './Get2ListsIdFollowersResponseMeta';
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Get2TweetsIdRetweetedByResponse
 */
export interface Get2TweetsIdRetweetedByResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof Get2TweetsIdRetweetedByResponse
     */
    data?: Array<User>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2TweetsIdRetweetedByResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2TweetsIdRetweetedByResponse
     */
    includes?: Expansions;
    /**
     * 
     * @type {Get2ListsIdFollowersResponseMeta}
     * @memberof Get2TweetsIdRetweetedByResponse
     */
    meta?: Get2ListsIdFollowersResponseMeta;
}

/**
 * Check if a given object implements the Get2TweetsIdRetweetedByResponse interface.
 */
export function instanceOfGet2TweetsIdRetweetedByResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2TweetsIdRetweetedByResponseFromJSON(json: any): Get2TweetsIdRetweetedByResponse {
    return Get2TweetsIdRetweetedByResponseFromJSONTyped(json, false);
}

export function Get2TweetsIdRetweetedByResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2TweetsIdRetweetedByResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
        'meta': !exists(json, 'meta') ? undefined : Get2ListsIdFollowersResponseMetaFromJSON(json['meta']),
    };
}

export function Get2TweetsIdRetweetedByResponseToJSON(value?: Get2TweetsIdRetweetedByResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UserToJSON)),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
        'includes': ExpansionsToJSON(value.includes),
        'meta': Get2ListsIdFollowersResponseMetaToJSON(value.meta),
    };
}

