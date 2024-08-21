import { useRef, useState } from "react";

import NavBar from "./components/NavBar";
import Picker from "./components/picker";
import RandomButton from "./components/RandomButton";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function App() {
  const [random, setRandom] = useState([]);
  const [error, setError] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openWinnerDialog, setOpenWinnerDialog] = useState(false);
  const [winner, setWinner] = useState();
  const [winnerCollection, setWinnerCollection] = useState([]);

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
    setOpenWinnerDialog(false);
  };

  const handleDelete = (id) => {
    setRandom(random?.filter((_, index) => index !== id));
  };

  const handleRandom = () => {
    const randomItem = random[Math.floor(Math.random() * random.length)];
    setOpenWinnerDialog(true);
    setWinner(randomItem);
  };

  const handleNextRandom = () => {
    if (winner) {
      // setWinnerCollection([...winnerCollection, winner]);
      setRandom(random?.filter((data) => data !== winner));
      if (random.length > 1) {
        handleRandom(); // Get the next winner
      } else {
        setOpenWinnerDialog(false); // Close dialog if no more items
        console.log("No more items to select");
      }
      // handleRandom();
    }
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
        <RandomButton random={random} handleRandom={handleRandom} />
      </Box>

      <Dialog
        open={openWinnerDialog}
        onClose={handleClose}
        PaperProps={{
          sx: { width: "400px" },
        }}
      >
        <DialogTitle sx={{ color: "#3162ff" }}>Winner</DialogTitle>
        <DialogContent>
          <DialogContentText>The winner is: {winner}</DialogContentText>
          {/* {winnerCollection.map((data) => (
            <DialogContentText>The winner is: {data}</DialogContentText>
          ))} */}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={handleNextRandom}
            variant="contained"
            sx={{ bgcolor: "#3162ff" }}
          >
            Next Random
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
