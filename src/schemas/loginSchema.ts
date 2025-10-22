import * as z from "zod";

export const AuthSchema = z.object({
    email: z.string({
        required_error: "Введите логин!",
    }),
    password: z.string({
        required_error: "Введите пароль!",
    }),
});
