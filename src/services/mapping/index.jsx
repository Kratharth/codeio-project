import Axios from 'axios';
import { api } from '../api';

export const getMappings = () => {
  return new Promise(resolve => {
    Axios.get(`${api}/camera/mapping`)
      .then(res => {
        //console.log('res API: ');
        //console.log(res);
        resolve({
          mapping: res.data
        })
      })
      .catch(err => {
        //console.log('err API: ');
        //console.log(err);
        resolve({
          camera: err
        })
      })
  })
};

export const postMappings = data => {
  return new Promise((resolve, reject) => {
    Axios.post(`${api}/camera/mapping`, data)
      .then(res => {
        //console.log('res API: ');
        //console.log(res);
        resolve({
          mapping: res.data
        })
      })
      .catch(err => {
        //console.log('err API: ');
        //console.log(err);
        reject({
          error: err
        })
      })
  })
};
// export const getMapping = id => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const mapping = mappings.find(mapping => mapping.id === id);

//       if (mapping) {
//         resolve({
//           mapping
//         });
//       } else {
//         reject({
//           error: 'User not found'
//         });
//       }
//     }, 500);
//   });
// };
// export default {
//   getMappings,
//   postMappings
// }
