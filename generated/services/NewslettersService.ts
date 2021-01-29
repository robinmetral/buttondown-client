/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Newsletter } from '../models/Newsletter';
import { request as __request } from '../core/request';

export class NewslettersService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listAllNewsletters(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<Newsletter>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/newsletters`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns Newsletter
     * @throws ApiError
     */
    public static async createANewsletter(
        requestBody?: Newsletter,
    ): Promise<Newsletter> {
        const result = await __request({
            method: 'POST',
            path: `/v1/newsletters`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this newsletter.
     * @returns any
     * @throws ApiError
     */
    public static async deleteANewsletter(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/v1/newsletters/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this newsletter.
     * @returns Newsletter
     * @throws ApiError
     */
    public static async retrieveAnExistingNewsletter(
        id: string,
    ): Promise<Newsletter> {
        const result = await __request({
            method: 'GET',
            path: `/v1/newsletters/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this newsletter.
     * @param requestBody
     * @returns Newsletter
     * @throws ApiError
     */
    public static async partiallyUpdateAnExistingNewsletter(
        id: string,
        requestBody?: Newsletter,
    ): Promise<Newsletter> {
        const result = await __request({
            method: 'PATCH',
            path: `/v1/newsletters/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this newsletter.
     * @param requestBody
     * @returns Newsletter
     * @throws ApiError
     */
    public static async updateAnExistingNewsletter(
        id: string,
        requestBody?: Newsletter,
    ): Promise<Newsletter> {
        const result = await __request({
            method: 'PUT',
            path: `/v1/newsletters/${id}`,
            body: requestBody,
        });
        return result.body;
    }

}