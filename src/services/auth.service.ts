import { axiosClassic } from "@/api/interceptors";
import { IAuthResponse } from "@/types/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth-tokens.service";
import { AuthSchema } from "@/schemas/loginSchema";
import { z } from "zod";

export const authService = {
    async main(type: "login" | "register", data: z.infer<typeof AuthSchema>) {
        console.log(data);

        const response = await axiosClassic.post<IAuthResponse>(
            `/auth/${type}`,
            data
        );

        console.log(response.data.accessToken);

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken);

        return response;
    },

    async getNewToken() {
        const response = await axiosClassic.post<IAuthResponse>(
            `/auth/login/access-token`
        );

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken);

        return response;
    },

    async logout() {
        const response = await axiosClassic.post<boolean>(`/auth/logout`);

        if (response.data) {
            removeFromStorage();
        }

        return response;
    },
};
