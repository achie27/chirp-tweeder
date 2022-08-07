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
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
} from './Variant';

/**
 * 
 * @export
 * @interface AnimatedGifAllOf
 */
export interface AnimatedGifAllOf {
    /**
     * 
     * @type {string}
     * @memberof AnimatedGifAllOf
     */
    previewImageUrl?: string;
    /**
     * An array of all available variants of the media.
     * @type {Array<Variant>}
     * @memberof AnimatedGifAllOf
     */
    variants?: Array<Variant>;
}

/**
 * Check if a given object implements the AnimatedGifAllOf interface.
 */
export function instanceOfAnimatedGifAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnimatedGifAllOfFromJSON(json: any): AnimatedGifAllOf {
    return AnimatedGifAllOfFromJSONTyped(json, false);
}

export function AnimatedGifAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnimatedGifAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'previewImageUrl': !exists(json, 'preview_image_url') ? undefined : json['preview_image_url'],
        'variants': !exists(json, 'variants') ? undefined : ((json['variants'] as Array<any>).map(VariantFromJSON)),
    };
}

export function AnimatedGifAllOfToJSON(value?: AnimatedGifAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preview_image_url': value.previewImageUrl,
        'variants': value.variants === undefined ? undefined : ((value.variants as Array<any>).map(VariantToJSON)),
    };
}
