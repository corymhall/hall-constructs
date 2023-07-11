import { AwsCdkConstructLibrary } from 'projen/lib/awscdk';

const project = new AwsCdkConstructLibrary({
  author: 'corymhall',
  authorAddress: '43035978+corymhall@users.noreply.github.com',
  cdkVersion: '2.82.0',
  defaultReleaseBranch: 'main',
  name: 'hall-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/corymhall/hall-constructs.git',
  stale: false,
  catalog: {
    announce: false,
  },

  jsiiVersion: '~5.0.0',
  releaseToNpm: true,
  githubOptions: {
    mergify: false,
  },
  devDeps: [
    'ts-node@^10',
    'jsii-rosetta@5.x',
  ],

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['corymhall'],
    secret: 'GITHUB_TOKEN',
  },
  // disabling due to https://github.com/aws/jsii/issues/2842
  // publishToGo: {
  //   moduleName: 'github.com/corymhall',
  // },
  //
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
      container: {
        image: 'jsii/superchain',
      },
    },
  },
});

project.gitignore.include('src/aspects/policies/logs');
project.gitignore.include('test/aspects/logs');
project.synth();
