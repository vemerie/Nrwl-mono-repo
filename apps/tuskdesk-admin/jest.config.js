module.exports = {
  name: 'tuskdesk-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tuskdesk-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
