import * as assertions from '@aws-cdk/assertions';
import * as logs from '@aws-cdk/aws-logs';
import * as cdk from '@aws-cdk/core';
import { Retention } from '../../src/aspects';

let stack: cdk.Stack;

beforeEach(() => {
  stack = new cdk.Stack();
  cdk.Aspects.of(stack).add(new Retention());
});

test('retention set to DELETE', () => {
  new logs.LogGroup(stack, 'Group');

  const template = assertions.Template.fromStack(stack);
  template.hasResource('AWS::Logs::LogGroup', {
    Properties: assertions.Match.anyValue(),
    UpdateReplacePolicy: 'Delete',
    DeletionPolicy: 'Delete',
  });
});
