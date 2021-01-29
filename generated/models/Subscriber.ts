/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Subscriber = {
    readonly creation_date?: string;
    email: string;
    readonly id?: string;
    metadata?: any;
    notes?: string;
    referrer_url?: string;
    readonly secondary_id?: number;
    readonly source?: Subscriber.source;
    readonly subscriber_type?: Subscriber.subscriber_type;
    tags?: Array<string>;
    readonly utm_campaign?: string;
    readonly utm_medium?: string;
    readonly utm_source?: string;
}

export namespace Subscriber {

    export enum source {
        API = 'api',
        BUTTONDOWN = 'buttondown',
        CSV = 'csv',
        MAILCHIMP = 'mailchimp',
        ORGANIC = 'organic',
        SUBSTACK = 'substack',
        TINYLETTER = 'tinyletter',
        TYPEFORM = 'typeform',
        USER = 'user',
        DRIP = 'drip',
    }

    export enum subscriber_type {
        REGULAR = 'regular',
        PREMIUM = 'premium',
        GIFTED = 'gifted',
        UNPAID = 'unpaid',
        UNACTIVATED = 'unactivated',
        UNSUBSCRIBED = 'unsubscribed',
        SPAMMY = 'spammy',
        REMOVED = 'removed',
        TRIALED = 'trialed',
        DISABLED = 'disabled',
    }


}
