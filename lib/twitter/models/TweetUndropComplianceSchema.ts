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
import type { TweetComplianceSchema } from './TweetComplianceSchema';
import {
    TweetComplianceSchemaFromJSON,
    TweetComplianceSchemaFromJSONTyped,
    TweetComplianceSchemaToJSON,
} from './TweetComplianceSchema';

/**
 * 
 * @export
 * @interface TweetUndropComplianceSchema
 */
export interface TweetUndropComplianceSchema {
    /**
     * 
     * @type {TweetComplianceSchema}
     * @memberof TweetUndropComplianceSchema
     */
    undrop: TweetComplianceSchema;
}

/**
 * Check if a given object implements the TweetUndropComplianceSchema interface.
 */
export function instanceOfTweetUndropComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "undrop" in value;

    return isInstance;
}

export function TweetUndropComplianceSchemaFromJSON(json: any): TweetUndropComplianceSchema {
    return TweetUndropComplianceSchemaFromJSONTyped(json, false);
}

export function TweetUndropComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetUndropComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'undrop': TweetComplianceSchemaFromJSON(json['undrop']),
    };
}

export function TweetUndropComplianceSchemaToJSON(value?: TweetUndropComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'undrop': TweetComplianceSchemaToJSON(value.undrop),
    };
}
