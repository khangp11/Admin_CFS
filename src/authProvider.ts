import { AuthProvider } from "@refinedev/core";
import { disableAutoLogin, enableAutoLogin } from "./hooks";

export const TOKEN_KEY = "refine-auth";


export const authProvider = {


    login: async ({ email, password }) => {

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Đăng nhập không thành công');
            }
            const data = await response.json();

            localStorage.setItem(TOKEN_KEY, data.token);
            localStorage.setItem("Username", data.username);

            return {
                success: true,
                redirectTo: "/",
            };
        } catch (error: any) {
            return {
                success: false,
                error: {
                    message: "Đăng nhập thất bại",
                    name: error.message,
                },
            };
        }
    },
    register: async ({ email, password }) => {
        try {
            await authProvider.login({ email, password });
            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                error: {
                    message: "Register failed",
                    name: "Invalid email or password",
                },
            };
        }
    },
    updatePassword: async () => {
        return {
            success: true,
        };
    },
    forgotPassword: async () => {
        return {
            success: true,
        };
    },
    logout: async () => {
        disableAutoLogin();
        localStorage.removeItem(TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error: any) => {
        console.error(error);
        return { error };
    },
    check: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            error: {
                message: "Check failed",
                name: "Token not found",
            },
            logout: true,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            return null;
        }

        return {
            id: 1,
            name: localStorage.getItem("Username"),
            avatar: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fc55c4f6fb04041358e3d2f0860a07a.jpeg?lk3s=a5d48078&x-expires=1709654400&x-signature=JjRafBZ63dsuaOPaiHVW0UZ8x0I%3D"
        };
    },
};
