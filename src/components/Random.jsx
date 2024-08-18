import { Typography, Button, Avatar } from "@mui/material";

import { Edit as EditIcon } from "@mui/icons-material";

const Random = ({ random, setOpenDialog }) => {
  return (
    <>
      {random && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          <Button
            variant="text"
            color="inherit"
            sx={{ marginLeft: -1 }}
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            Randoms
            <Avatar
              sx={{
                width: 16,
                height: 16,
                bgcolor: "#3162ff",
                marginLeft: 0.5,
              }}
            >
              <EditIcon sx={{ fontSize: 10, color: "white" }} />
            </Avatar>
          </Button>
          <br />
          <Typography color="initial">{random.join(", ")}</Typography>
        </Typography>
      )}
    </>
  );
};

export default Random;
