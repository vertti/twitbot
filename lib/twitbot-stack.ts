import cdk = require('@aws-cdk/cdk');
import tweet_service = require('../lib/tweet_service');

export class TwitbotStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new tweet_service.TweetService(this, 'Tweeter');
  }
}
