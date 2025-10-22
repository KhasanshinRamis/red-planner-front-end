import { NO_INDEXT_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Auth } from "./components/auth";

export const metadata: Metadata = {
    title: "Auth",
    ...NO_INDEXT_PAGE,
};

export default function AuthPage() {
    return <Auth />;
}
