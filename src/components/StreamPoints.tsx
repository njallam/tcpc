import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";

interface IStreamPointsProps {
  subscription: string;
  streak: string;
  activeness: number;
  time: number;
  raid: boolean;
}

function calculateStreakPoints(streak: string) {
  if (streak === "2") {
    return 300;
  }
  if (streak === "3") {
    return 350;
  }
  if (streak === "4") {
    return 400;
  }
  if (streak === "5") {
    return 450;
  }
  return 0;
}

function subscriptionMultiplier(subscription: string) {
  if (subscription === "1") {
    return 1.2;
  }
  if (subscription === "2") {
    return 1.4;
  }
  if (subscription === "3") {
    return 2;
  }
  return 1;
}

function StreamPoints({
  subscription,
  streak,
  activeness,
  time,
  raid,
}: IStreamPointsProps) {
  const multiplier = subscriptionMultiplier(subscription);
  const streakPoints = calculateStreakPoints(streak);
  const watchPoints = Math.round(multiplier * Math.floor(time / 5) * 10);
  const activePoints = Math.round(
    multiplier * Math.floor(activeness * Math.floor(time / 15)) * 50
  );
  const raidPoints = raid ? 250 : 0;

  const totalPoints = streakPoints + watchPoints + activePoints + raidPoints;

  return (
    <Container>
      <Typography variant="overline">Points Earned</Typography>
      <Table>
        <TableBody>
          {streakPoints > 0 && (
            <TableRow>
              <TableCell>Points from Watch Streak:</TableCell>
              <TableCell>
                <Typography color="primary">{streakPoints}</Typography>
              </TableCell>
            </TableRow>
          )}
          {watchPoints > 0 && (
            <TableRow>
              <TableCell>Points from Watching:</TableCell>
              <TableCell>
                <Typography color="primary">{watchPoints}</Typography>
              </TableCell>
            </TableRow>
          )}
          {activePoints > 0 && (
            <TableRow>
              <TableCell>Points from Active:</TableCell>
              <TableCell>
                <Typography color="primary">{activePoints}</Typography>
              </TableCell>
            </TableRow>
          )}
          {raidPoints > 0 && (
            <TableRow>
              <TableCell>Points from Raid:</TableCell>
              <TableCell>
                <Typography color="primary">{raidPoints}</Typography>
              </TableCell>
            </TableRow>
          )}
          <TableRow />
          <TableRow>
            <TableCell>Total Points:</TableCell>
            <TableCell>
              <Typography color="primary">
                <strong>{totalPoints}</strong>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

export default StreamPoints;
