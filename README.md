# ![LOGO](logo.png) Taxamo **flow**ground Connector

## Description

A generated **flow**ground connector for the Taxamo API (version 1).

Generated from: https://api.apis.guru/v2/specs/taxamo.com/1/swagger.json<br/>
Generated at: 2019-05-07T17:44:21+03:00

## API Description

Taxamo’s elegant suite of APIs and comprehensive reporting dashboard enables digital merchants to easily comply with EU regulatory requirements on tax calculation, evidence collection, tax return creation and data storage.

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Countries

*Tags:* `dictionaries`

#### Input Parameters
* `tax_supported` - _optional_ - Should only countries with tax supported be listed?

### Currencies

*Tags:* `dictionaries`

### Product types

*Tags:* `dictionaries`

### Locate IP

*Tags:* `geoip`

### Locate provided IP

*Tags:* `geoip`

#### Input Parameters
* `ip` - _required_ - IP address.

### Calculate domestic summary

*Tags:* `reporting`

#### Input Parameters
* `format` - _optional_ - Output format. 'xml' and 'csv' values are accepted. Default format - json
* `country_code` - _required_ - ISO 2-letter country code which will be used for determining which country is domestic.
* `currency_code` - _optional_ - ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
* `start_month` - _required_ - Period start month in yyyy-MM format.
* `end_month` - _required_ - Period end month in yyyy-MM format.
* `fx_date_type` - _optional_ - Which date should be used for FX.

### Calculate EU VIES report

*Tags:* `reporting`

#### Input Parameters
* `period_length` - _optional_ - Length of report period. 'month', 'quarter' and 'year' values are accepted. Required only if Large Filer Format is requested.
* `lff_sequence_number` - _optional_ - Sequence number used to generate report in Large Filer Format. If not specified then '0000000001' will be used.
* `transformation` - _optional_ - Which transformation should be applied. Please note that transformation will be applied only for xml and csv formats.
* `currency_code` - _optional_ - ISO 3-letter currency code, e.g. EUR or USD. Defaults to the one assigned to MOSS calculations for a given country code.
* `end_month` - _required_ - Period end month in yyyy-MM format.
* `tax_id` - _optional_ - MOSS-assigned tax ID - if not provided, merchant's national tax number will be used.
* `start_month` - _required_ - Period start month in yyyy-MM format.
* `eu_country_code` - _required_ - ISO 2-letter country code which will be used for determining which country is domestic.
* `fx_date_type` - _optional_ - Which date should be used for FX.
* `format` - _optional_ - Output format. 'xml', 'csv' and 'lff' (only for Ireland) values are accepted as well

### Detailed refunds

*Tags:* `settlement`

#### Input Parameters
* `format` - _optional_ - Output format. 'json' or 'csv'. Default value is 'json'
* `country_codes` - _optional_ - Comma separated list of 2-letter country codes
* `date_from` - _optional_ - Take only refunds issued at or after the date. Format: yyyy-MM-dd
* `date_to` - _optional_ - Take only refunds issued at or before the date. Format: yyyy-MM-dd
* `limit` - _optional_ - Limit (no more than 1000, defaults to 100).
* `offset` - _optional_ - Offset. Defaults to 0

### Fetch refunds

*Tags:* `settlement`

#### Input Parameters
* `format` - _optional_ - Output format. 'csv' value is accepted as well
* `moss_country_code` - _optional_ - MOSS country code, used to determine currency. If ommited, merchant default setting is used.
* `tax_region` - _optional_ - Tax region key, defaults to EU for backwards compatibility.
* `date_from` - _required_ - Take only refunds issued at or after the date. Format: yyyy-MM-dd

### Fetch summary

*Tags:* `settlement`

#### Input Parameters
* `moss_country_code` - _optional_ - MOSS country code, used to determine currency. If ommited, merchant default setting is used.
* `tax_region` - _optional_ - Tax region key
* `start_month` - _optional_ - Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* `end_month` - _optional_ - Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* `quarter` - _required_ - Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.

