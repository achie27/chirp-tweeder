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


import * as runtime from '../runtime';
import type {
  Get2SpacesByCreatorIdsResponse,
  Get2SpacesIdBuyersResponse,
  Get2SpacesIdResponse,
  Get2SpacesIdTweetsResponse,
  Get2SpacesResponse,
  Get2SpacesSearchResponse,
  Problem,
} from '../models';
import {
    Get2SpacesByCreatorIdsResponseFromJSON,
    Get2SpacesByCreatorIdsResponseToJSON,
    Get2SpacesIdBuyersResponseFromJSON,
    Get2SpacesIdBuyersResponseToJSON,
    Get2SpacesIdResponseFromJSON,
    Get2SpacesIdResponseToJSON,
    Get2SpacesIdTweetsResponseFromJSON,
    Get2SpacesIdTweetsResponseToJSON,
    Get2SpacesResponseFromJSON,
    Get2SpacesResponseToJSON,
    Get2SpacesSearchResponseFromJSON,
    Get2SpacesSearchResponseToJSON,
    ProblemFromJSON,
    ProblemToJSON,
} from '../models';

export interface FindSpaceByIdRequest {
    id: string;
    spaceFields?: Set<FindSpaceByIdSpaceFieldsEnum>;
    expansions?: Set<FindSpaceByIdExpansionsEnum>;
    userFields?: Set<FindSpaceByIdUserFieldsEnum>;
    topicFields?: Set<FindSpaceByIdTopicFieldsEnum>;
}

export interface FindSpacesByCreatorIdsRequest {
    userIds: Array<string>;
    spaceFields?: Set<FindSpacesByCreatorIdsSpaceFieldsEnum>;
    expansions?: Set<FindSpacesByCreatorIdsExpansionsEnum>;
    userFields?: Set<FindSpacesByCreatorIdsUserFieldsEnum>;
    topicFields?: Set<FindSpacesByCreatorIdsTopicFieldsEnum>;
}

export interface FindSpacesByIdsRequest {
    ids: Array<string>;
    spaceFields?: Set<FindSpacesByIdsSpaceFieldsEnum>;
    expansions?: Set<FindSpacesByIdsExpansionsEnum>;
    userFields?: Set<FindSpacesByIdsUserFieldsEnum>;
    topicFields?: Set<FindSpacesByIdsTopicFieldsEnum>;
}

export interface SearchSpacesRequest {
    query: string;
    state?: SearchSpacesStateEnum;
    maxResults?: number;
    spaceFields?: Set<SearchSpacesSpaceFieldsEnum>;
    expansions?: Set<SearchSpacesExpansionsEnum>;
    userFields?: Set<SearchSpacesUserFieldsEnum>;
    topicFields?: Set<SearchSpacesTopicFieldsEnum>;
}

export interface SpaceBuyersRequest {
    id: string;
    paginationToken?: string;
    maxResults?: number;
    userFields?: Set<SpaceBuyersUserFieldsEnum>;
    expansions?: Set<SpaceBuyersExpansionsEnum>;
    tweetFields?: Set<SpaceBuyersTweetFieldsEnum>;
}

export interface SpaceTweetsRequest {
    id: string;
    maxResults?: number;
    tweetFields?: Set<SpaceTweetsTweetFieldsEnum>;
    expansions?: Set<SpaceTweetsExpansionsEnum>;
    mediaFields?: Set<SpaceTweetsMediaFieldsEnum>;
    pollFields?: Set<SpaceTweetsPollFieldsEnum>;
    userFields?: Set<SpaceTweetsUserFieldsEnum>;
    placeFields?: Set<SpaceTweetsPlaceFieldsEnum>;
}

/**
 * 
 */
export class SpacesApi extends runtime.BaseAPI {

    /**
     * Returns a variety of information about the Space specified by the requested ID
     * Space lookup by Space ID
     */
    async findSpaceByIdRaw(requestParameters: FindSpaceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2SpacesIdResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findSpaceById.');
        }

