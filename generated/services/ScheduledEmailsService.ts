/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScheduledEmail } from '../models/ScheduledEmail';
import { request as __request } from '../core/request';

export class ScheduledEmailsService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listAllScheduledEmails(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<ScheduledEmail>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/scheduled-emails`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns ScheduledEmail
     * @throws ApiError
     */
    public static async scheduleANewEmail(
        requestBody?: ScheduledEmail,
    ): Promise<ScheduledEmail> {
        const result = await __request({
            method: 'POST',
            path: `/v1/scheduled-emails`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this scheduled email.
     * @returns any
     * @throws ApiError
     */
    public static async deleteAScheduledEmail(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/v1/scheduled-emails/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this scheduled email.
     * @returns ScheduledEmail
     * @throws ApiError
     */
    public static async retrieveAnExistingScheduledEmail(
        id: string,
    ): Promise<ScheduledEmail> {
        const result = await __request({
            method: 'GET',
            path: `/v1/scheduled-emails/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this scheduled email.
     * @param requestBody
     * @returns ScheduledEmail
     * @throws ApiError
     */
    public static async updateAScheduledEmail(
        id: string,
        requestBody?: ScheduledEmail,
    ): Promise<ScheduledEmail> {
        const result = await __request({
            method: 'PATCH',
            path: `/v1/scheduled-emails/${id}`,
            body: requestBody,
        });
        return result.body;
    }

}