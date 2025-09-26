  
    
  
    function time() {
        let clock = document.querySelector("#clock");
    let newDate = new Date();
    console.log(newDate);
  
    let sec =  newDate.getSeconds();
    let min =  newDate.getMinutes();
    let hour =  newDate.getHours();
        clock.textContent = `${hour}:${min}:${sec}`

    }

    setInterval(function () {   

        //  clock.textContent = `${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}` ;

        time();

    },1000)

  