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
import type { ComplianceJob } from './ComplianceJob';
import {
    ComplianceJobFromJSON,
    ComplianceJobFromJSONTyped,
    ComplianceJobToJSON,
} from './ComplianceJob';
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';

/**
 * 
 * @export
 * @interface Get2ComplianceJobsIdResponse
 */
export interface Get2ComplianceJobsIdResponse {
    /**
     * 
     * @type {ComplianceJob}
     * @memberof Get2ComplianceJobsIdResponse
     */
    data?: ComplianceJob;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2ComplianceJobsIdResponse
     */
    errors?: Array<Problem>;
}

/**
 * Check if a given object implements the Get2ComplianceJobsIdResponse interface.
 */
export function instanceOfGet2ComplianceJobsIdResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get2ComplianceJobsIdResponseFromJSON(json: any): Get2ComplianceJobsIdResponse {
    return Get2ComplianceJobsIdResponseFromJSONTyped(json, false);
}

export function Get2ComplianceJobsIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get2ComplianceJobsIdResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ComplianceJobFromJSON(json['data']),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ProblemFromJSON)),
    };
}

export function Get2ComplianceJobsIdResponseToJSON(value?: Get2ComplianceJobsIdResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ComplianceJobToJSON(value.data),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ProblemToJSON)),
    };
}
