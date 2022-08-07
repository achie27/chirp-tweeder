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
 * @interface RulesRequestSummaryOneOf1
 */
export interface RulesRequestSummaryOneOf1 {
    /**
     * Number of user-specified stream filtering rules that were deleted.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf1
     */
    deleted: number;
    /**
     * Number of user-specified stream filtering rules that were not deleted.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf1
     */
    notDeleted: number;
}

/**
 * Check if a given object implements the RulesRequestSummaryOneOf1 interface.
 */
export function instanceOfRulesRequestSummaryOneOf1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "notDeleted" in value;

    return isInstance;
}

export function RulesRequestSummaryOneOf1FromJSON(json: any): RulesRequestSummaryOneOf1 {
    return RulesRequestSummaryOneOf1FromJSONTyped(json, false);
}

export function RulesRequestSummaryOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RulesRequestSummaryOneOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleted': json['deleted'],
        'notDeleted': json['not_deleted'],
    };
}

export function RulesRequestSummaryOneOf1ToJSON(value?: RulesRequestSummaryOneOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleted': value.deleted,
        'not_deleted': value.notDeleted,
    };
}

