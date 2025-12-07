 
 

 /**
  * Promise
  */
//  const getPromise = (sec)=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("알빠노")
//         reject('에러');
        
//     },sec*1000);
//  });

//  const getPromise = (sec)=>new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     resolve("리졸브 이름 좆같네 ㅋㅋ")
//     )
//  })

const myPromise = (word)=> new Promise((resolve,reject)=>setTimeout(()=>resolve(word), 2000))

myPromise("아무거나 넣어 씨발").then((res)=>{
    console.log("resolve 에들어간값",res)
    
})


//  getPromise(1).then((res)=>{
//     console.log('first then')
//     console.log(res)
//  }).catch((res)=>{
//     console.log('-----first catch----')
//     console.log(res)
//  })
//  .finally(()=>{
//     console.log('------finally-------')
//  })

//  Promise.all([
//     getPromise(1),
//     getPromise(2),
//     getPromise(3),
//  ]).then((res)=>{
//     console.log(res);
//  })


