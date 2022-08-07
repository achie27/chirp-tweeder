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
import type { UserProfileModificationObjectSchema } from './UserProfileModificationObjectSchema';
import {
    UserProfileModificationObjectSchemaFromJSON,
    UserProfileModificationObjectSchemaFromJSONTyped,
    UserProfileModificationObjectSchemaToJSON,
} from './UserProfileModificationObjectSchema';

/**
 * 
 * @export
 * @interface UserProfileModificationComplianceSchema
 */
export interface UserProfileModificationComplianceSchema {
    /**
     * 
     * @type {UserProfileModificationObjectSchema}
     * @memberof UserProfileModificationComplianceSchema
     */
    userProfileModification: UserProfileModificationObjectSchema;
}

/**
 * Check if a given object implements the UserProfileModificationComplianceSchema interface.
 */
export function instanceOfUserProfileModificationComplianceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userProfileModification" in value;

    return isInstance;
}

export function UserProfileModificationComplianceSchemaFromJSON(json: any): UserProfileModificationComplianceSchema {
    return UserProfileModificationComplianceSchemaFromJSONTyped(json, false);
}

export function UserProfileModificationComplianceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfileModificationComplianceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userProfileModification': UserProfileModificationObjectSchemaFromJSON(json['user_profile_modification']),
    };
}

export function UserProfileModificationComplianceSchemaToJSON(value?: UserProfileModificationComplianceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_profile_modification': UserProfileModificationObjectSchemaToJSON(value.userProfileModification),
    };
}

