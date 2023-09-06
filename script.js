

const notificationsArr = document.querySelectorAll('.notification');

const markAsReadButton = document.querySelector('.mark-as-read');
markAsReadButton.onclick = markAsRead

function markAsRead() {
    for (let i=0;i<notificationsArr.length;i++){
        if(notificationsArr[i].classList.length === 3){
            notificationsArr[i].classList.remove('unread')
    }
}
    document.querySelector('.notification-number').style.display = 'none'
}
