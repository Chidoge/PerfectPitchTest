const audio = require('./something')

const doThing = () => {

    const fs = require('fs')

    for (const key in audio[0]) {
            fs.writeFileSync(`${key}.mp3`, Buffer.from(audio[0][key].replace('data:audio/mp3;base64,', ''), 'base64'));
    }

}

doThing()