import { Box } from "@mui/material";
import { LoginForm } from "./components";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <LoginForm />
    </Box>
  );
}

export default App;
