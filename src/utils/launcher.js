var exec = require('child_process').execFile;

/**
 * Function to execute exe
 * @param {string} fileName The name of the executable file to run.
 * @param {string[]} params List of string arguments.
 * @param {string} path Current working directory of the child process.
 */
export function execute(fileName, params, path) {
    console.log("Launcher...");
    return new Promise((resolve, reject) => {
        exec(fileName, params, {cwd: path}, (err, data) => {
            if (err) reject(err);
            else {
                resolve(data);
            }
        });
    });
}
