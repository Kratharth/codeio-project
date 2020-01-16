import Axios from 'axios';
import { api } from '../api';

export const getCourseVideos = (searchData) => {
  let queryStr = "";
  for (let key in searchData) {
    if (queryStr != "")
      queryStr += "&";
    if (searchData[key] !== "none")
      queryStr += key + "=" + encodeURIComponent(searchData[key]);
    console.log(searchData[key]);
  }

  //console.log("Hi" + queryStr);
  return new Promise(resolve => {
    Axios.get(`${api}/dept/sem/course/video?${queryStr}`)
      .then(res => {
        resolve({
          coursevideo: res.data,
        })
      })
      .catch(err => {
        resolve({
          coursevideo: err
        })
      })
  })
};
