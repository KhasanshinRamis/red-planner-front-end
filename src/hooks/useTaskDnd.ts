import { useUpdateSettings } from "./useUpdateSettings";
import { DropResult } from "@hello-pangea/dnd";
import { useUpdateTask } from "./useUpdateTask";
import { FILTERS } from "@/app/(lk)/i/tasks/columns.data";

export const useTaskDnd = () => {
    const mutation = useUpdateTask();

    const onDragEnd = (result: DropResult) => {
        //если не было перемещения
        if (!result.destination) return;

        //получаем id колонки, в которую переместили задачу
        const destinationColumnId = result.destination.droppableId;

        //если задача перемещается в ту же колонку, что и была до этого
        if (result.source.droppableId === destinationColumnId) return;

        //если задача перемещается в колонку "completed"
        if (result.source.droppableId === "completed") {
            mutation.mutate({
                id: result.draggableId,
                data: {
                    isCompleted: true,
                },
            });

            return;
        }

        const newCreatedAdd = FILTERS[destinationColumnId].format();
        mutation.mutate({
            id: result.draggableId,
            data: {
                createdAt: newCreatedAdd,
                isCompleted: false,
            },
        });
    };

    return { onDragEnd };
};
