import * as cdk from 'aws-cdk-lib/core';
import { KmsKeyPolicy } from './kms';
import { LogGroupShortRetention } from './logs';
import { Retention } from './retention';
import { S3BucketAutoDelete } from './s3';

/**
 * A policy pack that makes it easier to cleanup dev environments
 */
export class DevPack {
  public static policies(): cdk.IAspect[] {
    return [
      new KmsKeyPolicy(),
      new LogGroupShortRetention(),
      new Retention(),
      new S3BucketAutoDelete(),
    ];
  }
}
