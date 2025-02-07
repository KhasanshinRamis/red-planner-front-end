export interface IAuthForm {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    email: string;
    name: string;

    workInterval?: number;
    breakInterval?: number;
    intervalsCount?: number;
}

export interface IAuthResponse {
    user: IUser;
    accessToken: string;
}

export type TypeUserForm = Omit<IUser, "id" & { password?: string }>;
