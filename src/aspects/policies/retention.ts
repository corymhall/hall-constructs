import * as cdk from '@aws-cdk/core';
import { Policy } from '../policy';

export class Retention extends Policy implements cdk.IAspect {
  public readonly policyName = 'Resource Retention';
  public readonly description = 'Ensures retention is set to DESTROY';
  public readonly link = 'https://github.com/corymhall/cdk-dev-aspects#resource-retention';

  constructor() {
    super();
  }

  public visit(node: cdk.IConstruct): void {
    const resource = node as cdk.CfnResource;
    if (resource.cfnResourceType) {
      resource.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY, { applyToUpdateReplacePolicy: true });
      this.addInfo(node, this, 'updating removal policy to DELETE');
    }
  }
}
