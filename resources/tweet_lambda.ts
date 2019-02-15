import Twitter = require('twitter');

export const handler = async ({}: any = {}): Promise<any> => {
  var client = new Twitter(<Twitter.AccessTokenOptions>{
    consumer_key: process.env.CONSUMER_API_KEY,
    consumer_secret: process.env.CONSUMER_API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET,
  });
  console.log(`Tweeting!`);
  
  return new Promise((resolve, reject) => {
    client.post('statuses/update', { status: 'I am a tweet' }, (error, tweet, {}) => {
      if (!error) {
        console.log(tweet);
        resolve();
      } else {
        reject(error);
      }
    });
  });
}
