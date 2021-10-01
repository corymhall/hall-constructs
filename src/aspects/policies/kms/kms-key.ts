import * as kms from '@aws-cdk/aws-kms';
import * as cdk from '@aws-cdk/core';
import { Policy } from '../../policy';

export class KmsKeyPolicy extends Policy implements cdk.IAspect {
  public readonly policyName = 'KMS Key Policy';
  public readonly description = 'Ensure KMS keys have rotation disabled and deletion enabled';
  public readonly link = 'https://github.com/corymhall/cdk-dev-aspects#kms-key-policy';

  constructor() {
    super();
  }

  public visit(node: cdk.IConstruct): void {
    if ((node as kms.CfnKey).cfnResourceType === 'AWS::KMS::Key') {
      const key = node as kms.CfnKey;
      key.enableKeyRotation = false;
      key.pendingWindowInDays = 7;
    }
  }
}
