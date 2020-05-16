let certifyPromise = () =>{
   return new Promise((resolve, reject) => {
        //some processing happens and candidate gets the certificate
        certified = true;
        
        if(certified)
        {
            
            resolve("Certificate received")
        }
     
        else{
            reject("Certificate rejected")
        }
    })

}



let jobcertificate = () =>
{return new Promise((resolve, reject) => {
    //some processing happens and candidate gets the certificate
    jobcertified = false;
    
    if(jobcertified)
    {
        
        resolve("JobCertificate received")
         }
 
    else{
        reject("JobCertificate rejected")
    }
})
} 
    // certificate.then((success) =>
    // {
    //    console.log(success)
    //    return jobcertificate
    // }).catch((failure) =>
    // {
    //     console.log(failure)
    // }).then((success) =>
    // {
    //    console.log(success)
     
    // }).catch((failure) =>
    // {
    //     console.log(failure)
    // })

    console.log("Rest of the world")

   // focus on resolves
    Promise.race([certifyPromise(), jobcertificate()]).then((result) => {
        console.log(result)
    }
    ).catch((result) =>{
        console.log(result)
    })

    //focus on rejects
    // Promise.all([certifyPromise(), jobcertificate()]).then((result) => {
    //     console.log(result)
    // }
    // ).catch((result) =>{
    //     console.log(result)
    // })
