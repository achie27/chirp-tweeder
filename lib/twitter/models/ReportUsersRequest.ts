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
 * @interface ReportUsersRequest
 */
export interface ReportUsersRequest {
    /**
     * 
     * @type {string}
     * @memberof ReportUsersRequest
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportUsersRequest
     */
    userIds: Array<string>;
}

/**
 * Check if a given object implements the ReportUsersRequest interface.
 */
export function instanceOfReportUsersRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "userIds" in value;

    return isInstance;
}

export function ReportUsersRequestFromJSON(json: any): ReportUsersRequest {
    return ReportUsersRequestFromJSONTyped(json, false);
}

export function ReportUsersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportUsersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'userIds': json['user_ids'],
    };
}

export function ReportUsersRequestToJSON(value?: ReportUsersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'user_ids': value.userIds,
    };
}
