import { useForm, UseFormProps, FieldValues, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 * Hook para formulários com validação Zod
 * Simplifica a integração entre React Hook Form e Zod
 */
export function useFormValidation<
  TFormValues extends FieldValues = FieldValues
>(
  schema: z.ZodSchema<TFormValues>,
  options?: Omit<UseFormProps<TFormValues>, "resolver">
) {
  const form = useForm<TFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any), // Type assertion necessária para compatibilidade
    ...options,
  });

  /**
   * Helper para obter props do input que funcionam com o componente Input
   */
  const getInputProps = (name: Path<TFormValues>) => {
    const fieldState = form.formState.errors[name];

    return {
      ...form.register(name),
      error: fieldState?.message as string | undefined,
      variant: fieldState ? ("error" as const) : ("default" as const),
    };
  };

  /**
   * Helper para verificar se um campo específico tem erro
   */
  const hasError = (name: Path<TFormValues>) => {
    return !!form.formState.errors[name];
  };

  /**
   * Helper para obter a mensagem de erro de um campo específico
   */
  const getError = (name: Path<TFormValues>) => {
    return form.formState.errors[name]?.message as string | undefined;
  };

  return {
    ...form,
    getInputProps,
    hasError,
    getError,
  };
}

/**
 * Tipo para extrair o tipo do schema Zod
 */
export type InferFormData<T> = T extends z.ZodType<infer U> ? U : never;
