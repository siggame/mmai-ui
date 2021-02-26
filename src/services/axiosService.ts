import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export async function axiosCall(
  config: AxiosRequestConfig,
): Promise<AxiosResponse> {
  const axiosConfig = { ...config };

  if (axiosConfig.withCredentials === undefined) {
    axiosConfig.withCredentials = true;
  }

  return axios(axiosConfig);
}
