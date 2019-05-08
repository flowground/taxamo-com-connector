/**
 * Auto-generated action file for "Taxamo" API.
 *
 * Generated at: 2019-05-07T14:44:21.238Z
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
 * Operation: 'calculateTax'
 * Endpoint Path: '/api/v1/tax/calculate'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "amount": "amount",
    "currency_code": "currency_code",
    "fx_rate": "fx_rate",
    "tax_amount": "tax_amount",
    "total_amount": "total_amount",
    "invoice": "invoice",
    "additional_currencies": "additional_currencies",
    "billing_country_code": "billing_country_code",
    "buyer_credit_card_prefix": "buyer_credit_card_prefix",
    "buyer_email": "buyer_email",
    "buyer_ip": "buyer_ip",
    "buyer_name": "buyer_name",
    "buyer_tax_number": "buyer_tax_number",
    "comments": "comments",
    "custom_data": "custom_data",
    "custom_fields": "custom_fields",
    "custom_id": "custom_id",
    "customer_id": "customer_id",
    "description": "description",
    "evidence_type": "evidence_type",
    "evidence_value": "evidence_value",
    "resolved_country_code": "resolved_country_code",
    "used": "used",
    "by_2003_rules": "by_2003_rules",
    "by_billing": "by_billing",
    "by_cc": "by_cc",
    "by_ip": "by_ip",
    "by_payment_method": "by_payment_method",
    "by_tax_number": "by_tax_number",
    "by_token": "by_token",
    "forced": "forced",
    "guessed_from_ip": "guessed_from_ip",
    "other_commercially_relevant_info": "other_commercially_relevant_info",
    "self_declaration": "self_declaration",
    "evidence": "evidence",
    "force_country_code": "force_country_code",
    "address_detail": "address_detail",
    "building_number": "building_number",
    "city": "city",
    "country": "country",
    "freeform_address": "freeform_address",
    "postal_code": "postal_code",
    "region": "region",
    "street_name": "street_name",
    "invoice_address": "invoice_address",
    "invoice_date": "invoice_date",
    "invoice_number": "invoice_number",
    "invoice_place": "invoice_place",
    "note": "note",
    "order_date": "order_date",
    "original_transaction_key": "original_transaction_key",
    "status": "status",
    "sub_account_id": "sub_account_id",
    "supply_date": "supply_date",
    "tax_country_code": "tax_country_code",
    "certificate_id": "certificate_id",
    "exempt_states": "exempt_states",
    "purchaser_address1": "purchaser_address1",
    "purchaser_address2": "purchaser_address2",
    "purchaser_business_type": "purchaser_business_type",
    "purchaser_business_type_other_value": "purchaser_business_type_other_value",
    "purchaser_city": "purchaser_city",
    "purchaser_exemption_reason": "purchaser_exemption_reason",
    "purchaser_exemption_reason_value": "purchaser_exemption_reason_value",
    "purchaser_first_name": "purchaser_first_name",
    "purchaser_last_name": "purchaser_last_name",
    "purchaser_state": "purchaser_state",
    "state_of_issue": "state_of_issue",
    "tax_id": "tax_id",
    "tax_id_type": "tax_id_type",
    "purchaser_tax_id": "purchaser_tax_id",
    "purchaser_title": "purchaser_title",
    "purchaser_zip": "purchaser_zip",
    "single_purchase": "single_purchase",
    "single_purchase_order_identifier": "single_purchase_order_identifier",
    "detail": "detail",
    "us_tax_exemption_certificate": "us_tax_exemption_certificate",
    "tax_data": "tax_data",
    "tax_deducted": "tax_deducted",
    "transaction_lines": "transaction_lines",
    "verification_token": "verification_token",
    "transaction": "transaction",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

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
        operationId: 'calculateTax',
        pathName: '/api/v1/tax/calculate',
        method: 'post',
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