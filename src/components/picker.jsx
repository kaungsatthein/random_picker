import {
  Card,
  CardContent,
} from "@mui/material";

import CardTitle from "./CardTitle";
import RandomForm from "./RandomForm";
import Random from "./Random";

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
    const randomValues = randomValue.split(",").map(item => item.trim());
    setRandom([...random, ...randomValues ]);
    randomRef.current.value = "";
  };

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <CardTitle random={random} />
        <RandomForm handleSubmit={handleSubmit} error={error} randomRef={randomRef}/>
        <Random random={random}/>
      </CardContent>
    </Card>
  );
};

export default Picker;
