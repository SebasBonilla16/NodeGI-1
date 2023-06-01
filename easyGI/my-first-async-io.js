const fs = require("fs");

const filePath = process.argv[2];

fs.readFile(filePath, "utf8", (err, fileContent) => {
  if (err) {
    console.error(err);
    return;
  }

  const newlineCounter = fileContent.split("\n").length - 1;

  console.log(newlineCounter);
});
