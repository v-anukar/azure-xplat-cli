// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"9e60159c-0411-48ef-ae61-478f1bec3424\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"990b08cc-c0d8-406c-90ab-ddc02d94baa0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.1.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9e60159c-0411-48ef-ae61-478f1bec3424"',
  'x-ms-request-id': '71829c95-3f4a-43be-8b3f-b64909b3a3ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '3c1d8f55-14c3-497b-b816-0af7180648b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082550Z:3c1d8f55-14c3-497b-b816-0af7180648b6',
  date: 'Wed, 17 Feb 2016 08:25:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"9e60159c-0411-48ef-ae61-478f1bec3424\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"990b08cc-c0d8-406c-90ab-ddc02d94baa0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.1.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9e60159c-0411-48ef-ae61-478f1bec3424"',
  'x-ms-request-id': '71829c95-3f4a-43be-8b3f-b64909b3a3ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '3c1d8f55-14c3-497b-b816-0af7180648b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082550Z:3c1d8f55-14c3-497b-b816-0af7180648b6',
  date: 'Wed, 17 Feb 2016 08:25:50 GMT',
  connection: 'close' });
 return result; }]];