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
  CreateComplianceJobRequest,
  CreateComplianceJobResponse,
  Get2ComplianceJobsIdResponse,
  Get2ComplianceJobsResponse,
  Problem,
  TweetComplianceStreamResponse,
  UserComplianceStreamResponse,
} from '../models';
import {
    CreateComplianceJobRequestFromJSON,
    CreateComplianceJobRequestToJSON,
    CreateComplianceJobResponseFromJSON,
    CreateComplianceJobResponseToJSON,
    Get2ComplianceJobsIdResponseFromJSON,
    Get2ComplianceJobsIdResponseToJSON,
    Get2ComplianceJobsResponseFromJSON,
    Get2ComplianceJobsResponseToJSON,
    ProblemFromJSON,
    ProblemToJSON,
    TweetComplianceStreamResponseFromJSON,
    TweetComplianceStreamResponseToJSON,
    UserComplianceStreamResponseFromJSON,
    UserComplianceStreamResponseToJSON,
} from '../models';

export interface CreateBatchComplianceJobRequest {
    createComplianceJobRequest: CreateComplianceJobRequest;
}

export interface GetBatchComplianceJobRequest {
    id: string;
    complianceJobFields?: Set<GetBatchComplianceJobComplianceJobFieldsEnum>;
}

export interface GetTweetsComplianceStreamRequest {
    partition: number;
    backfillMinutes?: number;
    startTime?: Date;
    endTime?: Date;
}

export interface GetUsersComplianceStreamRequest {
    partition: number;
    backfillMinutes?: number;
    startTime?: Date;
    endTime?: Date;
}

export interface ListBatchComplianceJobsRequest {
    type: ListBatchComplianceJobsTypeEnum;
    status?: ListBatchComplianceJobsStatusEnum;
    complianceJobFields?: Set<ListBatchComplianceJobsComplianceJobFieldsEnum>;
}

/**
 * 
 */
export class ComplianceApi extends runtime.BaseAPI {

