import Http from '../utils/http';

export default {
  getStoriesOfSection: (page: number) => {
    return Http.request({
      url: `https://randomuser.me/api?lego&randomapi?results=${page}&results=10&seed=abc`, //api token here should store at BE
    });
  },
};
