import * as assertions from 'aws-cdk-lib/assertions';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as cdk from 'aws-cdk-lib/core';
import { KmsKeyPolicy } from '../../../src/aspects';

let stack: cdk.Stack;

beforeEach(() => {
  stack = new cdk.Stack();
  cdk.Aspects.of(stack).add(new KmsKeyPolicy());
});

test('Key rotation disabled', () => {
  new kms.Key(stack, 'Key', {
    enableKeyRotation: true,
  });

  const template = assertions.Template.fromStack(stack);
  template.hasResourceProperties('AWS::KMS::Key', {
    EnableKeyRotation: false,
    PendingWindowInDays: 7,
  });
});
