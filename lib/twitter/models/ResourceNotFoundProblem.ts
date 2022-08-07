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
import type { ResourceNotFoundProblemAllOf } from './ResourceNotFoundProblemAllOf';
import {
    ResourceNotFoundProblemAllOfFromJSON,
    ResourceNotFoundProblemAllOfFromJSONTyped,
    ResourceNotFoundProblemAllOfToJSON,
} from './ResourceNotFoundProblemAllOf';

/**
 * A problem that indicates that a given Tweet, User, etc. does not exist.
 * @export
 * @interface ResourceNotFoundProblem
 */
export interface ResourceNotFoundProblem extends Problem {
    /**
     * 
     * @type {string}
     * @memberof ResourceNotFoundProblem
     */
    parameter: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceNotFoundProblem
     */
    resourceId: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceNotFoundProblem
     */
    resourceType: ResourceNotFoundProblemResourceTypeEnum;
    /**
     * Value will match the schema of the field.
     * @type {string}
     * @memberof ResourceNotFoundProblem
     */
    value: string;
}


/**
 * @export
 */
export const ResourceNotFoundProblemResourceTypeEnum = {
    User: 'user',
    Tweet: 'tweet',
    Media: 'media',
    List: 'list',
    Space: 'space'
} as const;
export type ResourceNotFoundProblemResourceTypeEnum = typeof ResourceNotFoundProblemResourceTypeEnum[keyof typeof ResourceNotFoundProblemResourceTypeEnum];


/**
 * Check if a given object implements the ResourceNotFoundProblem interface.
 */
export function instanceOfResourceNotFoundProblem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "parameter" in value;
    isInstance = isInstance && "resourceId" in value;
    isInstance = isInstance && "resourceType" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ResourceNotFoundProblemFromJSON(json: any): ResourceNotFoundProblem {
    return ResourceNotFoundProblemFromJSONTyped(json, false);
}

export function ResourceNotFoundProblemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceNotFoundProblem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ProblemFromJSONTyped(json, ignoreDiscriminator),
        'parameter': json['parameter'],
        'resourceId': json['resource_id'],
        'resourceType': json['resource_type'],
        'value': json['value'],
    };
}

export function ResourceNotFoundProblemToJSON(value?: ResourceNotFoundProblem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...ProblemToJSON(value),
        'parameter': value.parameter,
        'resource_id': value.resourceId,
        'resource_type': value.resourceType,
        'value': value.value,
    };
}
