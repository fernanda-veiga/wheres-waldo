import { differenceInSeconds } from "date-fns";

function calculateTimeSpent(endTime, startTime) {
  console.log(startTime.toLocaleTimeString());
  console.log(endTime.toLocaleTimeString());
  const fullSeconds = differenceInSeconds(endTime, startTime);
  console.log(fullSeconds);

  const hours = Math.floor(fullSeconds / 3600);
  const minutes = Math.floor((fullSeconds % 3600) / 60);
  const seconds = fullSeconds % 60;

  const timeStr =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  console.log(timeStr);
  return timeStr;
}

export default calculateTimeSpent;
