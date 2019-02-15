import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');

export class TweetService extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new lambda.Function(this, 'TweetHandler', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.directory('resources'),
      handler: 'tweet_lambda.handler',
    });
  }
}
