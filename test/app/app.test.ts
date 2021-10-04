import { SynthUtils } from '@aws-cdk/assert';
import * as assertions from '@aws-cdk/assertions';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { HallApp } from '../../src/app';

test('hallapp', () => {
  const app = new HallApp({
    repoName: 'github.com/corymhall/hall-constructs',
  });

  const stack = new cdk.Stack(app, 'TestStack');

  new s3.Bucket(stack, 'Bucket');

  const tags = SynthUtils.synthesize(stack).tags;
  expect(tags).toEqual({
    dir: '/home/hallcor/github/corymhall/hall-constructs',
    repoName: 'github.com/corymhall/hall-constructs',
  });

  const template = assertions.Template.fromStack(stack);
  template.hasResource('AWS::S3::Bucket', {
    Properties: {
      LifecycleConfiguration: {
        Rules: [
          {
            Id: 'ExpireDeleteMarkers',
            Status: 'Enabled',
            ExpiredObjectDeleteMarker: true,
            AbortIncompleteMultipartUpload: {
              DaysAfterInitiation: 1,
            },
          },
          {
            Id: 'AutoDeleteObjects',
            Status: 'Enabled',
            AbortIncompleteMultipartUpload: {
              DaysAfterInitiation: 1,
            },
            ExpirationInDays: 7,
            NoncurrentVersionExpirationInDays: 7,
          },
        ],
      },
    },
    UpdateReplacePolicy: 'Delete',
    DeletionPolicy: 'Delete',
  });
});
