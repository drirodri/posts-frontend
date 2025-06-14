import React, { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Popover,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Check, Close, InfoOutlined } from "@mui/icons-material";
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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  if (!password) return null;

  const validations = validatePasswordStrength(password, name, email);
  const strength = calculatePasswordStrength(password, name, email);
  const strengthText = getPasswordStrengthText(strength);
  const strengthColor = getPasswordStrengthColor(strength);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
          cursor: "pointer",
        }}
        onClick={handlePopoverOpen}
      >
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
        <IconButton
          size="small"
          sx={{ p: 0.5 }}
          aria-label="Ver detalhes da validação"
        >
          <InfoOutlined sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      <LinearProgress
        variant="determinate"
        value={strength}
        color={strengthColor}
        sx={{
          height: 4,
          borderRadius: 2,
          backgroundColor: "grey.300",
          cursor: "pointer",
        }}
        onClick={handlePopoverOpen}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          mt: 1,
        }}
      >
        <Box sx={{ p: 2, maxWidth: 300 }}>
          <Typography variant="subtitle2" gutterBottom>
            Requisitos da senha
          </Typography>
          <List dense sx={{ py: 0 }}>
            {validations.map((validation, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {validation.valid ? (
                    <Check color="success" sx={{ fontSize: 18 }} />
                  ) : (
                    <Close color="error" sx={{ fontSize: 18 }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={validation.label}
                  primaryTypographyProps={{
                    variant: "body2",
                    color: validation.valid ? "success.main" : "text.secondary",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Box>
  );
};

export default PasswordStrengthIndicator;
