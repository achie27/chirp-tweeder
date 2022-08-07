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
 * A Twitter List is a curated group of accounts.
 * @export
 * @interface ListCreateResponseData
 */
export interface ListCreateResponseData {
    /**
     * The unique identifier of this List.
     * @type {string}
     * @memberof ListCreateResponseData
     */
    id: string;
    /**
     * The name of this List.
     * @type {string}
     * @memberof ListCreateResponseData
     */
    name: string;
}

/**
 * Check if a given object implements the ListCreateResponseData interface.
 */
export function instanceOfListCreateResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ListCreateResponseDataFromJSON(json: any): ListCreateResponseData {
    return ListCreateResponseDataFromJSONTyped(json, false);
}

export function ListCreateResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCreateResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function ListCreateResponseDataToJSON(value?: ListCreateResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

