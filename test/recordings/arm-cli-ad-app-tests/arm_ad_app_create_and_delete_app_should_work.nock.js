// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'AAD_POLICY_ADMINISTRATION_SERVICE_TEST_CLI',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://graph.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1273adef-00a3-4086-a51a-dbcce1857d36/applications?api-version=1.42-previewInternal', '*')
  .reply(201, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.Application/@Element\",\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Application\",\"objectType\":\"Application\",\"objectId\":\"9a7197a1-d6b0-42d4-ad00-e32fdd396077\",\"softDeletionTimestamp\":null,\"appId\":\"463ad893-bf4d-4cac-ac80-b20fe0fabf51\",\"appMetadata\":null,\"appPermissions\":[{\"claimValue\":\"user_impersonation\",\"description\":\"Allow the application to access testapp on behalf of the signed-in user.\",\"directAccessGrantTypes\":[],\"displayName\":\"Access testapp\",\"impersonationAccessGrantTypes\":[{\"impersonated\":\"User\",\"impersonator\":\"Application\"}],\"isDisabled\":false,\"origin\":\"Application\",\"permissionId\":\"9daed4b7-91c1-44c7-bcb1-3061b3e94def\",\"resourceScopeType\":\"Personal\",\"userConsentDescription\":\"Allow the application to access testapp on your behalf.\",\"userConsentDisplayName\":\"Access testapp\",\"lang\":null}],\"availableToOtherTenants\":false,\"displayName\":\"testapp\",\"errorUrl\":null,\"homepage\":\"http://www.bing.com\",\"identifierUris\":[\"https://xplatTestAppCreate1630.com/home\"],\"keyCredentials\":[],\"knownClientApplications\":[],\"logoutUrl\":null,\"passwordCredentials\":[],\"oAuth2AllowImplicitFlow\":false,\"oAuth2AllowUrlPathMatching\":false,\"oAuth2RequirePostResponse\":false,\"publicClient\":null,\"replyUrls\":[],\"requiredResourceAccess\":[],\"resourceApplicationSet\":null,\"samlMetadataUrl\":null,\"webApi\":null,\"webApp\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  location: 'https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/directoryObjects/9a7197a1-d6b0-42d4-ad00-e32fdd396077/Microsoft.WindowsAzure.ActiveDirectory.Application',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'uojUeQNmnG7rHkYY6Os3AEDTrAe3OLrhcYc7TiubdLo=',
  'request-id': 'e83def20-2244-44d6-b826-e59dcfca619c',
  'client-request-id': '7f073594-1855-42a4-9f22-f9e3d17986e6',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'lYU7lbdp9Mtvjn81QPAXGU6bfvNXuHzIwLj2Ye150znI_67GcEz5bGCuX7FyxR14pDoDbHH_SSoHuMwF57vlBd3e_q7VbtU-OuZZ0BnOl55e-hUEaAsPomO_hi59l3agH9HJGIm8M5E19J2Hio9snyaIpyz9V4sODy6NOFyr-_3oESYc8tXUCRlUZ6cUya7l5hdHVix0J3nFgXDbwhOCmA.5FG-G_danBJl7zd-VlMZy8Og0kqqWMHT117XvQo09zk',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '4054462',
  date: 'Wed, 30 Dec 2015 19:23:28 GMT',
  connection: 'close',
  'content-length': '1464' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1273adef-00a3-4086-a51a-dbcce1857d36/applications?api-version=1.42-previewInternal', '*')
  .reply(201, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.Application/@Element\",\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Application\",\"objectType\":\"Application\",\"objectId\":\"9a7197a1-d6b0-42d4-ad00-e32fdd396077\",\"softDeletionTimestamp\":null,\"appId\":\"463ad893-bf4d-4cac-ac80-b20fe0fabf51\",\"appMetadata\":null,\"appPermissions\":[{\"claimValue\":\"user_impersonation\",\"description\":\"Allow the application to access testapp on behalf of the signed-in user.\",\"directAccessGrantTypes\":[],\"displayName\":\"Access testapp\",\"impersonationAccessGrantTypes\":[{\"impersonated\":\"User\",\"impersonator\":\"Application\"}],\"isDisabled\":false,\"origin\":\"Application\",\"permissionId\":\"9daed4b7-91c1-44c7-bcb1-3061b3e94def\",\"resourceScopeType\":\"Personal\",\"userConsentDescription\":\"Allow the application to access testapp on your behalf.\",\"userConsentDisplayName\":\"Access testapp\",\"lang\":null}],\"availableToOtherTenants\":false,\"displayName\":\"testapp\",\"errorUrl\":null,\"homepage\":\"http://www.bing.com\",\"identifierUris\":[\"https://xplatTestAppCreate1630.com/home\"],\"keyCredentials\":[],\"knownClientApplications\":[],\"logoutUrl\":null,\"passwordCredentials\":[],\"oAuth2AllowImplicitFlow\":false,\"oAuth2AllowUrlPathMatching\":false,\"oAuth2RequirePostResponse\":false,\"publicClient\":null,\"replyUrls\":[],\"requiredResourceAccess\":[],\"resourceApplicationSet\":null,\"samlMetadataUrl\":null,\"webApi\":null,\"webApp\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  location: 'https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/directoryObjects/9a7197a1-d6b0-42d4-ad00-e32fdd396077/Microsoft.WindowsAzure.ActiveDirectory.Application',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'uojUeQNmnG7rHkYY6Os3AEDTrAe3OLrhcYc7TiubdLo=',
  'request-id': 'e83def20-2244-44d6-b826-e59dcfca619c',
  'client-request-id': '7f073594-1855-42a4-9f22-f9e3d17986e6',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'lYU7lbdp9Mtvjn81QPAXGU6bfvNXuHzIwLj2Ye150znI_67GcEz5bGCuX7FyxR14pDoDbHH_SSoHuMwF57vlBd3e_q7VbtU-OuZZ0BnOl55e-hUEaAsPomO_hi59l3agH9HJGIm8M5E19J2Hio9snyaIpyz9V4sODy6NOFyr-_3oESYc8tXUCRlUZ6cUya7l5hdHVix0J3nFgXDbwhOCmA.5FG-G_danBJl7zd-VlMZy8Og0kqqWMHT117XvQo09zk',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '4054462',
  date: 'Wed, 30 Dec 2015 19:23:28 GMT',
  connection: 'close',
  'content-length': '1464' });
 return result; },
