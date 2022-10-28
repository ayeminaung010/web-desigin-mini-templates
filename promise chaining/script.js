const loginFirst = () =>{
    const loginPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("login success");
            // reject('login reject');
            
        },2000);
    })
    return loginPromise;
}

const fetchData  = () =>{
    const fetchDataPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("fetchData is fetching data");
            // reject('fetchData reject fetchin data');
            
        },2000);
       
    })
    return fetchDataPromise;
}

const getUserData  = () =>{
    const getUserDataPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("getUserData is fetching user data");
            // reject('getUserData reject getting user data');
           
        },2000);
       
    })
    return getUserDataPromise;
}

const getUserPhotos  = () =>{
    const getUserPhotosPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("getUserPhotos is fetching user photos");
            // reject('getUserPhotos reject getting user photo');
             
        },2000);
    })
    return getUserPhotosPromise;
}


const showUiData  = () =>{
    const showUiDataPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("showUiData shown UI");
            // reject('showUiData reject fetching user ui data');
        },2000);
    })
    return showUiDataPromise;
}

try {
    loginFirst().then((data)=>{
        console.log("data is = ",data);
        return fetchData();
    })
    .then((fetch)=>{
        console.log('fetch data is =',fetch);
        return getUserData();
    })
    .then((userData)=>{
        console.log('user data is =',userData);
        return getUserPhotos();
    })
    .then((photo)=>{
        console.log('user data is =',photo);
        return showUiData();
    })
    .then((showUi)=>{
        console.log('Ui data is =',showUi);
    })
    .catch((errr)=>{
        console.log('error is = ',errr);
    })
} catch (error) {
    console.log(error);
}
    