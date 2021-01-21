import axios from 'axios';

const git = axios.create({
  baseURL: 'https://api.github.com/users/daienelima/'
});

export default git;