import Axios from 'axios';

export const signIn = data => {
  return new Promise((resolve, reject) => {
    Axios.post('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/user/login', data)
      // const cameraLookup = cameras.slice(0, limit);
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve(
          res.data
          // mappingTotal: mappings.length
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