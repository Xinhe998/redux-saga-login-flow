import axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_HOST;

function callApi(url, method, data) {
  return axios({
    method,
    url: `${API_ROOT}/${url}`,
    data,
  });
}

export const login = data => callApi('Members/Login', 'POST', data);
