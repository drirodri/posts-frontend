import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// API Base URLs
export const USERS_API_URL =
  import.meta.env.VITE_USERS_API_URL || "http://localhost:3000";
export const POSTS_API_URL =
  import.meta.env.VITE_POSTS_API_URL || "http://localhost:8080";

// Create Axios instances for each API
export const usersApi: AxiosInstance = axios.create({
  baseURL: USERS_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postsApi: AxiosInstance = axios.create({
  baseURL: POSTS_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add JWT token
const addAuthInterceptor = (apiInstance: AxiosInstance) => {
  apiInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

// Response interceptor for error handling
const addResponseInterceptor = (apiInstance: AxiosInstance) => {
  apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // Handle 401 Unauthorized errors
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          // Users API uses HTTP-only cookies for refresh tokens, not localStorage
          // Try to refresh the token (no body needed - uses cookie)
          const response = await usersApi.post("/auth/refresh");

          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);

          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiInstance(originalRequest);
        } catch {
          // Refresh failed, redirect to login
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        }
      }

      return Promise.reject(error);
    }
  );
};

// Apply interceptors to both API instances
addAuthInterceptor(usersApi);
addAuthInterceptor(postsApi);
addResponseInterceptor(usersApi);
addResponseInterceptor(postsApi);

// Generic API call wrapper with error handling
export const apiCall = async <T>(
  apiCall: () => Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error: unknown) {
    // Handle different types of errors
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with error status
        const { status, data } = error.response;
        throw new Error(data?.message || `HTTP Error ${status}`);
      } else if (error.request) {
        // Network error
        throw new Error("Network error. Please check your connection.");
      }
    }
    // Other error
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    throw new Error(message);
  }
};

// Utility function to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Export default instance (users API)
export default usersApi;
