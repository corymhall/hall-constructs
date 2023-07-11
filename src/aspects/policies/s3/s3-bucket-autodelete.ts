import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib/core';
import { IConstruct } from 'constructs';
import { Policy } from '../../policy';

export class S3BucketAutoDelete extends Policy implements cdk.IAspect {
  public readonly policyName = 'S3 Bucket AutoDelete';
  public readonly description = 'Ensures S3 Buckets have a lifecycle policy that auto deletes objects';
  public readonly link = 'https://github.com/corymhall/cdk-dev-aspects#s3-bucket-autodelete';

  constructor() {
    super();
  }

  public visit(node: IConstruct): void {
    if ((node as cdk.CfnResource).cfnResourceType === 'AWS::S3::Bucket') {
      const bucket = node as s3.CfnBucket;
      bucket.lifecycleConfiguration = {
        rules: [
          {
            id: 'ExpireDeleteMarkers',
            status: 'Enabled',
            expiredObjectDeleteMarker: true,
            abortIncompleteMultipartUpload: {
              daysAfterInitiation: 1,
            },
          },
          {
            id: 'AutoDeleteObjects',
            status: 'Enabled',
            expirationInDays: 7,
            abortIncompleteMultipartUpload: {
              daysAfterInitiation: 1,
            },
            noncurrentVersionExpirationInDays: 7,
          },
        ],
      };
      this.addInfo(node, this, 'Adding autodelete lifycycle configuration to bucket');
    }
  }
}
