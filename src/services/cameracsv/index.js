import Axios from 'axios';

export const csvupload = data => {
  return new Promise((resolve, reject) => {
    console.log(data);
    Axios.post('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/csvupload/camera', data)
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