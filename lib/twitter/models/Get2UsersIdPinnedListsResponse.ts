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
import type { Get2ComplianceJobsResponseMeta } from './Get2ComplianceJobsResponseMeta';
import {
    Get2ComplianceJobsResponseMetaFromJSON,
    Get2ComplianceJobsResponseMetaFromJSONTyped,
    Get2ComplianceJobsResponseMetaToJSON,
} from './Get2ComplianceJobsResponseMeta';
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
 * @interface Get2UsersIdPinnedListsResponse
 */
export interface Get2UsersIdPinnedListsResponse {
    /**
     * 
     * @type {Array<List>}
     * @memberof Get2UsersIdPinnedListsResponse
     */
    data?: Array<List>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersIdPinnedListsResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersIdPinnedListsResponse
     */
    includes?: Expansions;
    /**
     * 
     * @type {Get2ComplianceJobsResponseMeta}
     * @memberof Get2UsersIdPinnedListsResponse
     */
    meta?: Get2ComplianceJobsResponseMeta;
}

/**
 * Check if a given object implements the Get2UsersIdPinnedListsResponse interface.
 */
export function instanceOfGet2UsersIdPinnedListsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2UsersIdPinnedListsResponseFromJSON(json: any): Get2UsersIdPinnedListsResponse {
    return Get2UsersIdPinnedListsResponseFromJSONTyped(json, false);
}

export function Get2UsersIdPinnedListsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2UsersIdPinnedListsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ListFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
        'meta': !exists(json, 'meta') ? undefined : Get2ComplianceJobsResponseMetaFromJSON(json['meta']),
    };
}

export function Get2UsersIdPinnedListsResponseToJSON(value?: Get2UsersIdPinnedListsResponse | null): any {
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
        'meta': Get2ComplianceJobsResponseMetaToJSON(value.meta),
    };
}

