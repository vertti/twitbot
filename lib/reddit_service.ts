import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');

export class RedditService extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new lambda.Function(scope, 'RedditHandler', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.directory('resources'),
      handler: 'reddit_lambda.handler',
    });
  }
}
