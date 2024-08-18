import {
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";

import CardTitle from "./CardTitle";
import RandomForm from "./RandomForm";
import Random from "./Random";

import { useRef, useState } from "react";

const Picker = () => {
  const [random, setRandom] = useState([]);
  const [error, setError] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [randomDialogValue, setRandomDialogValue] = useState([]);

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
    setRandomDialogValue([...random, ...randomValues]);
    randomRef.current.value = "";
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <CardTitle random={random} />
        <RandomForm
          handleSubmit={handleSubmit}
          error={error}
          randomRef={randomRef}
        />
        <Random random={random} setOpenDialog={setOpenDialog} />
        <Dialog
          open={openDialog}
          onClose={handleClose}
          PaperProps={{
            sx: { width: "450px" },
          }}
        >
          <DialogTitle>Random Values</DialogTitle>
          <DialogContent>
            {randomDialogValue.length > 0
              ? random.map((data, index) => (
                  <Typography key={index} color="initial">
                    {data}
                  </Typography>
                ))
              : "No random value are available."}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default Picker;
