function secondsToTimeStr(fullSeconds) {
  const minutes =
    Math.floor(fullSeconds / 60) < 10
      ? `0${Math.floor(fullSeconds / 60)}`
      : `${Math.floor(fullSeconds / 60)}`;
  const seconds =
    fullSeconds % 60 < 10 ? `0${fullSeconds % 60}` : `${fullSeconds % 60}`;

  return `${minutes}:${seconds}`;
}

export default secondsToTimeStr;
