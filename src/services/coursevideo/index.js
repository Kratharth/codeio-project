import Axios from 'axios';

export const getCourseVideos = (searchData) => {
  let queryStr = "";
  for (let key in searchData) {
    if (queryStr !== "")
      queryStr += "&";
    if (searchData[key] !== "none")
      queryStr += key + "=" + encodeURIComponent(searchData[key]);
    console.log(searchData[key]);
  }

  console.log("Hi" + queryStr);
  return new Promise(resolve => {
    Axios.get(`https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/dept/sem/course/video?${queryStr}`)
      .then(res => {
        resolve({
          coursevideo: res.data,
        })
      })
      .catch(err => {
        console.log('err API: ');
        console.log(err);
        resolve({
          coursevideo: err
        })
      })
  })
};
