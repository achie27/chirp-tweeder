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
import type { UrlEntity } from './UrlEntity';
import {
    UrlEntityFromJSON,
    UrlEntityFromJSONTyped,
    UrlEntityToJSON,
} from './UrlEntity';

/**
 * Expanded details for the URL specified in the User's profile, with start and end indices.
 * @export
 * @interface UserEntitiesUrl
 */
export interface UserEntitiesUrl {
    /**
     * 
     * @type {Array<UrlEntity>}
     * @memberof UserEntitiesUrl
     */
    urls?: Array<UrlEntity>;
}

/**
 * Check if a given object implements the UserEntitiesUrl interface.
 */
export function instanceOfUserEntitiesUrl(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserEntitiesUrlFromJSON(json: any): UserEntitiesUrl {
    return UserEntitiesUrlFromJSONTyped(json, false);
}

export function UserEntitiesUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserEntitiesUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'urls': !exists(json, 'urls') ? undefined : ((json['urls'] as Array<any>).map(UrlEntityFromJSON)),
    };
}

export function UserEntitiesUrlToJSON(value?: UserEntitiesUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'urls': value.urls === undefined ? undefined : ((value.urls as Array<any>).map(UrlEntityToJSON)),
    };
}

