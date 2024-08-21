"use client";

import { Button } from "@/components/ui/button";
import { CreateBoard } from "@/actions/create-dashboard/schema";
import { useFormState } from "react-dom";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-dashboard";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput label="Board Title" id="title" errors={fieldErrors} />
      </div>
      <FormSubmit variant="default">Save</FormSubmit>
    </form>
  );
};
