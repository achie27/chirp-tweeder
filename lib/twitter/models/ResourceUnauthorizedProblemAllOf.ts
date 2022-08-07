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
/**
 * 
 * @export
 * @interface ResourceUnauthorizedProblemAllOf
 */
export interface ResourceUnauthorizedProblemAllOf {
    /**
     * 
     * @type {string}
     * @memberof ResourceUnauthorizedProblemAllOf
     */
    parameter: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceUnauthorizedProblemAllOf
     */
    resourceId: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceUnauthorizedProblemAllOf
     */
    resourceType: ResourceUnauthorizedProblemAllOfResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ResourceUnauthorizedProblemAllOf
     */
    section: ResourceUnauthorizedProblemAllOfSectionEnum;
    /**
     * 
     * @type {string}
     * @memberof ResourceUnauthorizedProblemAllOf
     */
    value: string;
}


/**
 * @export
 */
export const ResourceUnauthorizedProblemAllOfResourceTypeEnum = {
    User: 'user',
    Tweet: 'tweet',
    Media: 'media',
    List: 'list',
    Space: 'space'
} as const;
export type ResourceUnauthorizedProblemAllOfResourceTypeEnum = typeof ResourceUnauthorizedProblemAllOfResourceTypeEnum[keyof typeof ResourceUnauthorizedProblemAllOfResourceTypeEnum];

/**
 * @export
 */
export const ResourceUnauthorizedProblemAllOfSectionEnum = {
    Data: 'data',
    Includes: 'includes'
} as const;
export type ResourceUnauthorizedProblemAllOfSectionEnum = typeof ResourceUnauthorizedProblemAllOfSectionEnum[keyof typeof ResourceUnauthorizedProblemAllOfSectionEnum];


/**
 * Check if a given object implements the ResourceUnauthorizedProblemAllOf interface.
 */
export function instanceOfResourceUnauthorizedProblemAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "parameter" in value;
    isInstance = isInstance && "resourceId" in value;
    isInstance = isInstance && "resourceType" in value;
    isInstance = isInstance && "section" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ResourceUnauthorizedProblemAllOfFromJSON(json: any): ResourceUnauthorizedProblemAllOf {
    return ResourceUnauthorizedProblemAllOfFromJSONTyped(json, false);
}

export function ResourceUnauthorizedProblemAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceUnauthorizedProblemAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parameter': json['parameter'],
        'resourceId': json['resource_id'],
        'resourceType': json['resource_type'],
        'section': json['section'],
        'value': json['value'],
    };
}

export function ResourceUnauthorizedProblemAllOfToJSON(value?: ResourceUnauthorizedProblemAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parameter': value.parameter,
        'resource_id': value.resourceId,
        'resource_type': value.resourceType,
        'section': value.section,
        'value': value.value,
    };
}

