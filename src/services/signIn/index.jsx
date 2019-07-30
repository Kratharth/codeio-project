import Axios from 'axios';
import { api } from '../api';

export const signIn = data => {
  return new Promise((resolve, reject) => {
    Axios.post(`${api}/signin`, data)
      .then(res => {
        delete res.data.res._id;
        delete res.data.res.password;
        resolve(
          res.data
        )
      })
      .catch(err => {
        reject({
          error: err
        })
      })
  })
};
