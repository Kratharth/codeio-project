import Axios from 'axios';
import { api } from '../api';

export const getCameras = () => {
  return new Promise(resolve => {
    Axios.get(`${api}/camera`)
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve({
          camera: res.data
        })
      })
      .catch(err => {
        console.log('err API: ');
        console.log(err);
        resolve({
          camera: err
        })
      })
  })
};
export const postCameras = data => {
  return new Promise((resolve, reject) => {
    Axios.post('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/camera', data)
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve({
          camera: res.data,
        })
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

// export const getCamera = id => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const camera = cameras.find(camera => camera.id === id);

//       if (camera) {
//         resolve({
//           camera
//         });
//       } else {
//         reject({
//           error: 'Camera  not found'
//         });
//       }
//     }, 500);
//   });
// };
