import * as assertions from 'aws-cdk-lib/assertions';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib/core';
import { DevPack, AwsCdkInspector } from '../../src/aspects';

let stack: cdk.Stack;

beforeEach(() => {
  stack = new cdk.Stack();
  new AwsCdkInspector(DevPack.policies()).check(stack);
});

test('all policies applied', () => {
  new logs.LogGroup(stack, 'Group');
  new kms.Key(stack, 'Key');
  new s3.Bucket(stack, 'Bucket');

  const template = assertions.Template.fromStack(stack);

  template.hasResource('AWS::Logs::LogGroup', {
    Properties: {
      RetentionInDays: 7,
    },
    UpdateReplacePolicy: 'Delete',
    DeletionPolicy: 'Delete',
  });

  template.hasResource('AWS::KMS::Key', {
    Properties: {
      EnableKeyRotation: false,
      PendingWindowInDays: 7,
    },
    UpdateReplacePolicy: 'Delete',
    DeletionPolicy: 'Delete',
  });

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
