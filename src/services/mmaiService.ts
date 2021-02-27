import { AxiosRequestConfig } from 'axios';
import { axiosCall } from './axiosService';
import store from '../store';

const mmaiApi = store.state.mmaiApi;

export async function login(username: string, password: string): Promise<boolean> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${mmaiApi}/login`,
    data: {
      username,
      password,
    },
  };

  return axiosCall(config)
    .then((res) => res.data)
    .then((data) => {
      store.commit('updateUser', data);
      return true;
    }).catch((err) => false);
}
