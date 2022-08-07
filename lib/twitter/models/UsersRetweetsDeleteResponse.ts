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
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';
import type { UsersRetweetsCreateResponseData } from './UsersRetweetsCreateResponseData';
import {
    UsersRetweetsCreateResponseDataFromJSON,
    UsersRetweetsCreateResponseDataFromJSONTyped,
    UsersRetweetsCreateResponseDataToJSON,
} from './UsersRetweetsCreateResponseData';

/**
 * 
 * @export
 * @interface UsersRetweetsDeleteResponse
 */
export interface UsersRetweetsDeleteResponse {
    /**
     * 
     * @type {UsersRetweetsCreateResponseData}
     * @memberof UsersRetweetsDeleteResponse
     */
    data?: UsersRetweetsCreateResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof UsersRetweetsDeleteResponse
     */
    errors?: Array<Problem>;
}

/**
 * Check if a given object implements the UsersRetweetsDeleteResponse interface.
 */
export function instanceOfUsersRetweetsDeleteResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersRetweetsDeleteResponseFromJSON(json: any): UsersRetweetsDeleteResponse {
    return UsersRetweetsDeleteResponseFromJSONTyped(json, false);
}

export function UsersRetweetsDeleteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersRetweetsDeleteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : UsersRetweetsCreateResponseDataFromJSON(json['data']),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
    };
}

export function UsersRetweetsDeleteResponseToJSON(value?: UsersRetweetsDeleteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UsersRetweetsCreateResponseDataToJSON(value.data),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
    };
}
