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
 * @interface ClientForbiddenProblemAllOf
 */
export interface ClientForbiddenProblemAllOf {
    /**
     * 
     * @type {string}
     * @memberof ClientForbiddenProblemAllOf
     */
    reason?: ClientForbiddenProblemAllOfReasonEnum;
    /**
     * 
     * @type {string}
     * @memberof ClientForbiddenProblemAllOf
     */
    registrationUrl?: string;
}


/**
 * @export
 */
export const ClientForbiddenProblemAllOfReasonEnum = {
    OfficialClientForbidden: 'official-client-forbidden',
    ClientNotEnrolled: 'client-not-enrolled'
} as const;
export type ClientForbiddenProblemAllOfReasonEnum = typeof ClientForbiddenProblemAllOfReasonEnum[keyof typeof ClientForbiddenProblemAllOfReasonEnum];


/**
 * Check if a given object implements the ClientForbiddenProblemAllOf interface.
 */
export function instanceOfClientForbiddenProblemAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClientForbiddenProblemAllOfFromJSON(json: any): ClientForbiddenProblemAllOf {
    return ClientForbiddenProblemAllOfFromJSONTyped(json, false);
}

export function ClientForbiddenProblemAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientForbiddenProblemAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'registrationUrl': !exists(json, 'registration_url') ? undefined : json['registration_url'],
    };
}

export function ClientForbiddenProblemAllOfToJSON(value?: ClientForbiddenProblemAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reason': value.reason,
        'registration_url': value.registrationUrl,
    };
}

