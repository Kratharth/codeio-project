import Axios from 'axios';

export const mappingupload = data => {
  return new Promise((resolve, reject) => {
    console.log(data);
    Axios.post('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/csvupload', data)
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve(
          res.data
        )
      })
      .catch(err => {
        console.log('err API: ');
        console.log(err);
        reject({
          error: err
        })
      })
  })
};