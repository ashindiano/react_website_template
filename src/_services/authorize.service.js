const { authorizationApi } = require("../_configs");
const { apiService } = require("./api.service");

class authService {
  token = null;

  authorize = (username, password) => {
    this.token = "res";
    // return apiService.get(authorizationApi.get, { username, password }).then((res) => {
    //   this.token = res.data;
    // });
  };
  getToken = () => this.token;
}

const AuthService = new authService(); // singleton
export default AuthService;
