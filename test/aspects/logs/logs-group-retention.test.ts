import * as assertions from 'aws-cdk-lib/assertions';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as cdk from 'aws-cdk-lib/core';
import { LogGroupShortRetention } from '../../../src/aspects';

let stack: cdk.Stack;

beforeEach(() => {
  stack = new cdk.Stack();
  cdk.Aspects.of(stack).add(new LogGroupShortRetention());
});

test('retention not set', () => {
  new logs.LogGroup(stack, 'Group');

  const template = assertions.Template.fromStack(stack);
  template.hasResourceProperties('AWS::Logs::LogGroup', {
    RetentionInDays: 7,
  });
});

test('retention set to long value', () => {
  new logs.LogGroup(stack, 'Group', {
    retention: logs.RetentionDays.ONE_YEAR,
  });

  const template = assertions.Template.fromStack(stack);
  template.hasResourceProperties('AWS::Logs::LogGroup', {
    RetentionInDays: 7,
  });
});
