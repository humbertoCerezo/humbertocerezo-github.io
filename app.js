const notificationBtn = document.getElementById("enable");

notificationBtn.addEventListener("click",()=>{
    Notification.requestPermission().then(resultado =>{
        console.log('Respuesta: ', resultado)
    });
})

const verNoti = document.querySelector(".ver");

verNoti.addEventListener("click", ()=>{
    if(Notification.permission == 'granted'){
        new Notification('Esta es una notificacion')
    }
})