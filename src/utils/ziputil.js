const StreamZip = require('node-stream-zip');
var CFB = require('cfb');

export function getZipContent(filename) {
    const cfb = CFB.read(filename, {type: 'file'});

    let directories = "["
    let firstRun = true;
    for (let i = 0; i < cfb.FullPaths.length; i++) {
        const directory = cfb.FullPaths[i].split("/")[1];
        if (directories.indexOf(directory) === -1) {
            if (directory.length > 0 && directory !== "FileHeader" && directory !== "FileVersionInfo") {
                if (firstRun == false) directories += ",";
                firstRun = false;
                directories += '{' + '"Name":"' + directory + '"}';
                //directories.push(directory);
            }
        }
    }
    directories += "]";
    console.log(JSON.parse(directories));
    return JSON.parse(directories);
}




