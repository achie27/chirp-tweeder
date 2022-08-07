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

/**
 * You cannot create a new job if one is already in progress.
 * @export
 * @interface ConflictProblem
 */
export interface ConflictProblem extends Problem {
}

/**
 * Check if a given object implements the ConflictProblem interface.
 */
export function instanceOfConflictProblem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConflictProblemFromJSON(json: any): ConflictProblem {
    return ConflictProblemFromJSONTyped(json, false);
}

export function ConflictProblemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConflictProblem {
    return json;
}

export function ConflictProblemToJSON(value?: ConflictProblem | null): any {
    return value;
}
