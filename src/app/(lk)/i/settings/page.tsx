import type { Metadata } from "next";

import { Heading } from "@/components/ui/heading";

import { NO_INDEXT_PAGE } from "@/constants/seo.constants";
import { Settings } from "./components/settings";

export const metadata: Metadata = {
    title: "Settings",
    ...NO_INDEXT_PAGE,
};

export default function SettingsPage() {
    return (
        <div>
            <Heading title="Settings" />
            <Settings />
        </div>
    );
}
