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
 * @interface InvalidRequestProblemAllOfErrors
 */
export interface InvalidRequestProblemAllOfErrors {
    /**
     * 
     * @type {string}
     * @memberof InvalidRequestProblemAllOfErrors
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof InvalidRequestProblemAllOfErrors
     */
    parameters?: { [key: string]: Array<string>; };
}

/**
 * Check if a given object implements the InvalidRequestProblemAllOfErrors interface.
 */
export function instanceOfInvalidRequestProblemAllOfErrors(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvalidRequestProblemAllOfErrorsFromJSON(json: any): InvalidRequestProblemAllOfErrors {
    return InvalidRequestProblemAllOfErrorsFromJSONTyped(json, false);
}

export function InvalidRequestProblemAllOfErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvalidRequestProblemAllOfErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
    };
}

export function InvalidRequestProblemAllOfErrorsToJSON(value?: InvalidRequestProblemAllOfErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'parameters': value.parameters,
    };
}

