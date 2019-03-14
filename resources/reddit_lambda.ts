import * as request from 'request-promise-native';

interface RedditItemData {
  title: string;
  url: string;
  is_self: boolean;
}

const fetchHeadlinesFromSubreddit = async (subredditUrl: string): Promise<RedditItemData[]> => {
  const response = await request.get(subredditUrl, { json: true });
  const list = response.data.children;
  return list.filter((item: any) => item.data.is_self == false).map((item: any) => item.data);
};

const insertHeadlinesToDb = (headlines: RedditItemData[]) => {
  headlines.forEach((item) => { console.log(item.url)});
};

export const handler = async ({}: any = {}): Promise<any> => {
  const headlines = await fetchHeadlinesFromSubreddit('https://www.reddit.com/r/technology/new.json');
  insertHeadlinesToDb(headlines);
}