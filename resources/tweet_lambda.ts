import Twitter = require('twitter');

const parseTweetsFromEvent = (event: any): string[] => {
  if (event.Records && event.Records.length > 0) {
    return event.Records.map((item: any) => item.body);
  }
  return [];
}

const tweet = (status: string, client: Twitter) => {
  return new Promise((resolve, reject) => {
    client.post('statuses/update', { status }, (error, tweet, {}) => {
      if (!error) {
        console.log(tweet);
        resolve();
      } else {
        reject(error);
      }
    });
  });
}

export const handler = async (event: any = {}): Promise<any> => {
  var client = new Twitter(<Twitter.AccessTokenOptions>{
    consumer_key: process.env.CONSUMER_API_KEY,
    consumer_secret: process.env.CONSUMER_API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET,
  });
  console.log(`Tweeting! ${JSON.stringify(event)}`);
  
  const records = parseTweetsFromEvent(event);
  if (records.length > 0) {
    return tweet(records[0], client);
  }
}
