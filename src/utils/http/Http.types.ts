export enum HttpMethod {
  GET = 'get',
  POST = 'post',
}

export interface IRequestParams {
  url: string;
  data?: object;
  method?: HttpMethod;
  timeout?: number;
  retry?: number;
}