### Fetch settlement

*Tags:* `settlement`

#### Input Parameters
* `moss_tax_id` - _optional_ - MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
* `currency_code` - _optional_ - ISO 3-letter currency code, e.g. EUR or USD. If provided, all amounts will be coerced for this currency. Defaults to region's currency code.
* `end_month` - _optional_ - Period end month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* `tax_id` - _optional_ - MOSS-assigned tax ID - if not provided, merchant's national tax number will be used. Deprecated, please use tax-id.
* `refund_date_kind_override` - _optional_ - Set to 'order_date' to show only refunds for the transactions in the selected reporting period. Set to 'refund_timestamp' to show refunds that were created in the selected reporting period. Do not set to use the default region's setting.
* `start_month` - _optional_ - Period start month in yyyy-MM format. Either quarter or start-month and end-month have to be provided.
* `moss_country_code` - _optional_ - MOSS country code, used to determine currency/region. If ommited, merchant default setting is used. Deprecated: please use tax-country-code.
* `format` - _optional_ - Output format. 'csv' value is accepted as well
* `tax_country_code` - _optional_ - Tax entity country code, used to determine currency/region. 
* `quarter` - _required_ - Quarter in yyyy-MM format. If start-date and end-date are provided, quarter is ignored and should be set to 'range'.

### Settlement by country

*Tags:* `statistics`

#### Input Parameters
* `date_from` - _required_ - Date from in yyyy-MM format.
* `date_to` - _required_ - Date to in yyyy-MM format.

### Settlement by tax type

*Tags:* `statistics`

#### Input Parameters
* `date_from` - _required_ - Date from in yyyy-MM format.
* `date_to` - _required_ - Date to in yyyy-MM format.

### Settlement stats over time

*Tags:* `statistics`

#### Input Parameters
* `interval` - _required_ - Interval type - day, week, month.
* `date_from` - _required_ - Date from in yyyy-MM format.
* `date_to` - _required_ - Date to in yyyy-MM format.

### Transaction stats

*Tags:* `statistics`

#### Input Parameters
* `date_from` - _required_ - Date from in yyyy-MM format.
* `date_to` - _required_ - Date to in yyyy-MM format.
* `interval` - _optional_ - Interval. Accepted values are 'day', 'week' and 'month'.

### Settlement by country

*Tags:* `statistics`

#### Input Parameters
* `global_currency_code` - _optional_ - Global currency code to use for conversion - in addition to country's currency if rate is available. Conversion is indicative and based on most-recent rate from ECB.
* `date_from` - _required_ - Date from in yyyy-MM format.
* `date_to` - _required_ - Date to in yyyy-MM format.

### Simple tax

*Tags:* `tax`

#### Input Parameters
* `product_type` - _optional_ - Product type, according to dictionary /dictionaries/product_types. 
* `invoice_address_city` - _optional_ - Invoice address/postal_code
* `buyer_credit_card_prefix` - _optional_ - First 6 digits of buyer's credit card prefix.
* `currency_code` - _required_ - Currency code for transaction - e.g. EUR.
* `invoice_address_region` - _optional_ - Invoice address/region
* `unit_price` - _optional_ - Unit price.
* `quantity` - _optional_ - Quantity Defaults to 1.
* `buyer_tax_number` - _optional_ -  Buyer's tax number - EU VAT number for example. If using EU VAT number, it is possible to provide country code in it (e.g. IE1234567X) or simply use billing_country_code field for that. In the first case, if billing_country_code value was provided, it will be overwritten with country code value extracted from VAT number - but only if the VAT has been verified properly.
* `force_country_code` - _optional_ - Two-letter ISO country code, e.g. FR. Use it to force country code for tax calculation.
* `order_date` - _optional_ - Order date in yyyy-MM-dd format, in merchant's timezone. If provided by the API caller, no timezone conversion is performed. Default value is current date and time. When using public token, the default value is used.
* `amount` - _optional_ - Amount. Required if total amount or both unit price and quantity are not provided.
* `billing_country_code` - _optional_ - Billing two letter ISO country code.
* `invoice_address_postal_code` - _optional_ - Invoice address/postal_code
* `total_amount` - _optional_ - Total amount. Required if amount or both unit price and quantity are not provided.
* `tax_deducted` - _optional_ - If the transaction is in a country supported by Taxamo, but the tax is not calculated due to merchant settings or EU B2B transaction for example.

