import Axios from 'axios';

export const getDepartment = () => {
  return new Promise(resolve => {
    Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/dept')
      .then(res => {
        console.log('res API: ');
        console.log(res);
        resolve({
          department: res.data,
        })
        console.log('department');
        console.log(res.data);
      })
      .catch(err => {
        console.log('err API: ');
        console.log(err);
        resolve({
          department: err
        })
      })
  })
}; 