# Theme System

Este diretório contém o sistema de tema da aplicação dri-posts, seguindo as melhores práticas de design system.

## Estrutura

```
lib/theme/
├── index.ts          # Exportações principais
├── types.ts          # Definições de tipos TypeScript
├── base.ts           # Tema base com tokens fundamentais
├── variants.ts       # Variações de tema (light/dark)
├── tokens.ts         # Design tokens para componentes
├── utils.ts          # Utilitários e helpers
└── README.md         # Esta documentação
```

## Status Atual

🚧 **EM DESENVOLVIMENTO** - Todos os arquivos contêm placeholders com TODO's

### O que está definido:

- ✅ Estrutura de tipos TypeScript completa
- ✅ Interface de tema com todas as categorias necessárias
- ✅ Design tokens para todos os componentes atoms
- ✅ Arquitetura para variações de tema (light/dark)
- ✅ Utilitários base para uso do tema

### O que precisa ser implementado:

- ❌ Valores reais de cores
- ❌ Tipografia real
- ❌ Espaçamentos e medidas
- ❌ Implementação dos utilitários
- ❌ CSS-in-JS ou CSS Variables
- ❌ Context do React para o tema
- ❌ Hook useTheme funcional

## Como usar (quando implementado)

### Básico

```tsx
import { useTheme, getColor } from "@/lib/theme";

const MyComponent = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        color: getColor("primary.500"),
        padding: theme.spacing[4],
      }}
    >
      Content
    </div>
  );
};
```

### Com design tokens

```tsx
import { designTokens } from "@/lib/theme";

const Button = ({ variant = "primary", size = "md" }) => {
  const buttonStyles = {
    ...designTokens.button.base,
    ...designTokens.button.sizes[size],
    ...designTokens.button.variants[variant],
  };

  return <button style={buttonStyles}>Click me</button>;
};
```

## Próximos passos

1. **Definir paleta de cores** - Escolher cores primárias, secundárias e semânticas
2. **Implementar tipografia** - Definir font families, tamanhos e weights
3. **Configurar espaçamentos** - Sistema de spacing consistente
4. **Implementar utilitários** - Funções para acessar valores do tema
5. **Criar Context Provider** - Para gerenciar estado do tema
6. **Integrar com CSS** - CSS Variables ou styled-components
7. **Adicionar testes** - Testes para utilitários do tema

## Integração com Atomic Design

Este sistema de tema foi projetado para trabalhar perfeitamente com a estrutura Atomic Design:

- **Atoms** - Usam design tokens diretamente
- **Molecules** - Combinam tokens de múltiplos atoms
- **Organisms** - Aplicam tema em componentes complexos
- **Templates** - Definem layouts responsivos baseados no tema

## Observações

- Todos os valores estão marcados com "TODO:" para facilitar identificação
- A estrutura já suporta dark mode e temas customizados
- O sistema é type-safe com TypeScript
- Preparado para integração com Tailwind CSS ou outras soluções de styling
