import Axios from 'axios';

export const getDepartment = () => {
  return new Promise(resolve => {
      Axios.get('')
      .then(res =>{
        console.log('res API: ');
        console.log(res);
        resolve({
          department: res.data,
        })
      })
      .catch (err =>{
        console.log('err API: ');
        console.log(err);
        resolve({
          department:err
        })
      })
    })
};