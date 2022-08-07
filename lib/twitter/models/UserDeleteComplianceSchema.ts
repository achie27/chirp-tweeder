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
import type { UserComplianceSchema } from './UserComplianceSchema';
import {
    UserComplianceSchemaFromJSON,
    UserComplianceSchemaFromJSONTyped,
    UserComplianceSchemaToJSON,
} from './UserComplianceSchema';

/**
 * 
 * @export
 * @interface UserDeleteComplianceSchema
 */
export interface UserDeleteComplianceSchema {
    /**
     * 
     * @type {UserComplianceSchema}
     * @memberof UserDeleteComplianceSchema
     */
    userDelete: UserComplianceSchema;
}

/**
 * Check if a given object implements the UserDeleteComplianceSchema interface.
 */
export function instanceOfUserDeleteComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userDelete" in value;

    return isInstance;
}

export function UserDeleteComplianceSchemaFromJSON(json: any): UserDeleteComplianceSchema {
    return UserDeleteComplianceSchemaFromJSONTyped(json, false);
}

export function UserDeleteComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDeleteComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userDelete': UserComplianceSchemaFromJSON(json['user_delete']),
    };
}

export function UserDeleteComplianceSchemaToJSON(value?: UserDeleteComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_delete': UserComplianceSchemaToJSON(value.userDelete),
    };
}