### Calculate tax

*Tags:* `tax`

### Calculate location

*Tags:* `tax`

#### Input Parameters
* `billing_country_code` - _optional_ - Billing two letter ISO country code.
* `buyer_credit_card_prefix` - _optional_ - First 6 digits of buyer's credit card prefix.

### Validate VAT number

*Tags:* `tax`

#### Input Parameters
* `country_code` - _optional_ - Two-letter ISO country code.
* `tax_number` - _required_ - Tax number

### Browse transactions

*Tags:* `transactions`

#### Input Parameters
* `filter_text` - _optional_ - Filtering expression
* `offset` - _optional_ - Offset
* `has_note` - _optional_ - Return only transactions with a note field set.
* `key_or_custom_id` - _optional_ - Taxamo provided transaction key or custom id
* `currency_code` - _optional_ - Three letter ISO currency code.
* `order_date_to` - _optional_ - Order date to in yyyy-MM-dd format.
* `sort_reverse` - _optional_ - If true, results are sorted in descending order.
* `limit` - _optional_ - Limit (no more than 1000, defaults to 100).
* `invoice_number` - _optional_ - Transaction invoice number.
* `tax_country_codes` - _optional_ - Comma separated list of two letter ISO tax country codes.
* `statuses` - _optional_ - Comma separated list of of transaction statuses. 'N' - unconfirmed transaction, 'C' - confirmed transaction.
* `original_transaction_key` - _optional_ - Taxamo provided original transaction key
* `order_date_from` - _optional_ - Order date from in yyyy-MM-dd format.
* `total_amount_greater_than` - _optional_ - Return only transactions with total amount greater than given number. Transactions with total amount equal to a given number (e.g. 0) are not returned.
* `format` - _optional_ - Output format - supports 'csv' value for this operation.
* `total_amount_less_than` - _optional_ - Return only transactions with total amount less than a given number. Transactions with total amount equal to a given number (e.g. 1) are not returned.
* `tax_country_code` - _optional_ - Two letter ISO tax country code.

### Store transaction

*Tags:* `transactions`

### Delete transaction

*Tags:* `transactions`

#### Input Parameters
* `key` - _required_ - Transaction key

### Retrieve transaction data.

*Tags:* `transactions`

#### Input Parameters
* `key` - _required_ - Transaction key

### Update transaction

*Tags:* `transactions`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Confirm transaction

*Tags:* `transactions`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Email credit note

*Tags:* `invoices`

#### Input Parameters
* `key` - _required_ - Transaction key.
* `refund_note_number` - _required_ - Refund note id.

### Email invoice

*Tags:* `invoices`

#### Input Parameters
* `key` - _required_ - Transaction key.

### List payments

*Tags:* `payments`

#### Input Parameters
* `limit` - _optional_ - Max record count (no more than 100, defaults to 10).
* `offset` - _optional_ - How many records need to be skipped, defaults to 0.
* `key` - _required_ - Transaction key.

### Register a payment

*Tags:* `payments`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Capture payment

*Tags:* `payments`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Get transaction refunds

*Tags:* `refunds`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Create a refund

*Tags:* `refunds`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Un-confirm the transaction

*Tags:* `transactions`

#### Input Parameters
* `key` - _required_ - Transaction key.

### Create SMS token

*Tags:* `verification`

### Verify SMS token

*Tags:* `verification`

#### Input Parameters
* `token` - _required_ - Provided token.

## License

**flow**ground :- Telekom iPaaS / taxamo-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
