import React, { useState } from "react";
import {
  AppBar,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import UserInputs from "./components/UserInputs";
import StreamInputs from "./components/StreamInputs";
import StreamPoints from "./components/StreamPoints";

function App() {
  const [subscription, setSubscription] = useState("0");
  const [streak, setStreak] = useState("never");
  const [activeness, setActiveness] = useState(0.3);
  const [time, setTime] = useState(1 * 60);
  const [raid, setRaid] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Twitch Channel Points Calculator</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item>
            <Paper>
              <UserInputs
                subscription={subscription}
                setSubscription={setSubscription}
                streak={streak}
                setStreak={setStreak}
                activeness={activeness}
                setActiveness={setActiveness}
              />

              <StreamInputs
                time={time}
                raid={raid}
                setTime={setTime}
                setRaid={setRaid}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <StreamPoints
                subscription={subscription}
                streak={streak}
                activeness={activeness}
                time={time}
                raid={raid}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
