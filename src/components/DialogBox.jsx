import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";

import { Delete as DeleteIcon } from "@mui/icons-material";

const DialogBox = ({ openDialog, handleClose, random, handleDelete }) => {
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      PaperProps={{
        sx: { width: "400px" },
      }}
    >
      <DialogTitle sx={{ color: "#3162ff" }}>Random Values</DialogTitle>
      <DialogContent>
        {random && random.length > 0 ? (
          random.map((data, index) => (
            <List key={index}>
              <ListItem>
                <ListItemText>{data}</ListItemText>
                <ListItemIcon
                  sx={{ pl: 5, cursor: "pointer" }}
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
              <Divider />
            </List>
          ))
        ) : (
          <Typography>No random value is available.</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
