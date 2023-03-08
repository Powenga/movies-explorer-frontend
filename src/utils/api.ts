import { IApiProps } from '../types';

export class Api {
  protected baseUrl: string;
  protected headers: HeadersInit | undefined;

  constructor({ baseUrl, headers }: IApiProps) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  protected onError(res: Response) {
    return res.json().then((data) => {
      if (res.ok) {
        return Promise.resolve(data);
      }
      return Promise.reject(data);
    });
  }
}
