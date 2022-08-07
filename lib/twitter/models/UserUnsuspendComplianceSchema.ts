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
 * @interface UserUnsuspendComplianceSchema
 */
export interface UserUnsuspendComplianceSchema {
    /**
     * 
     * @type {UserComplianceSchema}
     * @memberof UserUnsuspendComplianceSchema
     */
    userUnsuspend: UserComplianceSchema;
}

/**
 * Check if a given object implements the UserUnsuspendComplianceSchema interface.
 */
export function instanceOfUserUnsuspendComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userUnsuspend" in value;

    return isInstance;
}

export function UserUnsuspendComplianceSchemaFromJSON(json: any): UserUnsuspendComplianceSchema {
    return UserUnsuspendComplianceSchemaFromJSONTyped(json, false);
}

export function UserUnsuspendComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUnsuspendComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userUnsuspend': UserComplianceSchemaFromJSON(json['user_unsuspend']),
    };
}

export function UserUnsuspendComplianceSchemaToJSON(value?: UserUnsuspendComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_unsuspend': UserComplianceSchemaToJSON(value.userUnsuspend),
    };
}
