module.exports = {
  name: 'tuskdesk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tuskdesk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
