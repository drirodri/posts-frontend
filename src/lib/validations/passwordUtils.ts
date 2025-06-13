// Utilitários de validação de senha sincronizados com o backend
// Baseado em: users-api/src/users/validators/user.validator.ts

// Lista de senhas fracas comuns (sincronizada com o backend)
export const commonWeakPasswords = [
  "password",
  "password123",
  "123456",
  "123456789",
  "qwerty",
  "abc123",
  "password1",
  "admin",
  "admin123",
  "welcome",
  "welcome123",
  "letmein",
  "monkey",
  "dragon",
  "passw0rd",
];

// Função para verificar caracteres sequenciais
export const hasSequentialCharacters = (password: string): boolean => {
  const sequences = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
  ];

  for (const sequence of sequences) {
    for (let i = 0; i <= sequence.length - 3; i++) {
      const subseq = sequence.substring(i, i + 3);
      if (password.toLowerCase().includes(subseq)) {
        return true;
      }
      if (
        password.toLowerCase().includes(subseq.split("").reverse().join(""))
      ) {
        return true;
      }
    }
  }
  return false;
};

// Função para verificar caracteres repetidos
export const hasRepeatedCharacters = (password: string): boolean => {
  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      return true;
    }
  }
  return false;
};

// Função para verificar se a senha contém o nome do usuário
export const containsUserName = (password: string, name: string): boolean => {
  if (!name) return false;
  return password.toLowerCase().includes(name.toLowerCase());
};

// Função para verificar se a senha contém o username do email
export const containsEmailUsername = (
  password: string,
  email: string
): boolean => {
  if (!email) return false;
  const emailUsername = email.split("@")[0].toLowerCase();
  return password.toLowerCase().includes(emailUsername);
};

// Interface para resultado de validação
export interface PasswordValidation {
  label: string;
  valid: boolean;
  errorMessage?: string;
}

// Função principal para validar senha com todas as regras
export const validatePasswordStrength = (
  password: string,
  name?: string,
  email?: string
): PasswordValidation[] => {
  const validations: PasswordValidation[] = [
    {
      label: "Pelo menos 8 caracteres",
      valid: password.length >= 8,
      errorMessage: "Senha deve ter pelo menos 8 caracteres",
    },
    {
      label: "Letra minúscula",
      valid: /[a-z]/.test(password),
      errorMessage: "Senha deve conter pelo menos uma letra minúscula",
    },
    {
      label: "Letra maiúscula",
      valid: /[A-Z]/.test(password),
      errorMessage: "Senha deve conter pelo menos uma letra maiúscula",
    },
    {
      label: "Número",
      valid: /[0-9]/.test(password),
      errorMessage: "Senha deve conter pelo menos um número",
    },
    {
      label: "Não é uma senha comum",
      valid: !commonWeakPasswords.includes(password.toLowerCase()),
      errorMessage:
        "Senha é muito comum e facilmente adivinhável. Escolha uma senha mais forte.",
    },
    {
      label: "Sem caracteres sequenciais",
      valid: !hasSequentialCharacters(password),
      errorMessage:
        "Senha não pode conter caracteres sequenciais (ex: 123, abc).",
    },
    {
      label: "Sem caracteres repetidos",
      valid: !hasRepeatedCharacters(password),
      errorMessage:
        "Senha não pode conter mais de 2 caracteres consecutivos iguais.",
    },
  ];

  // Adicionar validações contextuais se nome estiver disponível
  if (name) {
    validations.push({
      label: "Não contém seu nome",
      valid: !containsUserName(password, name),
      errorMessage: "Senha não pode conter seu nome.",
    });
  }

  // Adicionar validações contextuais se email estiver disponível
  if (email) {
    validations.push({
      label: "Não contém seu email",
      valid: !containsEmailUsername(password, email),
      errorMessage: "Senha não pode conter seu nome de usuário do email.",
    });
  }

  return validations;
};

// Função para calcular força da senha baseada nas validações
export const calculatePasswordStrength = (
  password: string,
  name?: string,
  email?: string
): number => {
  if (!password) return 0;

  const validations = validatePasswordStrength(password, name, email);
  const validCount = validations.filter((v) => v.valid).length;
  const totalCount = validations.length;

  return Math.round((validCount / totalCount) * 100);
};

// Função para obter texto da força da senha
export const getPasswordStrengthText = (strength: number): string => {
  if (strength === 0) return "";
  if (strength <= 30) return "Muito fraca";
  if (strength <= 60) return "Fraca";
  if (strength <= 85) return "Média";
  return "Forte";
};

// Função para obter cor da força da senha
export const getPasswordStrengthColor = (
  strength: number
): "error" | "warning" | "info" | "success" => {
  if (strength <= 30) return "error";
  if (strength <= 60) return "warning";
  if (strength <= 85) return "info";
  return "success";
};
