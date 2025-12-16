import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TypePomodoroSessionState } from "@/types/pomodoro.types";

import { pomodoroService } from "@/services/pomodoro.service";

export function useUpdateSession() {
    const queryClient = useQueryClient();

    const { mutate: updateSession, isPending: isUpdateSessionPending } =
        useMutation({
            mutationKey: ["update session"],
            mutationFn: ({
                id,
                data,
            }: {
                id: string;
                data: TypePomodoroSessionState;
            }) => pomodoroService.updateSession(id, data),
            onSuccess() {
                queryClient.invalidateQueries({
                    queryKey: ["get today session"],
                });
            },
        });

    return { updateSession, isUpdateSessionPending };
}
