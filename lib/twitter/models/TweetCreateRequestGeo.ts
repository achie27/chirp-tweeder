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
 * Place ID being attached to the Tweet for geo location.
 * @export
 * @interface TweetCreateRequestGeo
 */
export interface TweetCreateRequestGeo {
    /**
     * 
     * @type {string}
     * @memberof TweetCreateRequestGeo
     */
    placeId?: string;
}

/**
 * Check if a given object implements the TweetCreateRequestGeo interface.
 */
export function instanceOfTweetCreateRequestGeo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TweetCreateRequestGeoFromJSON(json: any): TweetCreateRequestGeo {
    return TweetCreateRequestGeoFromJSONTyped(json, false);
}

export function TweetCreateRequestGeoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCreateRequestGeo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'placeId': !exists(json, 'place_id') ? undefined : json['place_id'],
    };
}

export function TweetCreateRequestGeoToJSON(value?: TweetCreateRequestGeo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'place_id': value.placeId,
    };
}

