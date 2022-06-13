import EmailsAPI from '@/api/emails'

export default function( { $axios }, inject) {
    const api = {
        emails: EmailsAPI($axios)
    }

    inject('api', api);
}