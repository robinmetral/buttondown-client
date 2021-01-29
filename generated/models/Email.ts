/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Email = {
    body: string;
    email_type?: Email.email_type;
    excluded_tags?: any[] | null;
    external_url?: string;
    readonly id?: string;
    included_tags?: any[] | null;
    metadata?: any;
    readonly publish_date?: string;
    secondary_id?: number;
    slug?: string | null;
    subject: string;
}

export namespace Email {

    export enum email_type {
        PUBLIC = 'public',
        PRIVATE = 'private',
        PREMIUM = 'premium',
        PROMOTED = 'promoted',
    }


}
