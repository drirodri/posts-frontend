import React from "react";
import { Box, Typography, LinearProgress, Chip } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import {
  validatePasswordStrength,
  calculatePasswordStrength,
  getPasswordStrengthText,
  getPasswordStrengthColor,
} from "../../../lib/validations/passwordUtils";

interface PasswordStrengthIndicatorProps {
  password: string;
  name?: string;
  email?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  name,
  email,
}) => {
  if (!password) return null;

  const validations = validatePasswordStrength(password, name, email);
  const strength = calculatePasswordStrength(password, name, email);
  const strengthText = getPasswordStrengthText(strength);
  const strengthColor = getPasswordStrengthColor(strength);

  return (
    <Box sx={{ mt: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Typography variant="caption" color="text.secondary">
          Força da senha:
        </Typography>
        <Typography
          variant="caption"
          color={`${strengthColor}.main`}
          sx={{ fontWeight: 500 }}
        >
          {strengthText}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={strength}
        color={strengthColor}
        sx={{
          height: 4,
          borderRadius: 2,
          backgroundColor: "grey.300",
          mb: 1,
        }}
      />

      {/* Lista de validações */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {validations.map((validation, index) => (
          <Chip
            key={index}
            label={validation.label}
            size="small"
            icon={validation.valid ? <Check /> : <Close />}
            color={validation.valid ? "success" : "default"}
            variant={validation.valid ? "filled" : "outlined"}
            sx={{
              fontSize: "0.75rem",
              height: 24,
              "& .MuiChip-icon": {
                fontSize: "0.875rem",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PasswordStrengthIndicator;
