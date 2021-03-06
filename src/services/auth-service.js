import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    })
  }

  signup(user) {
    const { username, password, mail} = user;
    return this.auth.post('/auth/signup', { username, password, mail })
      .then(({ data }) => data);
  }

  login(user) {
    const { password, mail } = user;
    return this.auth.post('/auth/login', { mail, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
      .then(response => response.data)
  }
}

const authService = new AuthService();

export default authService;