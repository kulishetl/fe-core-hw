export default function getFormattedTime(time) {
    const date = new Date(time);
    const mt = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    const sc = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  
    return `${mt}:${sc}`;
}