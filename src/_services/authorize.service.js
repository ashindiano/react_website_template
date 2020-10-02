import { authorizationApi } from "../_configs";
import { login, logout, useAuth } from "../_helpers/auth_provider";
import { apiService } from "./api.service";

class authService {
  authorize = (username, password) => {
    return apiService
      .get(authorizationApi.get, { username, password })
      .then((res) => {
        login(res.data); //token is fed to the Auth Provider
      });
  };

  logout = logout();

  isLoggedIn = useAuth;
}

const service = new authService(); // singleton
export { service as AuthService };
