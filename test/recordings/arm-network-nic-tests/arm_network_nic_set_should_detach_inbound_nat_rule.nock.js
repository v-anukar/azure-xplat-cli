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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"ddd42d98-3969-4cfd-833e-69e0dde2ec97\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f1d32864-f5df-44ac-8b30-1a519793352a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"ddd42d98-3969-4cfd-833e-69e0dde2ec97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.e3hdipthvjcuxh2pfbz5vcubdh.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1803',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ddd42d98-3969-4cfd-833e-69e0dde2ec97"',
  'x-ms-request-id': 'f9586178-2bd4-4575-be1a-0344b342b022',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'e42af35d-f352-43a6-adf8-e2efc9ee2864',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135602Z:e42af35d-f352-43a6-adf8-e2efc9ee2864',
  date: 'Wed, 10 Feb 2016 13:56:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"ddd42d98-3969-4cfd-833e-69e0dde2ec97\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f1d32864-f5df-44ac-8b30-1a519793352a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"ddd42d98-3969-4cfd-833e-69e0dde2ec97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.e3hdipthvjcuxh2pfbz5vcubdh.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1803',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ddd42d98-3969-4cfd-833e-69e0dde2ec97"',
  'x-ms-request-id': 'f9586178-2bd4-4575-be1a-0344b342b022',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'e42af35d-f352-43a6-adf8-e2efc9ee2864',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135602Z:e42af35d-f352-43a6-adf8-e2efc9ee2864',
  date: 'Wed, 10 Feb 2016 13:56:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"e7b54dab-5b92-4563-93c0-13a4161ec1da\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f1d32864-f5df-44ac-8b30-1a519793352a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"e7b54dab-5b92-4563-93c0-13a4161ec1da\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.e3hdipthvjcuxh2pfbz5vcubdh.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1526',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '69dc84a4-8c2b-484f-8d4a-0139bfb719ea',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/69dc84a4-8c2b-484f-8d4a-0139bfb719ea?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c9f277f0-56be-4388-ab7a-856feb7da852',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135602Z:c9f277f0-56be-4388-ab7a-856feb7da852',
  date: 'Wed, 10 Feb 2016 13:56:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"e7b54dab-5b92-4563-93c0-13a4161ec1da\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f1d32864-f5df-44ac-8b30-1a519793352a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"e7b54dab-5b92-4563-93c0-13a4161ec1da\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.e3hdipthvjcuxh2pfbz5vcubdh.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1526',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '69dc84a4-8c2b-484f-8d4a-0139bfb719ea',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/69dc84a4-8c2b-484f-8d4a-0139bfb719ea?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c9f277f0-56be-4388-ab7a-856feb7da852',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135602Z:c9f277f0-56be-4388-ab7a-856feb7da852',
  date: 'Wed, 10 Feb 2016 13:56:01 GMT',
  connection: 'close' });
 return result; }]];