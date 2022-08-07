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
 * @interface ReportUsersResponseData
 */
export interface ReportUsersResponseData {
    /**
     * 
     * @type {number}
     * @memberof ReportUsersResponseData
     */
    id?: number;
}

/**
 * Check if a given object implements the ReportUsersResponseData interface.
 */
export function instanceOfReportUsersResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportUsersResponseDataFromJSON(json: any): ReportUsersResponseData {
    return ReportUsersResponseDataFromJSONTyped(json, false);
}

export function ReportUsersResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportUsersResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ReportUsersResponseDataToJSON(value?: ReportUsersResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}