function (nock) { 
var result = 
nock('http://graph.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1273adef-00a3-4086-a51a-dbcce1857d36/servicePrincipals?api-version=1.42-previewInternal', '*')
  .reply(201, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.ServicePrincipal/@Element\",\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.ServicePrincipal\",\"objectType\":\"ServicePrincipal\",\"objectId\":\"cc52ca2d-f6a5-4b33-ba54-645f7499c0bf\",\"softDeletionTimestamp\":null,\"accountEnabled\":true,\"appDisplayName\":\"testapp\",\"appId\":\"463ad893-bf4d-4cac-ac80-b20fe0fabf51\",\"appMetadata\":null,\"appOwnerTenantId\":\"1273adef-00a3-4086-a51a-dbcce1857d36\",\"appPermissions\":[{\"claimValue\":\"user_impersonation\",\"description\":\"Allow the application to access testapp on behalf of the signed-in user.\",\"directAccessGrantTypes\":[],\"displayName\":\"Access testapp\",\"impersonationAccessGrantTypes\":[{\"impersonated\":\"User\",\"impersonator\":\"Application\"}],\"isDisabled\":false,\"origin\":\"Application\",\"permissionId\":\"9daed4b7-91c1-44c7-bcb1-3061b3e94def\",\"resourceScopeType\":\"Personal\",\"userConsentDescription\":\"Allow the application to access testapp on your behalf.\",\"userConsentDisplayName\":\"Access testapp\",\"lang\":null}],\"authenticationPolicy\":null,\"displayName\":\"testapp\",\"errorUrl\":null,\"explicitAccessGrantRequired\":false,\"homepage\":\"http://www.bing.com\",\"keyCredentials\":[],\"logoutUrl\":null,\"microsoftFirstParty\":null,\"passwordCredentials\":[],\"publisherName\":\"rbacCliTestDirectory\",\"replyUrls\":[],\"resourceApplicationSet\":null,\"samlMetadataUrl\":null,\"servicePrincipalNames\":[\"463ad893-bf4d-4cac-ac80-b20fe0fabf51\",\"https://xplatTestAppCreate1630.com/home\"],\"tags\":[],\"webApi\":null,\"webApp\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  location: 'https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/directoryObjects/cc52ca2d-f6a5-4b33-ba54-645f7499c0bf/Microsoft.WindowsAzure.ActiveDirectory.ServicePrincipal',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'ndOaDad62j02kfRa1Cq/gK60FrLF0w5RKl7ELizCzzo=',
  'request-id': 'c2f75a88-b974-427d-a5c1-475a93e71c1c',
  'client-request-id': 'dc59dba5-dd18-4f4a-bdfe-8f45bf87f8dd',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'uVil8CCUiIfowhbNSUFt0br4Jl0-FZrB9YrZNb0NrKOPbkZI_xbT4NvioFRI3qoHUZ4re5svKwkdJBxUevOiZpbUNDMslVejQ1uTkNFKXeVvaKvt0anq-_FsKXQgUUswAzS-u-VRLFP6orW2DDDtUolNTT8TivR8F5UjdT9-kK26p-5A6DbRpSVwGnXXmsIL0k-LfJlDpuvLpoly0YjkOw.jfAyu5tPD88PdiRTCz51B_1_Jll5VjOQYqv697tcCIg',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '5222986',
  date: 'Wed, 30 Dec 2015 19:23:29 GMT',
  connection: 'close',
  'content-length': '1562' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1273adef-00a3-4086-a51a-dbcce1857d36/servicePrincipals?api-version=1.42-previewInternal', '*')
  .reply(201, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.ServicePrincipal/@Element\",\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.ServicePrincipal\",\"objectType\":\"ServicePrincipal\",\"objectId\":\"cc52ca2d-f6a5-4b33-ba54-645f7499c0bf\",\"softDeletionTimestamp\":null,\"accountEnabled\":true,\"appDisplayName\":\"testapp\",\"appId\":\"463ad893-bf4d-4cac-ac80-b20fe0fabf51\",\"appMetadata\":null,\"appOwnerTenantId\":\"1273adef-00a3-4086-a51a-dbcce1857d36\",\"appPermissions\":[{\"claimValue\":\"user_impersonation\",\"description\":\"Allow the application to access testapp on behalf of the signed-in user.\",\"directAccessGrantTypes\":[],\"displayName\":\"Access testapp\",\"impersonationAccessGrantTypes\":[{\"impersonated\":\"User\",\"impersonator\":\"Application\"}],\"isDisabled\":false,\"origin\":\"Application\",\"permissionId\":\"9daed4b7-91c1-44c7-bcb1-3061b3e94def\",\"resourceScopeType\":\"Personal\",\"userConsentDescription\":\"Allow the application to access testapp on your behalf.\",\"userConsentDisplayName\":\"Access testapp\",\"lang\":null}],\"authenticationPolicy\":null,\"displayName\":\"testapp\",\"errorUrl\":null,\"explicitAccessGrantRequired\":false,\"homepage\":\"http://www.bing.com\",\"keyCredentials\":[],\"logoutUrl\":null,\"microsoftFirstParty\":null,\"passwordCredentials\":[],\"publisherName\":\"rbacCliTestDirectory\",\"replyUrls\":[],\"resourceApplicationSet\":null,\"samlMetadataUrl\":null,\"servicePrincipalNames\":[\"463ad893-bf4d-4cac-ac80-b20fe0fabf51\",\"https://xplatTestAppCreate1630.com/home\"],\"tags\":[],\"webApi\":null,\"webApp\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  location: 'https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/directoryObjects/cc52ca2d-f6a5-4b33-ba54-645f7499c0bf/Microsoft.WindowsAzure.ActiveDirectory.ServicePrincipal',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'ndOaDad62j02kfRa1Cq/gK60FrLF0w5RKl7ELizCzzo=',
  'request-id': 'c2f75a88-b974-427d-a5c1-475a93e71c1c',
  'client-request-id': 'dc59dba5-dd18-4f4a-bdfe-8f45bf87f8dd',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'uVil8CCUiIfowhbNSUFt0br4Jl0-FZrB9YrZNb0NrKOPbkZI_xbT4NvioFRI3qoHUZ4re5svKwkdJBxUevOiZpbUNDMslVejQ1uTkNFKXeVvaKvt0anq-_FsKXQgUUswAzS-u-VRLFP6orW2DDDtUolNTT8TivR8F5UjdT9-kK26p-5A6DbRpSVwGnXXmsIL0k-LfJlDpuvLpoly0YjkOw.jfAyu5tPD88PdiRTCz51B_1_Jll5VjOQYqv697tcCIg',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '5222986',
  date: 'Wed, 30 Dec 2015 19:23:29 GMT',
  connection: 'close',
  'content-length': '1562' });
 return result; },
