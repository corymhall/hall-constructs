import * as cdk from 'aws-cdk-lib/core';
import { IConstruct } from 'constructs';

/**
 * A utility class that allows you to apply a list of Aspects to a particular
 * Construct Node.
 */
export class AwsCdkInspector {
  constructor(private readonly policies: cdk.IAspect[]) {

  }
  public check(node: IConstruct): void {
    this.policies.forEach(p => {
      cdk.Aspects.of(node).add(p);
    });
  }
}
