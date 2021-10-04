import * as logs from '@aws-cdk/aws-logs';
import * as cdk from '@aws-cdk/core';
import { Policy } from '../../policy';

export class LogGroupShortRetention extends Policy implements cdk.IAspect {
  public readonly policyName = 'Log Group Short Rentention';
  public readonly description = 'Ensures Log Group rentention is set to 7 days or less';
  public readonly link = 'https://github.com/corymhall/cdk-dev-aspects#log-group-short-retention';

  constructor() {
    super();
  }

  public visit(node: cdk.IConstruct): void {
    if ((node as logs.CfnLogGroup).cfnResourceType === 'AWS::Logs::LogGroup') {
      const group = node as logs.CfnLogGroup;
      if (!group.retentionInDays) {
        this.addInfo(node, this, 'Log Group retention not set, setting to 7 days');
        group.retentionInDays = 7;
      } else if (group.retentionInDays > 7) {
        this.addInfo(node, this, `Log Group retention set to ${group.retentionInDays}, setting to 7 days`);
        group.retentionInDays = 7;
      }
    }
  }
}
