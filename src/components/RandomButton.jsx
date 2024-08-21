import { Button } from "@mui/material";

const RandomButton = ({ random, handleRandom }) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: "#3162ff" }}
      disabled={random.length < 2}
      onClick={handleRandom}
    >
      Random your things
    </Button>
  );
};

export default RandomButton;
