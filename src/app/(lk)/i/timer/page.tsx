import type { Metadata } from "next";

import { Pomodoro } from "./Pomodoro";
import { Heading } from "@/components/ui/heading";
import { NO_INDEXT_PAGE } from "@/constants/seo.constants";

export const metadata: Metadata = {
    title: "Pomodoro timer",
    ...NO_INDEXT_PAGE,
};

export default function PomodoroPage() {
    return (
        <div>
            <Heading title="Pomodoro timer" />
            <Pomodoro />
        </div>
    );
}
