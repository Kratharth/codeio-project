// Mock data
//import users from 'data/users';
import Axios from 'axios'

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

export const getMappings = () => {
  return new Promise(resolve => {
    Axios.get('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/mapping')
    // const cameraLookup = cameras.slice(0, limit);
    .then(res =>{
      console.log('res API: ');
      console.log(res);
      resolve({
        mapping: res.data,
        // mappingTotal: mappings.length
      })
    })
    .catch (err =>{
      console.log('err API: ');
      console.log(err);
      resolve({
        camera:err
      })
    })
  })
};

export const postMappings = data => {
  return new Promise((resolve ,reject) => {
    Axios.post('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/mapping',data)
    // const cameraLookup = cameras.slice(0, limit);
    .then(res =>{
      console.log('res API: ');
      console.log(res);
      resolve({
        mapping: res.data,
        // mappingTotal: mappings.length
      })
    })
    .catch (err =>{
      console.log('err API: ');
      console.log(err);
      reject({
        error:err
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