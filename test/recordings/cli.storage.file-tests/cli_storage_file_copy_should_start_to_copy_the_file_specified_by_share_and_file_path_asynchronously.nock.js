// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'TableEndpoint=http://yaxiatest.table.testch1.dnsdemo4.com/;QueueEndpoint=http://yaxiatest.queue.testch1.dnsdemo4.com/;FileEndpoint=http://yaxiatest.file.testch1.dnsdemo4.com/;BlobEndpoint=http://yaxiatest.blob.testch1.dnsdemo4.com/;AccountName=yaxiatest;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.file.testch1.dnsdemo4.com:80')
  .get('/testfilecopysourceshare?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 29 May 2015 07:37:20 GMT',
  etag: '"0x8D267F96E5D9169"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '16fb7b35-001a-0000-6de8-99daa2000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 29 May 2015 08:19:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.file.testch1.dnsdemo4.com:80')
  .put('/testfilecopydestshare/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 May 2015 08:19:08 GMT',
  etag: '"0x8D267FF44F195B8"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '866d4389-001a-0001-35e8-99bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-ms-copy-id': '64076f34-acf9-433a-9b50-a973e326b5e1',
  'x-ms-copy-status': 'success',
  date: 'Fri, 29 May 2015 08:19:08 GMT' });
 return result; }]];