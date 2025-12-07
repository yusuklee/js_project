const p = new Promise(resolve=>setTimeout(()=>resolve(10),1000));

const x = await p ;
console.log(x);