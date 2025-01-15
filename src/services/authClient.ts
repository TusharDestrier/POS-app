import { AxiosResponse } from "axios";

import ApiClient from "./ApiClient";
import { encryptData } from "../lib/utils";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  UserProfile,
} from "../types/auth";

import { useAuth } from "@/store/useAuth";

class AuthClient extends ApiClient {
  constructor() {
    super("http://abc.com/auth",{withAuth:true, enableRefreshToken:true});
  }

  public async login(credentials: LoginRequest ): Promise<LoginResponse> {

    
    try {
      const response = await this.post<LoginResponse, LoginRequest>('/login', credentials);
  
      if (response.status === 200) {
        const { user, accessToken, refreshToken } = response.data;

        // ✅ Encrypt and store in Zustand
        useAuth.getState().setAuth(user, encryptData(accessToken), encryptData(refreshToken));

        return response.data;
      } else {
        throw new Error(response.data.message || "Login failed");
      }
  
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  }
  

  public async register(data: RegisterRequest , autoLogin: boolean = false): Promise<RegisterResponse> {
    try {
      const response: AxiosResponse<RegisterResponse> = await this.post<RegisterResponse, RegisterRequest>('/register', data);
  
      if (response.status === 201) {
        // ✅ Registration successful
        if (autoLogin) {
          await this.login({ username: data.username, password: data.password });
        }
        return response.data;
      } else {
        throw new Error(response.data.message || 'Registration failed');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Something went wrong during registration');
    }
  }


  // ✅ 4. Logout
  public logout(): void {
    useAuth.getState().clearAuth();  // Zustand state clear
    window.location.reload();             // Redirect to login
  }

  // ✅ 5. Get Current User Profile
  public async getCurrentUser(): Promise<UserProfile> {
    const response = await this.get<UserProfile>("/me");
    return response.data;
  }

  
}

export default new AuthClient();
