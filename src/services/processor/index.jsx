import Axios from 'axios';

export const getProcessors = () => {
  return new Promise(resolve => {
    Axios.get('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/processor')
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve({
          processor: res.data
        })
      })
      .catch(err => {
        console.log('err API: ');
        console.log(err);
        resolve({
          processor: err
        })
      })
  })
};

// export const getProcessor = id => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processor = processors.find(processor => processor.id === id);

//       if (processor) {
//         resolve({
//           processor
//         });
//       } else {
//         reject({
//           error: 'Processor not found'
//         });
//       }
//     }, 500);
//   });
// };
