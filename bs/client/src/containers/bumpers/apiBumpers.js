import React from 'react';

async function dataPullFromAPI() {
    let storageLoc = window.localStorage;
<<<<<<< HEAD
    let batch = await fetch('api/bumpers', {
=======
    let batch = await fetch('/api/bumpers', {
>>>>>>> f35abca94f491dbd8ac33a502e06819854ede0e6
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'localStore': JSON.stringify(storageLoc)
        }
    })
    .then(resp => resp.json())
    .then(data => {
        // let dataFromAPI = [];
        console.log(storageLoc, 'storageloc')
        console.log(data, 'data inside class dataPullFromAPI')
        // console.log(dataFromAPI, '[apibumpers inside] datafromapi');
        // console.log(bumperStickers, '[bumpersfunctest] bumperstickers');
        return data
    })
}
console.log(data, '[apibumpers outside class] datafromapi');
export {dataPullFromAPI};