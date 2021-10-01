import * as cdk from '@aws-cdk/core';

/**
 * A utility class that allows you to apply a list of Aspects to a particular
 * Construct Node.
 */
export class AwsCdkInspector {
  constructor(private readonly policies: cdk.IAspect[]) {

  }
  public check(node: cdk.IConstruct): void {
    this.policies.forEach(p => {
      cdk.Aspects.of(node).add(p);
    });
  }
}
