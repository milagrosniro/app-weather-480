import { z } from "zod";

export type TFieldForm = {
  name: string; 
  label: string; 
  type: string;
}

export interface IFormProps{
    fields: TFieldForm[];
      schema: z.ZodObject<any>; 
      onSubmit: (data: any) => void; 
      title: string;
      titleButton: string;
}