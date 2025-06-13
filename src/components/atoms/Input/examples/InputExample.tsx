import { z } from "zod";
import { Mail, Lock, User } from "lucide-react";
import Input from "../Input";
import { useFormValidation } from "../../../../hooks/useFormValidation";

// Schema de exemplo para um formulário de registro
const registrationSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .max(50, "Nome deve ter no máximo 50 caracteres"),
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    password: z
      .string()
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "Senha deve conter pelo menos um número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegistrationForm = z.infer<typeof registrationSchema>;

export default function InputExample() {
  const { handleSubmit, getInputProps, formState } =
    useFormValidation<RegistrationForm>(registrationSchema, {
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });

  const onSubmit = (data: RegistrationForm) => {
    console.log("Form data:", data);
    // Aqui você faria a submissão do formulário
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-neutral-800">
        Exemplo de Input com Validação
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Input básico com ícone */}
        <Input
          {...getInputProps("name")}
          label="Nome completo"
          placeholder="Digite seu nome"
          leftIcon={<User size={18} />}
          required
        />

        {/* Input de email */}
        <Input
          {...getInputProps("email")}
          type="email"
          label="Email"
          placeholder="seu@email.com"
          leftIcon={<Mail size={18} />}
          required
        />

        {/* Input de senha (com toggle de visibilidade automático) */}
        <Input
          {...getInputProps("password")}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          leftIcon={<Lock size={18} />}
          helperText="Mínimo 8 caracteres, com maiúscula, minúscula e número"
          required
        />

        {/* Input de confirmação de senha */}
        <Input
          {...getInputProps("confirmPassword")}
          type="password"
          label="Confirmar senha"
          placeholder="Digite sua senha novamente"
          leftIcon={<Lock size={18} />}
          required
        />

        {/* Botão de submit */}
        <button
          type="submit"
          disabled={!formState.isValid}
          className="w-full py-3 px-4 bg-primary-500 text-white rounded-md font-medium
                   hover:bg-primary-600 disabled:bg-neutral-300 disabled:cursor-not-allowed
                   transition-colors duration-200"
        >
          {formState.isSubmitting ? "Registrando..." : "Registrar"}
        </button>
      </form>

      {/* Seção de demonstração dos diferentes tamanhos */}
      <div className="mt-8 pt-6 border-t border-neutral-200">
        <h3 className="text-lg font-semibold mb-4 text-neutral-700">
          Diferentes tamanhos
        </h3>
        <div className="space-y-3">
          <Input
            size="sm"
            placeholder="Input pequeno"
            label="Tamanho pequeno"
          />
          <Input
            size="md"
            placeholder="Input médio (padrão)"
            label="Tamanho médio"
          />
          <Input size="lg" placeholder="Input grande" label="Tamanho grande" />
        </div>
      </div>

      {/* Seção de demonstração dos estados */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 text-neutral-700">
          Estados do input
        </h3>
        <div className="space-y-3">
          <Input variant="default" placeholder="Estado padrão" label="Padrão" />
          <Input
            variant="success"
            placeholder="Estado de sucesso"
            label="Sucesso"
            helperText="Campo válido!"
          />
          <Input
            variant="error"
            placeholder="Estado de erro"
            label="Erro"
            error="Este campo é obrigatório"
          />
          <Input
            placeholder="Campo desabilitado"
            label="Desabilitado"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
