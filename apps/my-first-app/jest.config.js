module.exports = {
  name: 'my-first-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-first-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
