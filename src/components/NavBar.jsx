import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#3162ff",
        height: 80,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h4" color="inherit">
          Random Picker Tool
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
