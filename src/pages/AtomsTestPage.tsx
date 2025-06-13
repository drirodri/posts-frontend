import React from "react";
import { Button, Input, Text, Label, Icon, Avatar } from "../components/atoms";
import { baseTheme } from "@/lib/theme";
import { Search, Mail } from "lucide-react";

const AtomsTestPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: baseTheme.typography.fontFamily.sans.join(", "),
      }}
    >
      <h1>Atomic Design - Atoms Test Page</h1>
      <p>Esta página demonstra todos os componentes atoms da aplicação.</p>
      {/* Button Tests */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Button Component</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>

          {/* Diferentes tamanhos */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>

          {/* Estados especiais */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading...</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>

          {/* Com ícones */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button leftIcon="🚀">With Left Icon</Button>
            <Button rightIcon="→">With Right Icon</Button>
            <Button leftIcon="💾" rightIcon="✓">
              Both Icons
            </Button>
          </div>
        </div>{" "}
      </section>{" "}
      {/* Input Tests */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Input Component</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          {/* Basic inputs */}
          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
              Basic Inputs
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input
                label="Nome"
                placeholder="Digite seu nome"
                helperText="Nome completo"
              />
              <Input
                type="email"
                label="Email"
                placeholder="seu@email.com"
                required
              />
              <Input
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                helperText="Mínimo 8 caracteres"
              />
            </div>
          </div>
          {/* Sizes */}
          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
              Tamanhos
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input size="sm" placeholder="Input pequeno" label="Pequeno" />
              <Input
                size="md"
                placeholder="Input médio"
                label="Médio (padrão)"
              />
              <Input size="lg" placeholder="Input grande" label="Grande" />
            </div>
          </div>
          {/* States */}
          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
              Estados
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input
                variant="default"
                placeholder="Estado padrão"
                label="Padrão"
              />
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
          </div>{" "}
          {/* With icons */}
          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
              Com Ícones
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input
                placeholder="Buscar..."
                label="Busca"
                leftIcon={<Search size={18} />}
              />
              <Input
                type="email"
                placeholder="seu@email.com"
                label="Email"
                leftIcon={<Mail size={18} />}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Text Tests */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Text Component</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Text />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Heading Large Text
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Text />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Heading Medium Text
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Text />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Body Text - Lorem ipsum dolor sit amet consectetur
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Text />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Caption Text - Small descriptive text
            </span>
          </div>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          TODO: Implement with props: variant, size, color, weight, children, as
          (h1, h2, p, span)
        </p>
      </section>
      {/* Label Tests */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Label Component</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Label />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Basic Label
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Label />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Required Label *
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Label />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Form Field Label
            </span>
          </div>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          TODO: Implement with props: children, htmlFor, required
        </p>
      </section>{" "}
      {/* Icon Tests */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Icon Component</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Icon />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Home
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Icon />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Search
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Icon />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              User
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Icon />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Settings
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Icon />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Heart
            </span>
          </div>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          TODO: Implement with props: name, size, color
        </p>
      </section>
      {/* Avatar Tests */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Avatar Component</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Avatar />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Small
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Avatar />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Medium
            </span>
          </div>
          <div
            style={{
              padding: "0.5rem",
              border: "2px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            <Avatar />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Large
            </span>
          </div>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          TODO: Implement with props: src, alt, size, fallback
        </p>
      </section>
      {/* Combined Example */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h2>Combined Atoms Example</h2>
        <p
          style={{ marginBottom: "1rem", fontSize: "0.875rem", color: "#666" }}
        >
          Exemplo de como os atoms podem ser combinados (preview para
          molecules):
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
              User Profile Combination
            </h3>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <div
                style={{
                  padding: "0.25rem",
                  border: "1px dashed #999",
                  borderRadius: "4px",
                }}
              >
                <Avatar />
              </div>
              <div>
                <div
                  style={{
                    padding: "0.25rem",
                    border: "1px dashed #999",
                    borderRadius: "4px",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Text />
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.75rem",
                      color: "#666",
                    }}
                  >
                    John Doe
                  </span>
                </div>
                <div
                  style={{
                    padding: "0.25rem",
                    border: "1px dashed #999",
                    borderRadius: "4px",
                  }}
                >
                  <Text />
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.75rem",
                      color: "#666",
                    }}
                  >
                    john.doe@example.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
              Search Form Combination
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  padding: "0.25rem",
                  border: "1px dashed #999",
                  borderRadius: "4px",
                }}
              >
                <Label />
                <span
                  style={{
                    marginLeft: "0.5rem",
                    fontSize: "0.75rem",
                    color: "#666",
                  }}
                >
                  Search Posts
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div
                  style={{
                    padding: "0.25rem",
                    border: "1px dashed #999",
                    borderRadius: "4px",
                    flex: 1,
                  }}
                >
                  <Input
                    placeholder="Type to search..."
                    leftIcon={<Search size={18} />}
                  />
                </div>
                <div
                  style={{
                    padding: "0.25rem",
                    border: "1px dashed #999",
                    borderRadius: "4px",
                  }}
                >
                  <Icon />
                  <Button variant="primary">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Development Notes */}
      <section
        style={{
          padding: "1rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h3>Development Notes</h3>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          <li>
            Todos os componentes atoms estão renderizando seus placeholders
          </li>
          <li>
            Cada atom precisa ser implementado com suas respectivas props e
            variants
          </li>
          <li>Esta página serve como guia visual para o desenvolvimento</li>
          <li>
            Use esta página para testar mudanças nos atoms durante o
            desenvolvimento
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AtomsTestPage;
