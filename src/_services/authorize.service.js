import { authorizationApi } from "../_configs";
import { login, logout, useAuth } from "../_helpers/auth_provider";
import { apiService } from "./api.service";

class authService {
  authorize = (username, password) => {
    return apiService
      .post(authorizationApi.get, { username, password })
      .then((res) => {
        login(res.data.content.token); //assuming res.data holds the token
        window.location.href = "/";
      });
  };

  logout = logout;

  isLoggedIn = useAuth;
}

const service = new authService(); // singleton
export { service as AuthService };
