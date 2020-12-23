import React from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

interface IStreamInputsProps {
  time: number;
  raid: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setRaid: React.Dispatch<React.SetStateAction<boolean>>;
}

function StreamInputs({ time, raid, setTime, setRaid }: IStreamInputsProps) {
  return (
    <Container>
      <Typography variant="overline">Stream Details</Typography>
      <Grid container justify="space-between">
        <Grid item>
          <TextField
            label="Duration (minutes)"
            variant="outlined"
            size="small"
            type="number"
            inputProps={{ min: 0 }}
            value={time}
            onChange={(e) => setTime((e.target.value as unknown) as number)}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={raid}
                onChange={(_, c) => setRaid(c)}
              />
            }
            label="Raid"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default StreamInputs;
