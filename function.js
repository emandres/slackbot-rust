const child_process = require('child_process')

exports.handle = (event, context, callback) => {
    try {
        child_process.execSync('mv ./slackbot /tmp; chmod +x /tmp/slackbot')
        var child = child_process.exec('/tmp/slackbot', (err, stdout, stderr) => {
            if (err) {
                callback("Error: " + err)
            }
            callback(null, stdout.toString('utf8'))
        })
        child.stdin.write(JSON.stringify(event))
        child.stdin.end()
    } catch (e) {
        callback("Catch: " + e.stderr.toString('utf8'))
    }
}