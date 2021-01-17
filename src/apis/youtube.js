import axios from 'axios';


const KEY = 'AIzaSyB7k7Mz4WylOzfMBvym6uSRLZd-0oJ9J9Q';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});