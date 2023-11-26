const notifications_icons = ["/public/icons/main/notifications_on.svg", "/public/icons/main/notifications.svg", "/public/icons/main/notifications_off.svg"]
const favorite_list_status = document.querySelectorAll(".favorite__list-item-notifications")
const device_favorites = document.querySelector(".device__favorites")

favorite_list_status.forEach(function (value) {
    let i = 1
    value.addEventListener('click', function(e){
        e.target.src = notifications_icons[(++i)%3]
    })
})
