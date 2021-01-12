﻿import axios, { AxiosResponse } from "axios";
import { loginUrl, registerUrl } from "../../constants";
import { IUser } from "../../state/user";

export const register = (firstName: string, lastName: string, email: string, password: string, role: string): Promise<AxiosResponse> => {
    return axios.post(registerUrl, {
        firstName,
        lastName,
        email,
        password,
        role
    });
}

export const login = (email: string, password: string): Promise<AxiosResponse<IUser>> => {
    return axios.post(loginUrl, { email, password });
}

export const logout = (): void => {
    localStorage.removeItem("user");
}

export const isUserLoggedIn = (): boolean => {
    return localStorage.getItem("user") !== null;   
}

export const getCurrentUserId = (): string => {
    return localStorage.getItem("user")["id"];
}