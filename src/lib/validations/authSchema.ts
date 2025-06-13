import { z } from "zod";
import {
  commonWeakPasswords,
  hasSequentialCharacters,
  hasRepeatedCharacters,
  containsUserName,
  containsEmailUsername,
} from "./passwordUtils";

// Schema de validação de senha mais rigoroso
const passwordSchema = z
  .string()
  .min(8, "Senha deve ter pelo menos 8 caracteres")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    "Senha deve conter pelo menos uma letra minúscula, uma maiúscula e um número"
  )
  .refine((password) => !commonWeakPasswords.includes(password.toLowerCase()), {
    message:
      "Senha é muito comum e facilmente adivinhável. Escolha uma senha mais forte.",
  })
  .refine((password) => !hasSequentialCharacters(password), {
    message: "Senha não pode conter caracteres sequenciais (ex: 123, abc).",
  })
  .refine((password) => !hasRepeatedCharacters(password), {
    message: "Senha não pode conter mais de 2 caracteres consecutivos iguais.",
  });

export const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .max(50, "Nome deve ter no máximo 50 caracteres"),
    email: z.string().email("Email inválido"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      return !containsEmailUsername(data.password, data.email);
    },
    {
      message: "Senha não pode conter seu nome de usuário do email.",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      return !containsUserName(data.password, data.name);
    },
    {
      message: "Senha não pode conter seu nome.",
      path: ["password"],
    }
  );

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

// Export TypeScript types derived from schemas
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
