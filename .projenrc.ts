import { AwsCdkConstructLibrary, Catalog, DependenciesUpgradeMechanism } from 'projen';

const cdkDeps = [
  'constructs',
  '@aws-cdk/core',
  '@aws-cdk/aws-cloudwatch',
  '@aws-cdk/aws-logs',
  '@aws-cdk/aws-kms',
  '@aws-cdk/assertions',
  '@aws-cdk/aws-s3',
];

const project = new AwsCdkConstructLibrary({
  author: 'corymhall',
  authorAddress: '43035978+corymhall@users.noreply.github.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'hall-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/corymhall/hall-constructs.git',
  stale: false,
  catalog: {
    announce: false,
  },

  cdkAssert: false,
  releaseToNpm: false,
  peerDeps: [
    ...cdkDeps,
  ],
  devDeps: [
    ...cdkDeps,
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

  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'PROJEN_GITHUB_TOKEN',
      container: {
        image: 'jsii/superchain',
      },
    },
    exclude: [
      ...cdkDeps,
    ],
  }),
});
project.synth();
