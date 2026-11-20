import type { UserType } from "./users/users.types";

export type ApplicationEnvironment = {
    Variables: {
        user: UserType;
    }
    Bindings: {
        JWT_SECRET: string;
    } 
}

export type ApplicationResult<T> = ApplicationSuccessResult<T> | ApplicationFailedResult;

export type ApplicationSuccessResult<T> = {
    success: true;
    data: T;
};

export type ApplicationFailedResult = {
    success: false;
    error: string;
}

export const IDParamSchema = z.object({
    id: z.string().regax(/^\d+$/, "Id must be number")
        .transform(value => parseInt(value, 10)),
});
export type IDParamType = z/infer<typeof IDParamSchema>;


