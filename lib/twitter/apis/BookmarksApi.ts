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
  BookmarkAddRequest,
  BookmarkMutationResponse,
  Get2UsersIdBookmarksResponse,
  Problem,
} from '../models';
import {
    BookmarkAddRequestFromJSON,
    BookmarkAddRequestToJSON,
    BookmarkMutationResponseFromJSON,
    BookmarkMutationResponseToJSON,
    Get2UsersIdBookmarksResponseFromJSON,
    Get2UsersIdBookmarksResponseToJSON,
    ProblemFromJSON,
    ProblemToJSON,
} from '../models';

export interface GetUsersIdBookmarksRequest {
    id: string;
    maxResults?: number;
    paginationToken?: string;
    tweetFields?: Set<GetUsersIdBookmarksTweetFieldsEnum>;
    expansions?: Set<GetUsersIdBookmarksExpansionsEnum>;
    mediaFields?: Set<GetUsersIdBookmarksMediaFieldsEnum>;
    pollFields?: Set<GetUsersIdBookmarksPollFieldsEnum>;
    userFields?: Set<GetUsersIdBookmarksUserFieldsEnum>;
    placeFields?: Set<GetUsersIdBookmarksPlaceFieldsEnum>;
}

export interface PostUsersIdBookmarksRequest {
    id: string;
    bookmarkAddRequest: BookmarkAddRequest;
}

export interface UsersIdBookmarksDeleteRequest {
    id: string;
    tweetId: string;
}

/**
 * 
 */
export class BookmarksApi extends runtime.BaseAPI {

    /**
     * Returns Tweet objects that have been bookmarked by the requesting User
     * Bookmarks by User
     */
    async getUsersIdBookmarksRaw(requestParameters: GetUsersIdBookmarksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2UsersIdBookmarksResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUsersIdBookmarks.');
        }

        const queryParameters: any = {};

        if (requestParameters.maxResults !== undefined) {
            queryParameters['max_results'] = requestParameters.maxResults;
        }

        if (requestParameters.paginationToken !== undefined) {
            queryParameters['pagination_token'] = requestParameters.paginationToken;
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
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["tweet.read", "users.read", "bookmark.read"]);
        }

        const response = await this.request({
            path: `/2/users/{id}/bookmarks`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2UsersIdBookmarksResponseFromJSON(jsonValue));
    }

    /**
     * Returns Tweet objects that have been bookmarked by the requesting User
     * Bookmarks by User
     */
    async getUsersIdBookmarks(requestParameters: GetUsersIdBookmarksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2UsersIdBookmarksResponse> {
        const response = await this.getUsersIdBookmarksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a Tweet (ID in the body) to the requesting User\'s (in the path) bookmarks
     * Add Tweet to Bookmarks
     */
    async postUsersIdBookmarksRaw(requestParameters: PostUsersIdBookmarksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookmarkMutationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postUsersIdBookmarks.');
        }

        if (requestParameters.bookmarkAddRequest === null || requestParameters.bookmarkAddRequest === undefined) {
            throw new runtime.RequiredError('bookmarkAddRequest','Required parameter requestParameters.bookmarkAddRequest was null or undefined when calling postUsersIdBookmarks.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["tweet.read", "users.read", "bookmark.write"]);
        }

        const response = await this.request({
            path: `/2/users/{id}/bookmarks`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BookmarkAddRequestToJSON(requestParameters.bookmarkAddRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookmarkMutationResponseFromJSON(jsonValue));
    }

    /**
     * Adds a Tweet (ID in the body) to the requesting User\'s (in the path) bookmarks
     * Add Tweet to Bookmarks
     */
    async postUsersIdBookmarks(requestParameters: PostUsersIdBookmarksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookmarkMutationResponse> {
        const response = await this.postUsersIdBookmarksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes a Tweet from the requesting User\'s bookmarked Tweets.
     * Remove a bookmarked Tweet
     */
    async usersIdBookmarksDeleteRaw(requestParameters: UsersIdBookmarksDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookmarkMutationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersIdBookmarksDelete.');
        }

        if (requestParameters.tweetId === null || requestParameters.tweetId === undefined) {
            throw new runtime.RequiredError('tweetId','Required parameter requestParameters.tweetId was null or undefined when calling usersIdBookmarksDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2UserToken", ["tweet.read", "users.read", "bookmark.write"]);
        }

        const response = await this.request({
            path: `/2/users/{id}/bookmarks/{tweet_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"tweet_id"}}`, encodeURIComponent(String(requestParameters.tweetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookmarkMutationResponseFromJSON(jsonValue));
    }

    /**
     * Removes a Tweet from the requesting User\'s bookmarked Tweets.
     * Remove a bookmarked Tweet
     */
    async usersIdBookmarksDelete(requestParameters: UsersIdBookmarksDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookmarkMutationResponse> {
        const response = await this.usersIdBookmarksDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetUsersIdBookmarksTweetFieldsEnum = {
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
export type GetUsersIdBookmarksTweetFieldsEnum = typeof GetUsersIdBookmarksTweetFieldsEnum[keyof typeof GetUsersIdBookmarksTweetFieldsEnum];
/**
 * @export
 */
export const GetUsersIdBookmarksExpansionsEnum = {
    AttachmentsMediaKeys: 'attachments.media_keys',
    AttachmentsPollIds: 'attachments.poll_ids',
    AuthorId: 'author_id',
    EntitiesMentionsUsername: 'entities.mentions.username',
    GeoPlaceId: 'geo.place_id',
    InReplyToUserId: 'in_reply_to_user_id',
    ReferencedTweetsId: 'referenced_tweets.id',
    ReferencedTweetsIdAuthorId: 'referenced_tweets.id.author_id'
} as const;
export type GetUsersIdBookmarksExpansionsEnum = typeof GetUsersIdBookmarksExpansionsEnum[keyof typeof GetUsersIdBookmarksExpansionsEnum];
/**
 * @export
 */
export const GetUsersIdBookmarksMediaFieldsEnum = {
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
export type GetUsersIdBookmarksMediaFieldsEnum = typeof GetUsersIdBookmarksMediaFieldsEnum[keyof typeof GetUsersIdBookmarksMediaFieldsEnum];
/**
 * @export
 */
export const GetUsersIdBookmarksPollFieldsEnum = {
    DurationMinutes: 'duration_minutes',
    EndDatetime: 'end_datetime',
    Id: 'id',
    Options: 'options',
    VotingStatus: 'voting_status'
} as const;
export type GetUsersIdBookmarksPollFieldsEnum = typeof GetUsersIdBookmarksPollFieldsEnum[keyof typeof GetUsersIdBookmarksPollFieldsEnum];
/**
 * @export
 */
export const GetUsersIdBookmarksUserFieldsEnum = {
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
export type GetUsersIdBookmarksUserFieldsEnum = typeof GetUsersIdBookmarksUserFieldsEnum[keyof typeof GetUsersIdBookmarksUserFieldsEnum];
/**
 * @export
 */
export const GetUsersIdBookmarksPlaceFieldsEnum = {
    ContainedWithin: 'contained_within',
    Country: 'country',
    CountryCode: 'country_code',
    FullName: 'full_name',
    Geo: 'geo',
    Id: 'id',
    Name: 'name',
    PlaceType: 'place_type'
} as const;
export type GetUsersIdBookmarksPlaceFieldsEnum = typeof GetUsersIdBookmarksPlaceFieldsEnum[keyof typeof GetUsersIdBookmarksPlaceFieldsEnum];