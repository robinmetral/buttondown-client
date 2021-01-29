/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Draft } from '../models/Draft';
import { request as __request } from '../core/request';

export class DraftsService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listAllDrafts(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<Draft>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/drafts`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns Draft
     * @throws ApiError
     */
    public static async createANewDraft(
        requestBody?: Draft,
    ): Promise<Draft> {
        const result = await __request({
            method: 'POST',
            path: `/v1/drafts`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this draft.
     * @returns Draft
     * @throws ApiError
     */
    public static async retrieveAnExistingDraft(
        id: string,
    ): Promise<Draft> {
        const result = await __request({
            method: 'GET',
            path: `/v1/drafts/${id}`,
        });
        return result.body;
    }

}