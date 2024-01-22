import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({timeout: 6000})

service.interceptors.request.use(
  config => { return config },
  error => { Promise.reject(error) }
)

service.interceptors.response.use(
  response => { return response.data },
  error => { return Promise.reject(error) }
)

export const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const res = await service.request(config);
    return res
  } catch (error: any) {
    return Promise.reject(error);
  }
}