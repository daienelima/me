import axios from 'axios';

const mediumApi = axios.create({
  //baseURL: 'https://medium-f.herokuapp.com/api/v1/articles?userid=daienelima'
  baseURL: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@daienelima'
});

export default mediumApi;