import * as assertions from 'aws-cdk-lib/assertions';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib/core';
import { S3BucketAutoDelete } from '../../../src/aspects';

let stack: cdk.Stack;

beforeEach(() => {
  stack = new cdk.Stack();
  cdk.Aspects.of(stack).add(new S3BucketAutoDelete());
});

test('lifecycle rule is enabled', () => {
  new s3.Bucket(stack, 'Bucket');

  const template = assertions.Template.fromStack(stack);
  template.hasResourceProperties('AWS::S3::Bucket', {
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
  });
});
