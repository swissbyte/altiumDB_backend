const StreamZip = require('node-stream-zip');
var CFB = require('cfb');

export function getZipContent(filename) {

    /* const zip = new StreamZip({
         file: filename,
         storeEntries: true
     });

     // Handle errors
     zip.on('error', err => {
         console.log("ZIP ERROR: " + err)
     });

     zip.on('ready', () => {
         console.log('Entries read: ' + zip.entriesCount);
         for (const entry of Object.values(zip.entries())) {
             const desc = entry.isDirectory ? 'directory' : `${entry.size} bytes`;
             console.log(`Entry ${entry.name}: ${desc}`);
         }
         // Do not forget to close the file once you're done
         zip.close()
     });*/

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
}




