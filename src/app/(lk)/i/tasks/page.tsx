import { Heading } from "@/components/ui/heading";
import { NO_INDEXT_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { TasksView } from './components/TasksView';

export const metadata: Metadata = {
    title: "Task",
    ...NO_INDEXT_PAGE,
};

export default function Task() {

	
    return (
        <div>
            <Heading title="Tasks" />
            <TasksView />
        </div>
    );
}
