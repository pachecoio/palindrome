module.exports = str => {
  return (
    str
      .split("")
      .reverse()
      .join("")
      .replace(" ", "")
      .toLowerCase() === str.replace(" ", "").toLowerCase()
  );
};
