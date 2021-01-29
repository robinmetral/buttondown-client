/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MiscellanyService {

    /**
     * A simple view to let you easily test authentication and health of the API.
     * @returns any
     * @throws ApiError
     */
    public static async ping(): Promise<Array<any>> {
        const result = await __request({
            method: 'GET',
            path: `/v1/ping`,
        });
        return result.body;
    }

}