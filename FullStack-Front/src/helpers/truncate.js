export default function truncate(text,size= 30) {
  if (text.length > size) {
    return text.slice(0, size) + "...";
  } else {
    return text;
  }
}
