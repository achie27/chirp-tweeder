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
 * @interface Variant
 */
export interface Variant {
    /**
     * The bit rate of the media.
     * @type {number}
     * @memberof Variant
     */
    bitRate?: number;
    /**
     * The content type of the media.
     * @type {string}
     * @memberof Variant
     */
    contentType?: string;
    /**
     * The url to the media.
     * @type {string}
     * @memberof Variant
     */
    url?: string;
}

/**
 * Check if a given object implements the Variant interface.
 */
export function instanceOfVariant(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VariantFromJSON(json: any): Variant {
    return VariantFromJSONTyped(json, false);
}

export function VariantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Variant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bitRate': !exists(json, 'bit_rate') ? undefined : json['bit_rate'],
        'contentType': !exists(json, 'content_type') ? undefined : json['content_type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function VariantToJSON(value?: Variant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bit_rate': value.bitRate,
        'content_type': value.contentType,
        'url': value.url,
    };
}
