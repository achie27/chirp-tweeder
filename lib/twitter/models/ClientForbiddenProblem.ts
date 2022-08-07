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
import type { ClientForbiddenProblemAllOf } from './ClientForbiddenProblemAllOf';
import {
    ClientForbiddenProblemAllOfFromJSON,
    ClientForbiddenProblemAllOfFromJSONTyped,
    ClientForbiddenProblemAllOfToJSON,
} from './ClientForbiddenProblemAllOf';
import type { Problem } from './Problem';
import {
    ProblemFromJSON,
    ProblemFromJSONTyped,
    ProblemToJSON,
} from './Problem';

/**
 * A problem that indicates your client is forbidden from making this request.
 * @export
 * @interface ClientForbiddenProblem
 */
export interface ClientForbiddenProblem extends Problem {
    /**
     * 
     * @type {string}
     * @memberof ClientForbiddenProblem
     */
    reason?: ClientForbiddenProblemReasonEnum;
    /**
     * 
     * @type {string}
     * @memberof ClientForbiddenProblem
     */
    registrationUrl?: string;
}


/**
 * @export
 */
export const ClientForbiddenProblemReasonEnum = {
    OfficialClientForbidden: 'official-client-forbidden',
    ClientNotEnrolled: 'client-not-enrolled'
} as const;
export type ClientForbiddenProblemReasonEnum = typeof ClientForbiddenProblemReasonEnum[keyof typeof ClientForbiddenProblemReasonEnum];


/**
 * Check if a given object implements the ClientForbiddenProblem interface.
 */
export function instanceOfClientForbiddenProblem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClientForbiddenProblemFromJSON(json: any): ClientForbiddenProblem {
    return ClientForbiddenProblemFromJSONTyped(json, false);
}

export function ClientForbiddenProblemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientForbiddenProblem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ProblemFromJSONTyped(json, ignoreDiscriminator),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'registrationUrl': !exists(json, 'registration_url') ? undefined : json['registration_url'],
    };
}

export function ClientForbiddenProblemToJSON(value?: ClientForbiddenProblem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...ProblemToJSON(value),
        'reason': value.reason,
        'registration_url': value.registrationUrl,
    };
}
