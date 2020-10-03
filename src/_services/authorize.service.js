import { authorizationApi } from "../_configs";
import { login, logout, useAuth } from "../_helpers/auth_provider";
import { apiService } from "./api.service";

class authService {
  authorize = (username, password) => {
    login(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    window.location.href = "/";
    // return apiService
    //   .get(authorizationApi.get, { username, password })
    //   .then((res) => {
    //     login(res.data); //token is fed to the Auth Provider
    //   });
  };

  logout = logout;

  isLoggedIn = useAuth;
}

const service = new authService(); // singleton
export { service as AuthService };
