import { Card, CardContent } from "@mui/material";

import CardTitle from "./CardTitle";
import RandomForm from "./RandomForm";
import Random from "./Random";
import DialogBox from "./DialogBox";

const Picker = ({
  random,
  error,
  openDialog,
  handleSubmit,
  handleClose,
  handleDelete,
  randomRef,
  setOpenDialog,
}) => {
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
        <DialogBox
          openDialog={openDialog}
          handleClose={handleClose}
          random={random}
          handleDelete={handleDelete}
        />
      </CardContent>
    </Card>
  );
};

export default Picker;
