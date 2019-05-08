/**
 * Auto-generated action file for "Taxamo" API.
 *
 * Generated at: 2019-05-07T14:44:21.237Z
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
 * Operation: 'calculateSimpleTax'
 * Endpoint Path: '/api/v1/tax/calculate'
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
    "product_type",
    "invoice_address_city",
    "buyer_credit_card_prefix",
    "currency_code",
    "invoice_address_region",
    "unit_price",
    "quantity",
    "buyer_tax_number",
    "force_country_code",
    "order_date",
    "amount",
    "billing_country_code",
    "invoice_address_postal_code",
    "total_amount",
    "tax_deducted"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "product_type": "product_type",
    "invoice_address_city": "invoice_address_city",
    "buyer_credit_card_prefix": "buyer_credit_card_prefix",
    "currency_code": "currency_code",
    "invoice_address_region": "invoice_address_region",
    "unit_price": "unit_price",
    "quantity": "quantity",
    "buyer_tax_number": "buyer_tax_number",
    "force_country_code": "force_country_code",
    "order_date": "order_date",
    "amount": "amount",
    "billing_country_code": "billing_country_code",
    "invoice_address_postal_code": "invoice_address_postal_code",
    "total_amount": "total_amount",
    "tax_deducted": "tax_deducted"
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
        operationId: 'calculateSimpleTax',
        pathName: '/api/v1/tax/calculate',
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