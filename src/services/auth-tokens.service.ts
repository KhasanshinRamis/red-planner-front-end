import Cookies from "js-cookie";

export enum EnumTokens {
    "ACCESS_TOKEN" = "accessToken",
    "REFRESH_TOKEN" = "refreshToken",
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
    return accessToken || null;
};

export const getRefreshToken = () => {
    const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);
    return refreshToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
    const rf = Cookies.get(EnumTokens.REFRESH_TOKEN);
    if (!rf) {
        Cookies.set(EnumTokens.REFRESH_TOKEN, accessToken, {
            expires: 7,
        });
    }
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        expires: 1,
    });
};

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN);
    Cookies.remove(EnumTokens.REFRESH_TOKEN);
};
