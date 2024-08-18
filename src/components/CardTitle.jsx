import { Box, Typography, Avatar } from "@mui/material";

const CardTitle = ({ random }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h5" color="inherit">
        What is your random things?
      </Typography>
      {random.length > 0 && (
        <Avatar sx={{ width: 24, height: 24, bgcolor: "#3162ff" }}>
          <Typography sx={{ fontSize: "14px" }} color="inherit">
            {random.length}
          </Typography>
        </Avatar>
      )}
    </Box>
  );
};

export default CardTitle;
