// Mock data
//import users from 'data/users';
import mappings from 'data/mapping'

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

export const getMappings = (limit = 10) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const mappingLookup = mappings.slice(0, limit);

      resolve({
        mapping: mappingLookup,
        mappingTotal: mappings.length
      });
    }, 700);
  });
};

export const getMapping = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mapping = mappings.find(mapping => mapping.id === id);

      if (mapping) {
        resolve({
          mapping
        });
      } else {
        reject({
          error: 'User not found'
        });
      }
    }, 500);
  });
};
