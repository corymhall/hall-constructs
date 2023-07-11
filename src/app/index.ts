import * as cdk from 'aws-cdk-lib/core';
import { DevPack, AwsCdkInspector } from '../aspects';

export interface HallAppProps {
  readonly repoName: string;
}

export class HallApp extends cdk.App {
  constructor(props: HallAppProps) {
    super();

    new AwsCdkInspector(DevPack.policies()).check(this);

    cdk.Tags.of(this).add('repoName', props.repoName);
    cdk.Tags.of(this).add('dir', process.cwd());
  }
}

