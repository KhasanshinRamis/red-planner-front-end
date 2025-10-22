import { TypeTaskFormState } from "@/types/task.types";
import { useCallback, useEffect } from "react";
import { useCreateTask } from "./useCreateTask";
import { useUpdateTask } from "./useUpdateTask";
import { UseFormWatch } from "react-hook-form";
import debounce from "lodash.debounce";

interface TypeUseTaskDebounce {
    watch: UseFormWatch<TypeTaskFormState>;
    itemId: string;
}

export const useTaskDebounce = ({ watch, itemId }: TypeUseTaskDebounce) => {
    const { mutate: createTask } = useCreateTask();
    const { mutate: updateTask } = useUpdateTask();

    const debouncedCreateTask = useCallback(
        debounce((formData: TypeTaskFormState) => {
            createTask(formData);
        }, 444),
        []
    );

    // Теперь debouncedUpdateTask будет сохраняться между рендерами, и debounce будет работать как ожидается.
    const debouncedUpdateTask = useCallback(
        debounce((formData: TypeTaskFormState) => {
            updateTask({ id: itemId, data: formData });
        }, 444),
        []
    );

    useEffect(() => {
        const { unsubscribe } = watch((formData) => {
            if (itemId) {
                debouncedUpdateTask({
                    ...formData,
                    priority: formData.priority || undefined,
                });
            } else {
                debouncedCreateTask(formData);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [debouncedCreateTask, debouncedUpdateTask, watch()]);
};
