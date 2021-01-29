/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriberTag } from '../models/SubscriberTag';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listAllTags(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<SubscriberTag>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/tags`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns SubscriberTag
     * @throws ApiError
     */
    public static async createANewTag(
        requestBody?: SubscriberTag,
    ): Promise<SubscriberTag> {
        const result = await __request({
            method: 'POST',
            path: `/v1/tags`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber tag.
     * @returns any
     * @throws ApiError
     */
    public static async deleteATag(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/v1/tags/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber tag.
     * @returns SubscriberTag
     * @throws ApiError
     */
    public static async retrieveAnExistingTag(
        id: string,
    ): Promise<SubscriberTag> {
        const result = await __request({
            method: 'GET',
            path: `/v1/tags/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber tag.
     * @param requestBody
     * @returns SubscriberTag
     * @throws ApiError
     */
    public static async partiallyUpdateAnExistingTag(
        id: string,
        requestBody?: SubscriberTag,
    ): Promise<SubscriberTag> {
        const result = await __request({
            method: 'PATCH',
            path: `/v1/tags/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber tag.
     * @param requestBody
     * @returns SubscriberTag
     * @throws ApiError
     */
    public static async updateAnExistingTag(
        id: string,
        requestBody?: SubscriberTag,
    ): Promise<SubscriberTag> {
        const result = await __request({
            method: 'PUT',
            path: `/v1/tags/${id}`,
            body: requestBody,
        });
        return result.body;
    }

}