function (nock) { 
var result = 
nock('http://graph.windows.net:443')
  .delete('/1273adef-00a3-4086-a51a-dbcce1857d36/servicePrincipals/cc52ca2d-f6a5-4b33-ba54-645f7499c0bf?api-version=1.42-previewInternal')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'VE96ymV+N7+qIsCyCRMEXtWtFdJRAMYbA69ATN4L+b0=',
  'request-id': 'be801285-8f4b-4db3-9135-0c8664f466e9',
  'client-request-id': 'f52710c7-859c-417c-8bd4-6159f5663cfe',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': '5x4Br0Qcxt1S3oS3T0fHLkQ3mWGrDC5xECVrN9eFvbdb7UjSXDIPxYS3tc3dGu39R4A2hq6Fe1asxQqlL-M6GZjl1zOzpQXZd64pmc7G8g5w6_AsOVrcE0tz9zMK0Jh3ywX_f3hxxxl27M1xtrnIKmjTaTpVDZRO6AB1yA2kW7NXxjvRAcL2hjSCAI9KOThXwwBNdDCS6MU7fB0eXtWH7A.lH69HzBZiRr3v32T7cQflNvzJQFumJjYTMhPg0nl7Es',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '1.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '5497487',
  date: 'Wed, 30 Dec 2015 19:23:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.windows.net:443')
  .delete('/1273adef-00a3-4086-a51a-dbcce1857d36/servicePrincipals/cc52ca2d-f6a5-4b33-ba54-645f7499c0bf?api-version=1.42-previewInternal')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'VE96ymV+N7+qIsCyCRMEXtWtFdJRAMYbA69ATN4L+b0=',
  'request-id': 'be801285-8f4b-4db3-9135-0c8664f466e9',
  'client-request-id': 'f52710c7-859c-417c-8bd4-6159f5663cfe',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': '5x4Br0Qcxt1S3oS3T0fHLkQ3mWGrDC5xECVrN9eFvbdb7UjSXDIPxYS3tc3dGu39R4A2hq6Fe1asxQqlL-M6GZjl1zOzpQXZd64pmc7G8g5w6_AsOVrcE0tz9zMK0Jh3ywX_f3hxxxl27M1xtrnIKmjTaTpVDZRO6AB1yA2kW7NXxjvRAcL2hjSCAI9KOThXwwBNdDCS6MU7fB0eXtWH7A.lH69HzBZiRr3v32T7cQflNvzJQFumJjYTMhPg0nl7Es',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '1.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '5497487',
  date: 'Wed, 30 Dec 2015 19:23:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://graph.windows.net:443')
  .delete('/1273adef-00a3-4086-a51a-dbcce1857d36/applications/9a7197a1-d6b0-42d4-ad00-e32fdd396077?api-version=1.42-previewInternal')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'gqiNgf5NlZ7CoKlKn6ksAAz0DY2Obmmx+EN7hzvHgo4=',
  'request-id': '8dff10e3-a900-4719-aa6e-ec455f86dbc9',
  'client-request-id': 'a2dc73d7-e283-4c4d-a9d0-883d8e136db0',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'Td-E4YUZeIBJf6902r9MvRfLefuXhuDELa-a3tknbLi60R6PZDvWedMgfztWuipP57GArJ6M7ODr7-GtC2tw46W140kV8zwm5qpJbxcyNGCqCNclyuarWlpxu0A9e2T5-Hy12if0BuVcbeO5HAQhjU0zDZ8gbmN072CsI_fbN0OwStIO0sXJBFkUgg4bQQ95GK1iNzUrvdO_OTGsPE0Scw.qLc28EVuMXT4XHXKdpUHsJNKu2olq25QuJRFvs57mAg',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '1.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '4801888',
  date: 'Wed, 30 Dec 2015 19:23:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.windows.net:443')
  .delete('/1273adef-00a3-4086-a51a-dbcce1857d36/applications/9a7197a1-d6b0-42d4-ad00-e32fdd396077?api-version=1.42-previewInternal')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'ocp-aad-diagnostics-server-name': 'gqiNgf5NlZ7CoKlKn6ksAAz0DY2Obmmx+EN7hzvHgo4=',
  'request-id': '8dff10e3-a900-4719-aa6e-ec455f86dbc9',
  'client-request-id': 'a2dc73d7-e283-4c4d-a9d0-883d8e136db0',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'x-ms-gateway-rewrite': 'false',
  'ocp-aad-session-key': 'Td-E4YUZeIBJf6902r9MvRfLefuXhuDELa-a3tknbLi60R6PZDvWedMgfztWuipP57GArJ6M7ODr7-GtC2tw46W140kV8zwm5qpJbxcyNGCqCNclyuarWlpxu0A9e2T5-Hy12if0BuVcbeO5HAQhjU0zDZ8gbmN072CsI_fbN0OwStIO0sXJBFkUgg4bQQ95GK1iNzUrvdO_OTGsPE0Scw.qLc28EVuMXT4XHXKdpUHsJNKu2olq25QuJRFvs57mAg',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '1.0;',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'access-control-allow-origin': '*',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  duration: '4801888',
  date: 'Wed, 30 Dec 2015 19:23:31 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestAppCreate1630'];};