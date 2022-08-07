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
import type { List } from './List';
import {
    ListFromJSON,
    ListFromJSONTyped,
    ListToJSON,
} from './List';
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';

/**
 * 
 * @export
 * @interface Get2UsersIdOwnedListsResponse
 */
export interface Get2UsersIdOwnedListsResponse {
    /**
     * 
     * @type {Array<List>}
     * @memberof Get2UsersIdOwnedListsResponse
     */
    data?: Array<List>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersIdOwnedListsResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersIdOwnedListsResponse
     */
    includes?: Expansions;
    /**
     * 
     * @type {Get2ListsIdFollowersResponseMeta}
     * @memberof Get2UsersIdOwnedListsResponse
     */
    meta?: Get2ListsIdFollowersResponseMeta;
}

/**
 * Check if a given object implements the Get2UsersIdOwnedListsResponse interface.
 */
export function instanceOfGet2UsersIdOwnedListsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2UsersIdOwnedListsResponseFromJSON(json: any): Get2UsersIdOwnedListsResponse {
    return Get2UsersIdOwnedListsResponseFromJSONTyped(json, false);
}

export function Get2UsersIdOwnedListsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2UsersIdOwnedListsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ListFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
        'meta': !exists(json, 'meta') ? undefined : Get2ListsIdFollowersResponseMetaFromJSON(json['meta']),
    };
}

export function Get2UsersIdOwnedListsResponseToJSON(value?: Get2UsersIdOwnedListsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ListToJSON)),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
        'includes': ExpansionsToJSON(value.includes),
        'meta': Get2ListsIdFollowersResponseMetaToJSON(value.meta),
    };
}

