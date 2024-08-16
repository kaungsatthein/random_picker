import NavBar from "./components/NavBar";
import Picker from "./components/picker";

import { Box } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Picker />
      </Box>
    </>
  );
}

export default App;
