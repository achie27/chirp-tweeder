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
 * Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.
 * @export
 * @interface EntityIndicesInclusiveInclusive
 */
export interface EntityIndicesInclusiveInclusive {
    /**
     * Index (zero-based) at which position this entity ends.  The index is inclusive.
     * @type {number}
     * @memberof EntityIndicesInclusiveInclusive
     */
    end: number;
    /**
     * Index (zero-based) at which position this entity starts.  The index is inclusive.
     * @type {number}
     * @memberof EntityIndicesInclusiveInclusive
     */
    start: number;
}

/**
 * Check if a given object implements the EntityIndicesInclusiveInclusive interface.
 */
export function instanceOfEntityIndicesInclusiveInclusive(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "end" in value;
    isInstance = isInstance && "start" in value;

    return isInstance;
}

export function EntityIndicesInclusiveInclusiveFromJSON(json: any): EntityIndicesInclusiveInclusive {
    return EntityIndicesInclusiveInclusiveFromJSONTyped(json, false);
}

export function EntityIndicesInclusiveInclusiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityIndicesInclusiveInclusive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'end': json['end'],
        'start': json['start'],
    };
}

export function EntityIndicesInclusiveInclusiveToJSON(value?: EntityIndicesInclusiveInclusive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end': value.end,
        'start': value.start,
    };
}

