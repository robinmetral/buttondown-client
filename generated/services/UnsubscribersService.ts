/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Subscriber } from '../models/Subscriber';
import { request as __request } from '../core/request';

export class UnsubscribersService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listUnsubscribers(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<Subscriber>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/unsubscribers`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber.
     * @returns Subscriber
     * @throws ApiError
     */
    public static async retrieveASpecificUnsubscriber(
        id: string,
    ): Promise<Subscriber> {
        const result = await __request({
            method: 'GET',
            path: `/v1/unsubscribers/${id}`,
        });
        return result.body;
    }

}