import { differenceInSeconds } from "date-fns";

function calculateTimeSpent(endTime, startTime) {
  const fullSeconds = differenceInSeconds(endTime, startTime);
  const hours = Math.floor(fullSeconds / 3600);
  const minutes = Math.floor((fullSeconds % 3600) / 60);
  const seconds = fullSeconds % 60;

  const timeStr =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  return timeStr.length > 8 ? "99:59:59" : timeStr;
}

export default calculateTimeSpent;
