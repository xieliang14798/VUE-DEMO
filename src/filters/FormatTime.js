export const FormatTime = (time) => {
  if (time) {
    return time >= 10 ? time : '0' + time;
  }
}