    /**
     * Creates a compliance for the given job type
     * Create compliance job
     */
    async createBatchComplianceJobRaw(requestParameters: CreateBatchComplianceJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateComplianceJobResponse>> {
        if (requestParameters.createComplianceJobRequest === null || requestParameters.createComplianceJobRequest === undefined) {
            throw new runtime.RequiredError('createComplianceJobRequest','Required parameter requestParameters.createComplianceJobRequest was null or undefined when calling createBatchComplianceJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/2/compliance/jobs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateComplianceJobRequestToJSON(requestParameters.createComplianceJobRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateComplianceJobResponseFromJSON(jsonValue));
    }

    /**
     * Creates a compliance for the given job type
     * Create compliance job
     */
    async createBatchComplianceJob(requestParameters: CreateBatchComplianceJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateComplianceJobResponse> {
        const response = await this.createBatchComplianceJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single Compliance Job by ID
     * Get Compliance Job
     */
    async getBatchComplianceJobRaw(requestParameters: GetBatchComplianceJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2ComplianceJobsIdResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBatchComplianceJob.');
        }

        const queryParameters: any = {};

        if (requestParameters.complianceJobFields) {
            queryParameters['compliance_job.fields'] = Array.from(requestParameters.complianceJobFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/2/compliance/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2ComplianceJobsIdResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single Compliance Job by ID
     * Get Compliance Job
     */
    async getBatchComplianceJob(requestParameters: GetBatchComplianceJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2ComplianceJobsIdResponse> {
        const response = await this.getBatchComplianceJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Streams 100% of compliance data for Tweets
     * Tweets Compliance stream
     */
    async getTweetsComplianceStreamRaw(requestParameters: GetTweetsComplianceStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TweetComplianceStreamResponse>> {
        if (requestParameters.partition === null || requestParameters.partition === undefined) {
            throw new runtime.RequiredError('partition','Required parameter requestParameters.partition was null or undefined when calling getTweetsComplianceStream.');
        }

        const queryParameters: any = {};

        if (requestParameters.backfillMinutes !== undefined) {
            queryParameters['backfill_minutes'] = requestParameters.backfillMinutes;
        }

        if (requestParameters.partition !== undefined) {
            queryParameters['partition'] = requestParameters.partition;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = (requestParameters.startTime as any).toISOString();
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['end_time'] = (requestParameters.endTime as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/2/tweets/compliance/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TweetComplianceStreamResponseFromJSON(jsonValue));
    }

    /**
     * Streams 100% of compliance data for Tweets
     * Tweets Compliance stream
     */
    async getTweetsComplianceStream(requestParameters: GetTweetsComplianceStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TweetComplianceStreamResponse> {
        const response = await this.getTweetsComplianceStreamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Streams 100% of compliance data for Users
     * Users Compliance stream
     */
    async getUsersComplianceStreamRaw(requestParameters: GetUsersComplianceStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserComplianceStreamResponse>> {
        if (requestParameters.partition === null || requestParameters.partition === undefined) {
            throw new runtime.RequiredError('partition','Required parameter requestParameters.partition was null or undefined when calling getUsersComplianceStream.');
        }

        const queryParameters: any = {};

        if (requestParameters.backfillMinutes !== undefined) {
            queryParameters['backfill_minutes'] = requestParameters.backfillMinutes;
        }

        if (requestParameters.partition !== undefined) {
            queryParameters['partition'] = requestParameters.partition;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = (requestParameters.startTime as any).toISOString();
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['end_time'] = (requestParameters.endTime as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/2/users/compliance/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserComplianceStreamResponseFromJSON(jsonValue));
    }

    /**
     * Streams 100% of compliance data for Users
     * Users Compliance stream
     */
    async getUsersComplianceStream(requestParameters: GetUsersComplianceStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserComplianceStreamResponse> {
        const response = await this.getUsersComplianceStreamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns recent Compliance Jobs for a given job type and optional job status
     * List Compliance Jobs
     */
    async listBatchComplianceJobsRaw(requestParameters: ListBatchComplianceJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get2ComplianceJobsResponse>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling listBatchComplianceJobs.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.complianceJobFields) {
            queryParameters['compliance_job.fields'] = Array.from(requestParameters.complianceJobFields).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/2/compliance/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get2ComplianceJobsResponseFromJSON(jsonValue));
    }

    /**
     * Returns recent Compliance Jobs for a given job type and optional job status
     * List Compliance Jobs
     */
    async listBatchComplianceJobs(requestParameters: ListBatchComplianceJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get2ComplianceJobsResponse> {
        const response = await this.listBatchComplianceJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetBatchComplianceJobComplianceJobFieldsEnum = {
    CreatedAt: 'created_at',
    DownloadExpiresAt: 'download_expires_at',
    DownloadUrl: 'download_url',
    Id: 'id',
    Name: 'name',
    Resumable: 'resumable',
    Status: 'status',
    Type: 'type',
    UploadExpiresAt: 'upload_expires_at',
    UploadUrl: 'upload_url'
} as const;
export type GetBatchComplianceJobComplianceJobFieldsEnum = typeof GetBatchComplianceJobComplianceJobFieldsEnum[keyof typeof GetBatchComplianceJobComplianceJobFieldsEnum];
/**
 * @export
 */
export const ListBatchComplianceJobsTypeEnum = {
    Tweets: 'tweets',
    Users: 'users'
} as const;
export type ListBatchComplianceJobsTypeEnum = typeof ListBatchComplianceJobsTypeEnum[keyof typeof ListBatchComplianceJobsTypeEnum];
/**
 * @export
 */
export const ListBatchComplianceJobsStatusEnum = {
    Created: 'created',
    InProgress: 'in_progress',
    Failed: 'failed',
    Complete: 'complete'
} as const;
export type ListBatchComplianceJobsStatusEnum = typeof ListBatchComplianceJobsStatusEnum[keyof typeof ListBatchComplianceJobsStatusEnum];
/**
 * @export
 */
export const ListBatchComplianceJobsComplianceJobFieldsEnum = {
    CreatedAt: 'created_at',
    DownloadExpiresAt: 'download_expires_at',
    DownloadUrl: 'download_url',
    Id: 'id',
    Name: 'name',
    Resumable: 'resumable',
    Status: 'status',
    Type: 'type',
    UploadExpiresAt: 'upload_expires_at',
    UploadUrl: 'upload_url'
} as const;
export type ListBatchComplianceJobsComplianceJobFieldsEnum = typeof ListBatchComplianceJobsComplianceJobFieldsEnum[keyof typeof ListBatchComplianceJobsComplianceJobFieldsEnum];