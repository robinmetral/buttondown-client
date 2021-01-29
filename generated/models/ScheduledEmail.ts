/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ScheduledEmail = {
    body: string;
    email_type?: ScheduledEmail.email_type;
    excluded_tags?: any[] | null;
    readonly id?: string;
    included_tags?: any[] | null;
    publish_date: string;
    subject: string;
}

export namespace ScheduledEmail {

    export enum email_type {
        PUBLIC = 'public',
        PRIVATE = 'private',
        PREMIUM = 'premium',
        PROMOTED = 'promoted',
    }


}
