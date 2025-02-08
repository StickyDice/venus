export default class ApiConfig {
  static get AUTH_URL() {
    const baseURL = process.env.BASE_URL;
    return {
      register: `${baseURL}/auth/register`,
      login: `${baseURL}/auth/login`,
    };
  }
}
