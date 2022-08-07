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
 * @interface TweetDropComplianceSchema
 */
export interface TweetDropComplianceSchema {
    /**
     * 
     * @type {TweetComplianceSchema}
     * @memberof TweetDropComplianceSchema
     */
    drop: TweetComplianceSchema;
}

/**
 * Check if a given object implements the TweetDropComplianceSchema interface.
 */
export function instanceOfTweetDropComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "drop" in value;

    return isInstance;
}

export function TweetDropComplianceSchemaFromJSON(json: any): TweetDropComplianceSchema {
    return TweetDropComplianceSchemaFromJSONTyped(json, false);
}

export function TweetDropComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetDropComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'drop': TweetComplianceSchemaFromJSON(json['drop']),
    };
}

export function TweetDropComplianceSchemaToJSON(value?: TweetDropComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'drop': TweetComplianceSchemaToJSON(value.drop),
    };
}
