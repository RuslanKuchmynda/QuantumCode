import axios from "axios";
import { log } from "@/services/logger";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    log.debug(`Request to ${config.url}`);
    return config;
  },
  (error) => {
    log.error(`Request Error: ${error.message}`);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    log.info(`Success request to ${response.config.url}: ${response.status}`);
    return response;
  },
  (error) => {
    log.error(`Response Error: ${error.message}`);
    return Promise.reject(error);
  },
);

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};

export const apiGet = async <T>(route: string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<ApiResponse<T>>(route);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to fetch data from ${route}: ${errorMessage}`);
    throw new Error("Failed to retrieve data");
  }
};

export const apiPost = async <T, R>(
  route: string,
  data: T,
): Promise<ApiResponse<R>> => {
  try {
    const response = await api.post<ApiResponse<R>>(route, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to send data to ${route}: ${errorMessage}`);
    throw new Error("Failed to send data");
  }
};

export const apiPut = async <T, R>(
  route: string,
  data: T,
): Promise<ApiResponse<R>> => {
  try {
    const response = await api.put<ApiResponse<R>>(route, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to update data at ${route}: ${errorMessage}`);
    throw new Error("Failed to update data");
  }
};

export const apiDelete = async <T>(route: string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.delete<ApiResponse<T>>(route);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to delete data at ${route}: ${errorMessage}`);
    throw new Error("Failed to delete data");
  }
};

export const apiPatch = async <T, R>(
  route: string,
  data: T,
): Promise<ApiResponse<R>> => {
  try {
    const response = await api.patch<ApiResponse<R>>(route, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to update data at ${route}: ${errorMessage}`);
    throw new Error("Failed to update data");
  }
};
