import React from "react";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@material-ui/core";

interface IUserInputsProps {
  subscription: string;
  setSubscription: React.Dispatch<React.SetStateAction<string>>;
  streak: string;
  setStreak: React.Dispatch<React.SetStateAction<string>>;
  activeness: number;
  setActiveness: React.Dispatch<React.SetStateAction<number>>;
}

const subscriptions = [
  { value: "0", label: "None" },
  { value: "1", label: "Tier 1 / Prime" },
  { value: "2", label: "Tier 2" },
  { value: "3", label: "Tier 3" },
];
const streaks = [
  { value: "never", label: "Never" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5+" },
];

function UserInputs({
  subscription,
  setSubscription,
  streak,
  setStreak,
  activeness,
  setActiveness,
}: IUserInputsProps) {
  return (
    <Container>
      <Typography variant="overline">User Details</Typography>
      <Box>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Subscription</FormLabel>
          <RadioGroup
            row
            value={subscription}
            onChange={(e) => setSubscription(e.target.value)}
          >
            {subscriptions.map(({ value, label }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio color="primary" />}
                labelPlacement="bottom"
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Watch Streak</FormLabel>
          <RadioGroup
            row
            value={streak}
            onChange={(e) => setStreak(e.target.value)}
          >
            {streaks.map(({ value, label }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio color="primary" />}
                labelPlacement="bottom"
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Active Watching</FormLabel>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={activeness}
            onChange={(_, v) => setActiveness(v as number)}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
          />
        </FormControl>
      </Box>
    </Container>
  );
}

export default UserInputs;
