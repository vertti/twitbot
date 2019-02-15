import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import secretsmanager = require('@aws-cdk/aws-secretsmanager');

export class TweetService extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    const twitterTokens = new secretsmanager.SecretString(scope, 'Secret', {
      secretId: 'arn:aws:secretsmanager:eu-west-1:293246570391:secret:v3rtti/twitbot-LKFMxX',
    });

    new lambda.Function(this, 'TweetHandler', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.directory('resources'),
      handler: 'tweet_lambda.handler',
      environment: {
        CONSUMER_API_KEY: twitterTokens.jsonFieldValue('CONSUMER_API_KEY'),
        CONSUMER_API_SECRET: twitterTokens.jsonFieldValue('CONSUMER_API_SECRET'),
        ACCESS_TOKEN: twitterTokens.jsonFieldValue('ACCESS_TOKEN'),
        ACCESS_SECRET: twitterTokens.jsonFieldValue('ACCESS_SECRET'),
      }
    });
  }
}
