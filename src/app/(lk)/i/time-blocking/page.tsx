import type { Metadata } from "next";

import { TimeBlocking } from "./TimeBlocking";
import { NO_INDEXT_PAGE } from "@/constants/seo.constants";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
    title: "Time blocking",
    ...NO_INDEXT_PAGE,
};

export default function TimeBlockingPage() {
    return (
        <div>
            <Heading title="Time blocking" />
            <TimeBlocking />
        </div>
    );
}
