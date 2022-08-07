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
 * Describes a choice in a Poll object.
 * @export
 * @interface PollOption
 */
export interface PollOption {
    /**
     * The text of a poll choice.
     * @type {string}
     * @memberof PollOption
     */
    label: string;
    /**
     * Position of this choice in the poll.
     * @type {number}
     * @memberof PollOption
     */
    position: number;
    /**
     * Number of users who voted for this choice.
     * @type {number}
     * @memberof PollOption
     */
    votes: number;
}

/**
 * Check if a given object implements the PollOption interface.
 */
export function instanceOfPollOption(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "position" in value;
    isInstance = isInstance && "votes" in value;

    return isInstance;
}

export function PollOptionFromJSON(json: any): PollOption {
    return PollOptionFromJSONTyped(json, false);
}

export function PollOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PollOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': json['label'],
        'position': json['position'],
        'votes': json['votes'],
    };
}

export function PollOptionToJSON(value?: PollOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'position': value.position,
        'votes': value.votes,
    };
}
