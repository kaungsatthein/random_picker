import {
    Typography,
  } from "@mui/material";

const Random = ({random}) => {
  return (
    <>
    {random && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Randoms <br />{random.join(", ")}
        </Typography>
      )}
    </>
  )
}

export default Random