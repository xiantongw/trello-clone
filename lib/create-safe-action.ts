import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  // an action could be create-board, input form etc...
  fieldErrors?: FieldErrors<TInput>; // errors from the input
  error?: string | null; // this is the server error
  data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      }; // notice that this return object is a ActionState Type
    }
    // this handler function is communicating with the database
    // the return type of the handler function should be ActionState Type
    return handler(validationResult.data);
  };
};
