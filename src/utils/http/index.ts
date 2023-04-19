import {HttpMethod, IRequestParams} from './Http.types';
import axios from 'axios';

function request(props: IRequestParams) {
  const {
    url,
    data = null,
    method = HttpMethod.GET,
    timeout = 30 * 1000, //in seconds
    retry = 0,
  } = props;
  return new Promise((resolve, reject) => {
    const options = {
      method,
      timeout,
      url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(!!data ? {data} : {}), // eleminate field data when undefined
    };

    const _successHandler = ({data}: any) => {
      if (__DEV__) {
      }
      resolve(data);
    };

    const _failHandler = (e: any) => {
      if (retry < 1) {
        reject(e?.response?.data);
        return;
      }

      request({
        ...props,
        retry: retry - 1,
      })
        .then(resolve)
        .catch(reject);
    };

    axios(options).then(_successHandler).catch(_failHandler);
  });
}

export default {
  request,
};