        const queryParameters: any = {};

        if (requestParameters.spaceFields) {
            queryParameters['space.fields'] = Array.from(requestParameters.spaceFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.expansions) {
            queryParameters['expansions'] = Array.from(requestParameters.expansions).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.userFields) {
            queryParameters['user.fields'] = Array.from(requestParameters.userFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.topicFields) {
            queryParameters['topic.fields'] = Array.from(requestParameters.topicFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["users.read", "tweet.read", "space.read"]);
        }

        const response = await this.request({
            path: `/2/spaces/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2SpacesIdResponseFromJSON(jsonValue));
    }

    /**
     * Returns a variety of information about the Space specified by the requested ID
     * Space lookup by Space ID
     */
    async findSpaceById(requestParameters: FindSpaceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2SpacesIdResponse> {
        const response = await this.findSpaceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a variety of information about the Spaces created by the provided User IDs
     * Space lookup by their creators
     */
    async findSpacesByCreatorIdsRaw(requestParameters: FindSpacesByCreatorIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2SpacesByCreatorIdsResponse>> {
        if (requestParameters.userIds === null || requestParameters.userIds === undefined) {
            throw new runtime.RequiredError('userIds','Required parameter requestParameters.userIds was null or undefined when calling findSpacesByCreatorIds.');
        }

        const queryParameters: any = {};

        if (requestParameters.userIds) {
            queryParameters['user_ids'] = requestParameters.userIds;
        }

        if (requestParameters.spaceFields) {
            queryParameters['space.fields'] = Array.from(requestParameters.spaceFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.expansions) {
            queryParameters['expansions'] = Array.from(requestParameters.expansions).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.userFields) {
            queryParameters['user.fields'] = Array.from(requestParameters.userFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.topicFields) {
            queryParameters['topic.fields'] = Array.from(requestParameters.topicFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["users.read", "tweet.read", "space.read"]);
        }

        const response = await this.request({
            path: `/2/spaces/by/creator_ids`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2SpacesByCreatorIdsResponseFromJSON(jsonValue));
    }

    /**
     * Returns a variety of information about the Spaces created by the provided User IDs
     * Space lookup by their creators
     */
    async findSpacesByCreatorIds(requestParameters: FindSpacesByCreatorIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2SpacesByCreatorIdsResponse> {
        const response = await this.findSpacesByCreatorIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a variety of information about the Spaces specified by the requested IDs
     * Space lookup up Space IDs
     */
    async findSpacesByIdsRaw(requestParameters: FindSpacesByIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2SpacesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling findSpacesByIds.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        if (requestParameters.spaceFields) {
            queryParameters['space.fields'] = Array.from(requestParameters.spaceFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.expansions) {
            queryParameters['expansions'] = Array.from(requestParameters.expansions).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.userFields) {
            queryParameters['user.fields'] = Array.from(requestParameters.userFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.topicFields) {
            queryParameters['topic.fields'] = Array.from(requestParameters.topicFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["users.read", "tweet.read", "space.read"]);
        }

        const response = await this.request({
            path: `/2/spaces`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2SpacesResponseFromJSON(jsonValue));
    }

    /**
     * Returns a variety of information about the Spaces specified by the requested IDs
     * Space lookup up Space IDs
     */
    async findSpacesByIds(requestParameters: FindSpacesByIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2SpacesResponse> {
        const response = await this.findSpacesByIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns Spaces that match the provided query.
     * Search for Spaces
     */
    async searchSpacesRaw(requestParameters: SearchSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2SpacesSearchResponse>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchSpaces.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['max_results'] = requestParameters.maxResults;
        }

        if (requestParameters.spaceFields) {
            queryParameters['space.fields'] = Array.from(requestParameters.spaceFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.expansions) {
            queryParameters['expansions'] = Array.from(requestParameters.expansions).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.userFields) {
            queryParameters['user.fields'] = Array.from(requestParameters.userFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.topicFields) {
            queryParameters['topic.fields'] = Array.from(requestParameters.topicFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["users.read", "tweet.read", "space.read"]);
        }

        const response = await this.request({
            path: `/2/spaces/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2SpacesSearchResponseFromJSON(jsonValue));
    }

    /**
     * Returns Spaces that match the provided query.
     * Search for Spaces
     */
    async searchSpaces(requestParameters: SearchSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2SpacesSearchResponse> {
        const response = await this.searchSpacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the list of Users who purchased a ticket to the given space
     * Retrieve the list of Users who purchased a ticket to the given space
     */
    async spaceBuyersRaw(requestParameters: SpaceBuyersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2SpacesIdBuyersResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling spaceBuyers.');
        }

        const queryParameters: any = {};

        if (requestParameters.paginationToken !== undefined) {
            queryParameters['pagination_token'] = requestParameters.paginationToken;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['max_results'] = requestParameters.maxResults;
        }

        if (requestParameters.userFields) {
            queryParameters['user.fields'] = Array.from(requestParameters.userFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.expansions) {
            queryParameters['expansions'] = Array.from(requestParameters.expansions).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tweetFields) {
            queryParameters['tweet.fields'] = Array.from(requestParameters.tweetFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["users.read", "tweet.read", "space.read"]);
        }

        const response = await this.request({
            path: `/2/spaces/{id}/buyers`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2SpacesIdBuyersResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the list of Users who purchased a ticket to the given space
     * Retrieve the list of Users who purchased a ticket to the given space
     */
    async spaceBuyers(requestParameters: SpaceBuyersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2SpacesIdBuyersResponse> {
        const response = await this.spaceBuyersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves Tweets shared in the specified Space.
     * Retrieve Tweets from a Space.
     */
    async spaceTweetsRaw(requestParameters: SpaceTweetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2SpacesIdTweetsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling spaceTweets.');
        }

        const queryParameters: any = {};

        if (requestParameters.maxResults !== undefined) {
            queryParameters['max_results'] = requestParameters.maxResults;
        }

        if (requestParameters.tweetFields) {
            queryParameters['tweet.fields'] = Array.from(requestParameters.tweetFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.expansions) {
            queryParameters['expansions'] = Array.from(requestParameters.expansions).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.mediaFields) {
            queryParameters['media.fields'] = Array.from(requestParameters.mediaFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.pollFields) {
            queryParameters['poll.fields'] = Array.from(requestParameters.pollFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.userFields) {
            queryParameters['user.fields'] = Array.from(requestParameters.userFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.placeFields) {
            queryParameters['place.fields'] = Array.from(requestParameters.placeFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["users.read", "tweet.read", "space.read"]);
        }

        const response = await this.request({
            path: `/2/spaces/{id}/tweets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2SpacesIdTweetsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves Tweets shared in the specified Space.
     * Retrieve Tweets from a Space.
     */
    async spaceTweets(requestParameters: SpaceTweetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2SpacesIdTweetsResponse> {
        const response = await this.spaceTweetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const FindSpaceByIdSpaceFieldsEnum = {
    CreatedAt: 'created_at',
    CreatorId: 'creator_id',
    EndedAt: 'ended_at',
    HostIds: 'host_ids',
    Id: 'id',
    InvitedUserIds: 'invited_user_ids',
    IsTicketed: 'is_ticketed',
    Lang: 'lang',
    ParticipantCount: 'participant_count',
    ScheduledStart: 'scheduled_start',
    SpeakerIds: 'speaker_ids',
    StartedAt: 'started_at',
    State: 'state',
    SubscriberCount: 'subscriber_count',
    Title: 'title',
    TopicIds: 'topic_ids',
    UpdatedAt: 'updated_at'
} as const;
export type FindSpaceByIdSpaceFieldsEnum = typeof FindSpaceByIdSpaceFieldsEnum[keyof typeof FindSpaceByIdSpaceFieldsEnum];
/**
 * @export
 */
export const FindSpaceByIdExpansionsEnum = {
    CreatorId: 'creator_id',
    HostIds: 'host_ids',
    InvitedUserIds: 'invited_user_ids',
    SpeakerIds: 'speaker_ids',
    TopicIds: 'topic_ids'
} as const;
export type FindSpaceByIdExpansionsEnum = typeof FindSpaceByIdExpansionsEnum[keyof typeof FindSpaceByIdExpansionsEnum];
/**
 * @export
 */
export const FindSpaceByIdUserFieldsEnum = {
    CreatedAt: 'created_at',
    Description: 'description',
    Entities: 'entities',
    Id: 'id',
    Location: 'location',
    Name: 'name',
    PinnedTweetId: 'pinned_tweet_id',
    ProfileImageUrl: 'profile_image_url',
    Protected: 'protected',
    PublicMetrics: 'public_metrics',
    Url: 'url',
    Username: 'username',
    Verified: 'verified',
    Withheld: 'withheld'
} as const;
export type FindSpaceByIdUserFieldsEnum = typeof FindSpaceByIdUserFieldsEnum[keyof typeof FindSpaceByIdUserFieldsEnum];
/**
 * @export
 */
export const FindSpaceByIdTopicFieldsEnum = {
    Description: 'description',
    Id: 'id',
    Name: 'name'
} as const;
export type FindSpaceByIdTopicFieldsEnum = typeof FindSpaceByIdTopicFieldsEnum[keyof typeof FindSpaceByIdTopicFieldsEnum];
/**
 * @export
 */
export const FindSpacesByCreatorIdsSpaceFieldsEnum = {
    CreatedAt: 'created_at',
    CreatorId: 'creator_id',
    EndedAt: 'ended_at',
    HostIds: 'host_ids',
    Id: 'id',
    InvitedUserIds: 'invited_user_ids',
    IsTicketed: 'is_ticketed',
    Lang: 'lang',
    ParticipantCount: 'participant_count',
    ScheduledStart: 'scheduled_start',
    SpeakerIds: 'speaker_ids',
    StartedAt: 'started_at',
    State: 'state',
    SubscriberCount: 'subscriber_count',
    Title: 'title',
    TopicIds: 'topic_ids',
    UpdatedAt: 'updated_at'
} as const;
export type FindSpacesByCreatorIdsSpaceFieldsEnum = typeof FindSpacesByCreatorIdsSpaceFieldsEnum[keyof typeof FindSpacesByCreatorIdsSpaceFieldsEnum];
/**
 * @export
 */
export const FindSpacesByCreatorIdsExpansionsEnum = {
    CreatorId: 'creator_id',
    HostIds: 'host_ids',
    InvitedUserIds: 'invited_user_ids',
    SpeakerIds: 'speaker_ids',
    TopicIds: 'topic_ids'
} as const;
export type FindSpacesByCreatorIdsExpansionsEnum = typeof FindSpacesByCreatorIdsExpansionsEnum[keyof typeof FindSpacesByCreatorIdsExpansionsEnum];
/**
 * @export
 */
export const FindSpacesByCreatorIdsUserFieldsEnum = {
    CreatedAt: 'created_at',
    Description: 'description',
    Entities: 'entities',
    Id: 'id',
    Location: 'location',
    Name: 'name',
    PinnedTweetId: 'pinned_tweet_id',
    ProfileImageUrl: 'profile_image_url',
    Protected: 'protected',
    PublicMetrics: 'public_metrics',
    Url: 'url',
    Username: 'username',
    Verified: 'verified',
    Withheld: 'withheld'
} as const;
export type FindSpacesByCreatorIdsUserFieldsEnum = typeof FindSpacesByCreatorIdsUserFieldsEnum[keyof typeof FindSpacesByCreatorIdsUserFieldsEnum];
/**
 * @export
 */
export const FindSpacesByCreatorIdsTopicFieldsEnum = {
    Description: 'description',
    Id: 'id',
    Name: 'name'
} as const;
export type FindSpacesByCreatorIdsTopicFieldsEnum = typeof FindSpacesByCreatorIdsTopicFieldsEnum[keyof typeof FindSpacesByCreatorIdsTopicFieldsEnum];
/**
 * @export
 */
export const FindSpacesByIdsSpaceFieldsEnum = {
    CreatedAt: 'created_at',
    CreatorId: 'creator_id',
    EndedAt: 'ended_at',
    HostIds: 'host_ids',
    Id: 'id',
    InvitedUserIds: 'invited_user_ids',
    IsTicketed: 'is_ticketed',
    Lang: 'lang',
    ParticipantCount: 'participant_count',
    ScheduledStart: 'scheduled_start',
    SpeakerIds: 'speaker_ids',
    StartedAt: 'started_at',
    State: 'state',
    SubscriberCount: 'subscriber_count',
    Title: 'title',
    TopicIds: 'topic_ids',
    UpdatedAt: 'updated_at'
} as const;
export type FindSpacesByIdsSpaceFieldsEnum = typeof FindSpacesByIdsSpaceFieldsEnum[keyof typeof FindSpacesByIdsSpaceFieldsEnum];
/**
 * @export
 */
export const FindSpacesByIdsExpansionsEnum = {
    CreatorId: 'creator_id',
    HostIds: 'host_ids',
    InvitedUserIds: 'invited_user_ids',
    SpeakerIds: 'speaker_ids',
    TopicIds: 'topic_ids'
} as const;
export type FindSpacesByIdsExpansionsEnum = typeof FindSpacesByIdsExpansionsEnum[keyof typeof FindSpacesByIdsExpansionsEnum];
/**
 * @export
 */
export const FindSpacesByIdsUserFieldsEnum = {
    CreatedAt: 'created_at',
    Description: 'description',
    Entities: 'entities',
    Id: 'id',
    Location: 'location',
    Name: 'name',
    PinnedTweetId: 'pinned_tweet_id',
    ProfileImageUrl: 'profile_image_url',
    Protected: 'protected',
    PublicMetrics: 'public_metrics',
    Url: 'url',
    Username: 'username',
    Verified: 'verified',
    Withheld: 'withheld'
} as const;
export type FindSpacesByIdsUserFieldsEnum = typeof FindSpacesByIdsUserFieldsEnum[keyof typeof FindSpacesByIdsUserFieldsEnum];
/**
 * @export
 */
export const FindSpacesByIdsTopicFieldsEnum = {
    Description: 'description',
    Id: 'id',
    Name: 'name'
} as const;
export type FindSpacesByIdsTopicFieldsEnum = typeof FindSpacesByIdsTopicFieldsEnum[keyof typeof FindSpacesByIdsTopicFieldsEnum];
/**
 * @export
 */
export const SearchSpacesStateEnum = {
    Live: 'live',
    Scheduled: 'scheduled',
    All: 'all'
} as const;
export type SearchSpacesStateEnum = typeof SearchSpacesStateEnum[keyof typeof SearchSpacesStateEnum];
/**
 * @export
 */
export const SearchSpacesSpaceFieldsEnum = {
    CreatedAt: 'created_at',
    CreatorId: 'creator_id',
    EndedAt: 'ended_at',
    HostIds: 'host_ids',
    Id: 'id',
    InvitedUserIds: 'invited_user_ids',
    IsTicketed: 'is_ticketed',
    Lang: 'lang',
    ParticipantCount: 'participant_count',
    ScheduledStart: 'scheduled_start',
    SpeakerIds: 'speaker_ids',
    StartedAt: 'started_at',
    State: 'state',
    SubscriberCount: 'subscriber_count',
    Title: 'title',
    TopicIds: 'topic_ids',
    UpdatedAt: 'updated_at'
} as const;
export type SearchSpacesSpaceFieldsEnum = typeof SearchSpacesSpaceFieldsEnum[keyof typeof SearchSpacesSpaceFieldsEnum];
/**
 * @export
 */
export const SearchSpacesExpansionsEnum = {
    CreatorId: 'creator_id',
    HostIds: 'host_ids',
    InvitedUserIds: 'invited_user_ids',
    SpeakerIds: 'speaker_ids',
    TopicIds: 'topic_ids'
} as const;
export type SearchSpacesExpansionsEnum = typeof SearchSpacesExpansionsEnum[keyof typeof SearchSpacesExpansionsEnum];
/**
 * @export
 */
export const SearchSpacesUserFieldsEnum = {
    CreatedAt: 'created_at',
    Description: 'description',
    Entities: 'entities',
    Id: 'id',
    Location: 'location',
    Name: 'name',
    PinnedTweetId: 'pinned_tweet_id',
    ProfileImageUrl: 'profile_image_url',
    Protected: 'protected',
    PublicMetrics: 'public_metrics',
    Url: 'url',
    Username: 'username',
    Verified: 'verified',
    Withheld: 'withheld'
} as const;
export type SearchSpacesUserFieldsEnum = typeof SearchSpacesUserFieldsEnum[keyof typeof SearchSpacesUserFieldsEnum];
/**
 * @export
 */
export const SearchSpacesTopicFieldsEnum = {
    Description: 'description',
    Id: 'id',
    Name: 'name'
} as const;
export type SearchSpacesTopicFieldsEnum = typeof SearchSpacesTopicFieldsEnum[keyof typeof SearchSpacesTopicFieldsEnum];
/**
 * @export
 */
export const SpaceBuyersUserFieldsEnum = {
    CreatedAt: 'created_at',
    Description: 'description',
    Entities: 'entities',
    Id: 'id',
    Location: 'location',
    Name: 'name',
    PinnedTweetId: 'pinned_tweet_id',
    ProfileImageUrl: 'profile_image_url',
    Protected: 'protected',
    PublicMetrics: 'public_metrics',
    Url: 'url',
    Username: 'username',
    Verified: 'verified',
    Withheld: 'withheld'
} as const;
export type SpaceBuyersUserFieldsEnum = typeof SpaceBuyersUserFieldsEnum[keyof typeof SpaceBuyersUserFieldsEnum];
/**
 * @export
 */
export const SpaceBuyersExpansionsEnum = {
    PinnedTweetId: 'pinned_tweet_id'
} as const;
export type SpaceBuyersExpansionsEnum = typeof SpaceBuyersExpansionsEnum[keyof typeof SpaceBuyersExpansionsEnum];
/**
 * @export
 */
export const SpaceBuyersTweetFieldsEnum = {
    Attachments: 'attachments',
    AuthorId: 'author_id',
    ContextAnnotations: 'context_annotations',
    ConversationId: 'conversation_id',
    CreatedAt: 'created_at',
    Entities: 'entities',
    Geo: 'geo',
    Id: 'id',
    InReplyToUserId: 'in_reply_to_user_id',
    Lang: 'lang',
    NonPublicMetrics: 'non_public_metrics',
    OrganicMetrics: 'organic_metrics',
    PossiblySensitive: 'possibly_sensitive',
    PromotedMetrics: 'promoted_metrics',
    PublicMetrics: 'public_metrics',
    ReferencedTweets: 'referenced_tweets',
    ReplySettings: 'reply_settings',
    Source: 'source',
    Text: 'text',
    Withheld: 'withheld'
} as const;
export type SpaceBuyersTweetFieldsEnum = typeof SpaceBuyersTweetFieldsEnum[keyof typeof SpaceBuyersTweetFieldsEnum];
/**
 * @export
 */
export const SpaceTweetsTweetFieldsEnum = {
    Attachments: 'attachments',
    AuthorId: 'author_id',
    ContextAnnotations: 'context_annotations',
    ConversationId: 'conversation_id',
    CreatedAt: 'created_at',
    Entities: 'entities',
    Geo: 'geo',
    Id: 'id',
    InReplyToUserId: 'in_reply_to_user_id',
    Lang: 'lang',
    NonPublicMetrics: 'non_public_metrics',
    OrganicMetrics: 'organic_metrics',
    PossiblySensitive: 'possibly_sensitive',
    PromotedMetrics: 'promoted_metrics',
    PublicMetrics: 'public_metrics',
    ReferencedTweets: 'referenced_tweets',
    ReplySettings: 'reply_settings',
    Source: 'source',
    Text: 'text',
    Withheld: 'withheld'
} as const;
export type SpaceTweetsTweetFieldsEnum = typeof SpaceTweetsTweetFieldsEnum[keyof typeof SpaceTweetsTweetFieldsEnum];
/**
 * @export
 */
export const SpaceTweetsExpansionsEnum = {
    AttachmentsMediaKeys: 'attachments.media_keys',
    AttachmentsPollIds: 'attachments.poll_ids',
    AuthorId: 'author_id',
    EntitiesMentionsUsername: 'entities.mentions.username',
    GeoPlaceId: 'geo.place_id',
    InReplyToUserId: 'in_reply_to_user_id',
    ReferencedTweetsId: 'referenced_tweets.id',
    ReferencedTweetsIdAuthorId: 'referenced_tweets.id.author_id'
} as const;
export type SpaceTweetsExpansionsEnum = typeof SpaceTweetsExpansionsEnum[keyof typeof SpaceTweetsExpansionsEnum];
/**
 * @export
 */
export const SpaceTweetsMediaFieldsEnum = {
    AltText: 'alt_text',
    DurationMs: 'duration_ms',
    Height: 'height',
    MediaKey: 'media_key',
    NonPublicMetrics: 'non_public_metrics',
    OrganicMetrics: 'organic_metrics',
    PreviewImageUrl: 'preview_image_url',
    PromotedMetrics: 'promoted_metrics',
    PublicMetrics: 'public_metrics',
    Type: 'type',
    Url: 'url',
    Variants: 'variants',
    Width: 'width'
} as const;
export type SpaceTweetsMediaFieldsEnum = typeof SpaceTweetsMediaFieldsEnum[keyof typeof SpaceTweetsMediaFieldsEnum];
/**
 * @export
 */
export const SpaceTweetsPollFieldsEnum = {
    DurationMinutes: 'duration_minutes',
    EndDatetime: 'end_datetime',
    Id: 'id',
    Options: 'options',
    VotingStatus: 'voting_status'
} as const;
export type SpaceTweetsPollFieldsEnum = typeof SpaceTweetsPollFieldsEnum[keyof typeof SpaceTweetsPollFieldsEnum];
/**
 * @export
 */
export const SpaceTweetsUserFieldsEnum = {
    CreatedAt: 'created_at',
    Description: 'description',
    Entities: 'entities',
    Id: 'id',
    Location: 'location',
    Name: 'name',
    PinnedTweetId: 'pinned_tweet_id',
    ProfileImageUrl: 'profile_image_url',
    Protected: 'protected',
    PublicMetrics: 'public_metrics',
    Url: 'url',
    Username: 'username',
    Verified: 'verified',
    Withheld: 'withheld'
} as const;
export type SpaceTweetsUserFieldsEnum = typeof SpaceTweetsUserFieldsEnum[keyof typeof SpaceTweetsUserFieldsEnum];
/**
 * @export
 */
export const SpaceTweetsPlaceFieldsEnum = {
    ContainedWithin: 'contained_within',
    Country: 'country',
    CountryCode: 'country_code',
    FullName: 'full_name',
    Geo: 'geo',
    Id: 'id',
    Name: 'name',
    PlaceType: 'place_type'
} as const;
export type SpaceTweetsPlaceFieldsEnum = typeof SpaceTweetsPlaceFieldsEnum[keyof typeof SpaceTweetsPlaceFieldsEnum];
