import Axios from 'axios';

export const signIn = data => {
  return new Promise((resolve, reject) => {
    Axios.post('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/signin', data)
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
