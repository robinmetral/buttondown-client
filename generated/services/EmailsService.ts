/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Email } from '../models/Email';
import { request as __request } from '../core/request';

export class EmailsService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listAllEmails(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<Email>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/emails`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns Email
     * @throws ApiError
     */
    public static async createANewEmail(
        requestBody?: Email,
    ): Promise<Email> {
        const result = await __request({
            method: 'POST',
            path: `/v1/emails`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this email.
     * @returns Email
     * @throws ApiError
     */
    public static async retrieveAnExistingEmail(
        id: string,
    ): Promise<Email> {
        const result = await __request({
            method: 'GET',
            path: `/v1/emails/${id}`,
        });
        return result.body;
    }

}