"use client";

import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: () => userService.getProfile(),
    });
};
