import React from 'react';

async function dataPullFromAPI() {
    let storageLoc = window.localStorage;
    let batch = await fetch('/api/bumpers', {
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