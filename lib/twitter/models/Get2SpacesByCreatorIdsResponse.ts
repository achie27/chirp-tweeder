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
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';
import type { Space } from './Space';
import {
    SpaceFromJSON,
    SpaceFromJSONTyped,
    SpaceToJSON,
} from './Space';

/**
 * 
 * @export
 * @interface Get2SpacesByCreatorIdsResponse
 */
export interface Get2SpacesByCreatorIdsResponse {
    /**
     * 
     * @type {Array<Space>}
     * @memberof Get2SpacesByCreatorIdsResponse
     */
    data?: Array<Space>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2SpacesByCreatorIdsResponse
     */
    errors?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2SpacesByCreatorIdsResponse
     */
    includes?: Expansions;
    /**
     * 
     * @type {Get2ComplianceJobsResponseMeta}
     * @memberof Get2SpacesByCreatorIdsResponse
     */
    meta?: Get2ComplianceJobsResponseMeta;
}

/**
 * Check if a given object implements the Get2SpacesByCreatorIdsResponse interface.
 */
export function instanceOfGet2SpacesByCreatorIdsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2SpacesByCreatorIdsResponseFromJSON(json: any): Get2SpacesByCreatorIdsResponse {
    return Get2SpacesByCreatorIdsResponseFromJSONTyped(json, false);
}

export function Get2SpacesByCreatorIdsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2SpacesByCreatorIdsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SpaceFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
        'includes': !exists(json, 'includes') ? undefined : ExpansionsFromJSON(json['includes']),
        'meta': !exists(json, 'meta') ? undefined : Get2ComplianceJobsResponseMetaFromJSON(json['meta']),
    };
}

export function Get2SpacesByCreatorIdsResponseToJSON(value?: Get2SpacesByCreatorIdsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SpaceToJSON)),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
        'includes': ExpansionsToJSON(value.includes),
        'meta': Get2ComplianceJobsResponseMetaToJSON(value.meta),
    };
}

