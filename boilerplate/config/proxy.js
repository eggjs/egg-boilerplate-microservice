'use strict';

module.exports = {
  group: 'HSF',
  version: '1.0.0',
  services: [{
    appName: 'dubbo',
    api: {
      UserService: {
        interfaceName: 'org.eggjs.dubbo.UserService',
      },
    },
    dependency: [{
      groupId: 'eggjs',
      artifactId: 'dubbo-demo-api',
      version: '1.0-SNAPSHOT',
    }],
  }],
};
