/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadedImage } from '../models/UploadedImage';
import { request as __request } from '../core/request';

export class ImagesService {

    /**
     * @param page A page number within the paginated result set.
     * @returns any
     * @throws ApiError
     */
    public static async listAllUploadedImages(
        page?: number,
    ): Promise<{
        count?: number,
        next?: string | null,
        previous?: string | null,
        results?: Array<UploadedImage>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/v1/images`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns UploadedImage
     * @throws ApiError
     */
    public static async uploadANewImage(
        requestBody?: UploadedImage,
    ): Promise<UploadedImage> {
        const result = await __request({
            method: 'POST',
            path: `/v1/images`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Be sure to verify that this image hasn't been referenced in your emails before deleting it!
     * @param id A UUID string identifying this uploaded image.
     * @returns any
     * @throws ApiError
     */
    public static async deleteAnUploadedImage(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/v1/images/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A UUID string identifying this uploaded image.
     * @returns UploadedImage
     * @throws ApiError
     */
    public static async retrieveAnUploadedImage(
        id: string,
    ): Promise<UploadedImage> {
        const result = await __request({
            method: 'GET',
            path: `/v1/images/${id}`,
        });
        return result.body;
    }

}