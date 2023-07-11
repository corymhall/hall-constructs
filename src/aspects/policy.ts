import * as cdk from 'aws-cdk-lib/core';
import { IConstruct } from 'constructs';

/**
 * Represents the warning level if the policy fails.
 *
 * The error message will be added with the corresponding annotation method, i.e.
 *
 * cdk.Annotations.of(node).addError|addWarning|addInfo()
 *
 */
export enum Level {
  WARN,
  ERROR,
  INFO,
}

/**
 * Represents an Aspect policy. All Aspects should implement this interface
 */
export interface IPolicy {
  /**
   * The name of the policy
   */
  readonly policyName: string;

  /**
   * The link to the policy documentation.
   */
  readonly link: string;

  /**
   * The description of the policy, i.e. what is the policy evaluating
   */
  readonly description: string;
}

/**
 * Represents an Aspect Policy.
 */
export abstract class Policy implements IPolicy {
  public abstract readonly policyName: string;
  public abstract readonly link: string;
  public abstract readonly description: string;

  public addError(node: IConstruct, policy: IPolicy, message: string): void {
    cdk.Annotations.of(node).addError(this.generateMessage(policy, message));
  }

  public addWarning(node: IConstruct, policy: IPolicy, message: string): void {
    cdk.Annotations.of(node).addWarning(this.generateMessage(policy, message));
  }

  public addInfo(node: IConstruct, policy: IPolicy, message: string): void {
    cdk.Annotations.of(node).addInfo(this.generateMessage(policy, message));
  }

  private generateMessage(policy: IPolicy, message: string): string {
    return `\n${policy.policyName} FAILED: ${policy.description} - ${policy.link}\n\n${message}`;

  }

}
