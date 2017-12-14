/*
const fs = require('fs')

// fs.readFile('d:\\a.txt')
//     .then((ret) => {
//         console.log(ret)
//     })
//     .error((err) => {
//         console.log(err)
//     })



function readFile() {
    return new Promise(function (resolve, reject) {
        fs.readFile('d:\\a.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


async function doReadFile() {
    try {
        let data = await readFile()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}


*/

let fs = require('fs-promise')

async function doReadFile() {
    try {
        let data = await fs.readFile('d:\\a.txt')
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

doReadFile()
