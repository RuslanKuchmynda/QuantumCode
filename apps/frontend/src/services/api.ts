import axios from "axios";
import { log } from "@/services/logger";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    log.info(`Success request to ${response.config.url}: ${response.status}`);
    return response;
  },
  (error) => {
    log.error(`Response Error: ${error.message}`);
    return Promise.reject(error);
  }
);

const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};

export const apiGet = async <T>(route: string): Promise<T> => {
  try {
    const response = await api.get<T>(route);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to fetch data from ${route}: ${errorMessage}`);
    throw new Error("Failed to retrieve data");
  }
};

export const apiPost = async <T, R>(route: string, data: T): Promise<R> => {
  try {
    const response = await api.post<{ data: R }>(route, data);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to send data to ${route}: ${errorMessage}`);
    throw new Error("Failed to send data");
  }
};

export const apiPut = async <T, R>(route: string, data: T): Promise<R> => {
  try {
    const response = await api.put<R>(route, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to update data at ${route}: ${errorMessage}`);
    throw new Error("Failed to update data");
  }
};

export const apiDelete = async <T>(route: string): Promise<T> => {
  try {
    const response = await api.delete<T>(route);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to delete data at ${route}: ${errorMessage}`);
    throw new Error("Failed to delete data");
  }
};

export const apiPatch = async <T, R>(route: string, data: T): Promise<R> => {
  try {
    const response = await api.patch<R>(route, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    log.error(`Failed to update data at ${route}: ${errorMessage}`);
    throw new Error("Failed to update data");
  }
};
