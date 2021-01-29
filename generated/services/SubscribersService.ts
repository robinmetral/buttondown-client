/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendEmail } from '../models/SendEmail';
import type { Subscriber } from '../models/Subscriber';
import { request as __request } from '../core/request';

export class SubscribersService {

    /**
     * It's worth noting that the various parametric options in this API work in tandem; you can, for instance, filter down your results to all "unpaid" subscribers matching a certain tag.
     * @param type An optional filter to allow you to only retrieve a subset of subscribers. The API accepts
     * the following values:
     *
     * - `regular` — normal subscribers who have not unsubscribed or deactivated in any way.
     * - `unactivated` — subscribers who have not yet confirmed their email or opted in.
     * - `unpaid` — subscribers who have not yet purchased a subscription to your newsletter.
     * - `removed` — subscribers who have been explicitly removed by the newsletter (notably, this does not mean unsubscribers: use [/v1/unsubscribers](/v1/schema#tag/Unsubscribers) for that!
     *
     * @param tag An optional filter allowing you to filter subscribers based on a given tag. Provide the ID of the
     * tag, not the name.
     *
     * @param email An optional filter allowing you to filter subscribers based on a substring. Providing a value of "doe"
     * would match both `jane.doe@gmail.com` and `john.doe@gmail.com`, but not `jane.dooe@gmail.com`.
     *
     * @param page A page number within the paginated result set.
     * @param ordering Which field to use when ordering the results.
     * @returns any
     * @throws ApiError
     */
    public static async listAllSubscribers(
        type?: string,
        tag?: string,
        email?: string,
        page?: number,
        ordering?: string,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<Subscriber>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/subscribers`,
            query: {
                'type': type,
                'tag': tag,
                'email': email,
                'page': page,
                'ordering': ordering,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns Subscriber
     * @throws ApiError
     */
    public static async createANewSubscriber(
        requestBody?: Subscriber,
    ): Promise<Subscriber> {
        const result = await __request({
            method: 'POST',
            path: `/v1/subscribers`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber.
     * @param ordering Which field to use when ordering the results.
     * @returns any
     * @throws ApiError
     */
    public static async deleteASubscriber(
        id: string,
        ordering?: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/v1/subscribers/${id}`,
            query: {
                'ordering': ordering,
            },
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber.
     * @param ordering Which field to use when ordering the results.
     * @returns Subscriber
     * @throws ApiError
     */
    public static async retrieveAnExistingSubscriber(
        id: string,
        ordering?: string,
    ): Promise<Subscriber> {
        const result = await __request({
            method: 'GET',
            path: `/v1/subscribers/${id}`,
            query: {
                'ordering': ordering,
            },
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber.
     * @param ordering Which field to use when ordering the results.
     * @param requestBody
     * @returns Subscriber
     * @throws ApiError
     */
    public static async partiallyUpdateAnExistingSubscriber(
        id: string,
        ordering?: string,
        requestBody?: Subscriber,
    ): Promise<Subscriber> {
        const result = await __request({
            method: 'PATCH',
            path: `/v1/subscribers/${id}`,
            query: {
                'ordering': ordering,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this subscriber.
     * @param ordering Which field to use when ordering the results.
     * @param requestBody
     * @returns Subscriber
     * @throws ApiError
     */
    public static async updateAnExistingSubscriber(
        id: string,
        ordering?: string,
        requestBody?: Subscriber,
    ): Promise<Subscriber> {
        const result = await __request({
            method: 'PUT',
            path: `/v1/subscribers/${id}`,
            query: {
                'ordering': ordering,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * This endpoint is currently in closed beta. If you're interested in using it, please [email me](mailto:justin@buttondown.email) to tell me more about your use case!
     * @param id A UUID string identifying this subscriber.
     * @param emailId
     * @param requestBody
     * @returns SendEmail
     * @throws ApiError
     */
    public static async sendAnEmailToAnActiveSubscriber(
        id: string,
        emailId: string,
        requestBody?: SendEmail,
    ): Promise<SendEmail> {
        const result = await __request({
            method: 'POST',
            path: `/v1/subscribers/${id}/emails/${emailId}`,
            body: requestBody,
        });
        return result.body;
    }

}