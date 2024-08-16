import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

import { useRef, useState } from "react";

const Picker = () => {
  const [random, setRandom] = useState([]);
  const [error, setError] = useState();

  const randomRef = useRef();

  const handleSubmit = () => {
    setError(null);
    const randomValue = randomRef.current.value.trim();
    if (!randomValue) {
      setError("Please enter something.");
      return false;
    }
    setRandom([...random, randomValue]);
    randomRef.current.value = "";
  };

  console.log("random", random);

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" color="inherit">
            What is your random thing?
          </Typography>
          {random.length > 0 && (
            <Avatar sx={{ width: 24, height: 24, bgcolor: "#3162ff" }}>
              <Typography sx={{ fontSize: "14px" }} color="inherit">
                {random.length}
              </Typography>
            </Avatar>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            inputRef={randomRef}
            id="outlined-basic"
            label="Random"
            variant="outlined"
            fullWidth
            sx={{
              mr: 2,
            }}
          />

          <Button
            variant="contained"
            sx={{ height: 40, bgcolor: "#3162ff" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        {random && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            Randoms: {random.join(", ")}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Picker;
