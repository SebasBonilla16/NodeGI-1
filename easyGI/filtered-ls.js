const fs = require("fs");
const path = require("path");

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directoryPath, (err, fileList) => {
  if (err) {
    console.error(err);
    return;
  }

  const filteredFiles = fileList.filter(file => path.extname(file) === `.${fileExtension}`);

  filteredFiles.forEach(file => console.log(file));
});
