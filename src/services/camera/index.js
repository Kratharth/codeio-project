// Mock data
//import users from 'data/users';
import cameras from 'data/camera'

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

export const getCameras = (limit = 10) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const cameraLookup = cameras.slice(0, limit);

      resolve({
        camera: cameraLookup,
        cameraTotal: cameras.length
      });
    }, 700);
  });
};

export const getCamera = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const camera = cameras.find(camera => camera.id === id);

      if (camera) {
        resolve({
          camera
        });
      } else {
        reject({
          error: 'Camera  not found'
        });
      }
    }, 500);
  });
};
