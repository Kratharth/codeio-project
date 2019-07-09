// Mock data
//import users from 'data/users';
import processors from 'data/processor'

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

export const getProcessors = (limit = 10) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const processorLookup = processors.slice(0, limit);

      resolve({
        processor: processorLookup ,
        processorTotal: processors.length
      });
    }, 700);
  });
};

export const getProcessor = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processor = processors.find(processor => processor.id === id);

      if (processor) {
        resolve({
          processor
        });
      } else {
        reject({
          error: 'Processor not found'
        });
      }
    }, 500);
  });
};
