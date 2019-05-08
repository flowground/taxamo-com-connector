/**
 * Auto-generated action file for "Taxamo" API.
 *
 * Generated at: 2019-05-07T14:44:21.239Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / taxamo-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'listTransactions'
 * Endpoint Path: '/api/v1/transactions'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "filter_text",
    "offset",
    "has_note",
    "key_or_custom_id",
    "currency_code",
    "order_date_to",
    "sort_reverse",
    "limit",
    "invoice_number",
    "tax_country_codes",
    "statuses",
    "original_transaction_key",
    "order_date_from",
    "total_amount_greater_than",
    "format",
    "total_amount_less_than",
    "tax_country_code"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "filter_text": "filter_text",
    "offset": "offset",
    "has_note": "has_note",
    "key_or_custom_id": "key_or_custom_id",
    "currency_code": "currency_code",
    "order_date_to": "order_date_to",
    "sort_reverse": "sort_reverse",
    "limit": "limit",
    "invoice_number": "invoice_number",
    "tax_country_codes": "tax_country_codes",
    "statuses": "statuses",
    "original_transaction_key": "original_transaction_key",
    "order_date_from": "order_date_from",
    "total_amount_greater_than": "total_amount_greater_than",
    "format": "format",
    "total_amount_less_than": "total_amount_less_than",
    "tax_country_code": "tax_country_code"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKey'] = cfg['apiKey'];

    let callParams = {
        spec: spec,
        operationId: 'listTransactions',
        pathName: '/api/v1/transactions',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}