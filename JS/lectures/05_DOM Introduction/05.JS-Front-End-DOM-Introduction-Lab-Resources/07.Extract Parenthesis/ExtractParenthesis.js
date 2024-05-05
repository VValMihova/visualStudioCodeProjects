function extract(content) {
  const text = document.getElementById(content).textContent;

  const pattern = /(\(.+?)\)/g;
  const found = text.match(pattern);

  const output = [];
  found.forEach(result => {
    output.push(result.substring(1, result.length -1));
  })
  return output.join("; ");
}
