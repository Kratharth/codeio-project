import Axios from 'axios';

export const csvupload = data => {
  return new Promise((resolve, reject) => {
    console.log(data);
    Axios.post('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/csvupload', data)
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