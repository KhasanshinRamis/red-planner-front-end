"use client";

import { taskService } from "@/services/task.service";
import { TypeTaskFormState } from "@/types/task.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateTask = (key?: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-task", key],
        mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) =>
            taskService.updateTask(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};
