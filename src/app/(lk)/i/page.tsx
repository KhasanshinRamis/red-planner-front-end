import { Heading } from "@/components/ui/heading";
import { NO_INDEXT_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Statistics } from "./components/Statistics";

const metadata: Metadata = {
    title: "Dashboard",
    ...NO_INDEXT_PAGE,
};

export default function DashboardPage() {
    return (
        <div>
            <Heading title="Statistics" />
            <Statistics />
        </div>
    );
}
