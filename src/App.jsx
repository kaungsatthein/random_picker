import { useRef, useState } from "react";

import NavBar from "./components/NavBar";
import Picker from "./components/picker";

import { Box, Button } from "@mui/material";

function App() {
  const [random, setRandom] = useState([]);
  const [error, setError] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const randomRef = useRef();

  const handleSubmit = () => {
    setError(null);
    const randomValue = randomRef.current.value.trim();
    if (!randomValue) {
      setError("Please enter something.");
      return false;
    }
    const randomValues = randomValue.split(",").map((item) => item.trim());
    setRandom([...random, ...randomValues]);
    randomRef.current.value = "";
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = (id) => {
    setRandom(random?.filter((_, index) => index !== id));
  };

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
        <Picker
          random={random}
          error={error}
          openDialog={openDialog}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          handleDelete={handleDelete}
          randomRef={randomRef}
          setOpenDialog={setOpenDialog}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Button
          variant="contained"
          sx={{ bgcolor: "#3162ff" }}
          disabled={random.length < 2}
        >
          Random your things
        </Button>
      </Box>
    </>
  );
}

export default App;
