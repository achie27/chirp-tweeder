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
 * @interface OperationalDisconnectProblemAllOf
 */
export interface OperationalDisconnectProblemAllOf {
    /**
     * 
     * @type {string}
     * @memberof OperationalDisconnectProblemAllOf
     */
    disconnectType?: OperationalDisconnectProblemAllOfDisconnectTypeEnum;
}


/**
 * @export
 */
export const OperationalDisconnectProblemAllOfDisconnectTypeEnum = {
    OperationalDisconnect: 'OperationalDisconnect',
    UpstreamOperationalDisconnect: 'UpstreamOperationalDisconnect',
    ForceDisconnect: 'ForceDisconnect',
    UpstreamUncleanDisconnect: 'UpstreamUncleanDisconnect',
    SlowReader: 'SlowReader',
    InternalError: 'InternalError',
    ClientApplicationStateDegraded: 'ClientApplicationStateDegraded',
    InvalidRules: 'InvalidRules'
} as const;
export type OperationalDisconnectProblemAllOfDisconnectTypeEnum = typeof OperationalDisconnectProblemAllOfDisconnectTypeEnum[keyof typeof OperationalDisconnectProblemAllOfDisconnectTypeEnum];


/**
 * Check if a given object implements the OperationalDisconnectProblemAllOf interface.
 */
export function instanceOfOperationalDisconnectProblemAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OperationalDisconnectProblemAllOfFromJSON(json: any): OperationalDisconnectProblemAllOf {
    return OperationalDisconnectProblemAllOfFromJSONTyped(json, false);
}

export function OperationalDisconnectProblemAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperationalDisconnectProblemAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disconnectType': !exists(json, 'disconnect_type') ? undefined : json['disconnect_type'],
    };
}

export function OperationalDisconnectProblemAllOfToJSON(value?: OperationalDisconnectProblemAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disconnect_type': value.disconnectType,
    };
}
