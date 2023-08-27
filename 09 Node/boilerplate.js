const fs = require("fs");
const folderName = process.argv[2] || "Project";

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/scrpit.js`, "");
    fs.writeFileSync(`${folderName}/styles.css`, "");

} catch (err) {
    console.log("Error: ", err);
}