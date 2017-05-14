const config = require('./config.js')

export default (request) => {
    // translation basic auth
    const username = 'USERNAME';

    const password = 'PASSWORD';

    // translation api url
    const apiUrl = 'https://gateway.watsonplatform.net/language-translation/api/v2/translate';

    const langs = ['en', 'es', 'fr'];

    // Since this is a after publish event handler, we can't modify the
    // message.

    // extract from request, channel on which the message was published
    const channel = request.channels[0];

    // original message
    const message = request.message;

    langs.forEach((lang) => {
        const langChannel = channel + '-' + lang;

        // no need to translate in lang is same as input
        if (lang === request.message.input_lang) {
            pubnub.publish({
                channel: langChannel,
                message: request.message
            });
            return request.ok();
        }

        // http options to be passed to fetch method of xhr
        // our http endpoint expect input lang and output lang as param
        // the language needs to specified using two letter code
        // for ex  english = en, spanish = es, french = fr
        //  japanese = ja

        const queryParams = {
            source: request.message.input_lang,
            target: lang,
            text: request.message.text
        };

        const httpOptions = {
            headers: {
                Authorization: 'Basic ' + 
                    base64.btoa(username + ':' + password)
            }
        };

        // We'll invoke xhr fetch to get the HTTP response
        xhr.fetch(apiUrl + '?' +
            query.stringify(queryParams), httpOptions)
        .then(r => {

            console.log(r);

            // We read the response and replace the text with
            // translated text
            const text = message.text;
            message.text = r.body;
            pubnub.publish({
                channel: langChannel,
                message
            });
            message.text = text;
            return request;
        }, e => {
            console.log(e);
            return request.ok();
        })
        .catch((e) => {
            console.error(e);
            return request.ok();
        });
    });
    return request.ok();
};
