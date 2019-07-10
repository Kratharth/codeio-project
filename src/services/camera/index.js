// Mock data
//import users from 'data/users';
// import cameras from 'data/camera'
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

export const getCameras = () => {
  return new Promise(resolve => {
      Axios.get('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera')
      // const cameraLookup = cameras.slice(0, limit);
      .then(res =>{
        console.log('res API: ');
        console.log(res);
        resolve({
          camera: res.data,
          // cameraTotal: cameras.length
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
