import { Box, TextField, Typography, Button } from "@mui/material";

const RandomForm = ({ handleSubmit, error, randomRef }) => {
  return (
    <>
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
    </>
  );
};

export default RandomForm;
