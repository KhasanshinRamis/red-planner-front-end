import { IBase } from "./root.types";

export interface IPomodoroRoundResponse extends IBase {
    isCompleted?: boolean;
    totalSeconds: number;
}

export interface IPomodoroSessionResponse extends IBase {
    isCompleted?: boolean;
    rounds: IPomodoroRoundResponse[];
}

export type TypePomodoroRoundState = Partial<
    Omit<IPomodoroRoundResponse, "id" | "createAt" | "updateAt">
>;

export type TypePomodoroSessionState = Partial<
    Omit<IPomodoroSessionResponse, "id" | "createAt" | "updateAt">
>;
