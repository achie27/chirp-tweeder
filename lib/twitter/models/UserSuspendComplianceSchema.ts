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
 * @interface UserSuspendComplianceSchema
 */
export interface UserSuspendComplianceSchema {
    /**
     * 
     * @type {UserComplianceSchema}
     * @memberof UserSuspendComplianceSchema
     */
    userSuspend: UserComplianceSchema;
}

/**
 * Check if a given object implements the UserSuspendComplianceSchema interface.
 */
export function instanceOfUserSuspendComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userSuspend" in value;

    return isInstance;
}

export function UserSuspendComplianceSchemaFromJSON(json: any): UserSuspendComplianceSchema {
    return UserSuspendComplianceSchemaFromJSONTyped(json, false);
}

export function UserSuspendComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSuspendComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userSuspend': UserComplianceSchemaFromJSON(json['user_suspend']),
    };
}

export function UserSuspendComplianceSchemaToJSON(value?: UserSuspendComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_suspend': UserComplianceSchemaToJSON(value.userSuspend),
    };
}
