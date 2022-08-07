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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Get2UsersByResponse
 */
export interface Get2UsersByResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof Get2UsersByResponse
     */
    data?: Array<User>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersByResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersByResponse
     */
    includes?: Expansions;
}

/**
 * Check if a given object implements the Get2UsersByResponse interface.
 */
export function instanceOfGet2UsersByResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2UsersByResponseFromJSON(json: any): Get2UsersByResponse {
    return Get2UsersByResponseFromJSONTyped(json, false);
}

export function Get2UsersByResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2UsersByResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
    };
}

export function Get2UsersByResponseToJSON(value?: Get2UsersByResponse | null): any {
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
    };
}

