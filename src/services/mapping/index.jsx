import Axios from 'axios'

export const getMappings = () => {
  return new Promise(resolve => {
    Axios.get('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/mapping')
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve({
          mapping: res.data
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

export const postMappings = data => {
  return new Promise((resolve, reject) => {
    Axios.post('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/mapping', data)
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve({
          mapping: res.data
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