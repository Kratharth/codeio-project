// Mock data
import Axios from 'axios';

// function lookupUser(user) {
//   const userCopy = JSON.parse(JSON.stringify(user));
//   const userOrders = userCopy.orders.map(id =>
//     orders.find(order => order.id === id)
//   );
//   const userMoneySpent = userCopy.orders.reduce(
//     (total, order) => total + order.amount,
//     0
//   );

//   userCopy.orders = userOrders;
//   userCopy.moneySpent = userMoneySpent;

//   return userCopy;
// }

export const getProcessors = () => {
  return new Promise(resolve => {
  Axios.get('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/processor')
  // const cameraLookup = cameras.slice(0, limit);
  .then(res =>{
    console.log('res API: ');
    console.log(res);
    resolve({
      processor: res.data,
      // mappingTotal: mappings.length
    })
  })
  .catch (err =>{
    console.log('err API: ');
    console.log(err);
    resolve({
      processor:err
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
