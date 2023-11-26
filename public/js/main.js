// Строим таблицу любимых приборов
const favorite_list = document.querySelector(".favorite__list-main");

const favorite_devices = [
    {
        img:"/public/pictures/main/pH.jpg",
        name: "pH-метр Mettler-Toledo International, Inc. SevenCompact S220",
        status: "Свободен",
        notification_img: "/public/icons/main/notifications_on.svg"
    },
    {
        img:"/public/pictures/main/Спектр.jpg",
        name: "Спектрофотометр Varian, Inc Cary 50 Bio",
        status: "Свободен",
        notification_img: "/public/icons/main/notifications_on.svg"
    },
    {
        img:"/public/pictures/main/Титратор.jpg",
        name: "Титратор",
        status: "Свободен",
        notification_img: "/public/icons/main/notifications.svg"
    },
    {
        img:"/public/pictures/main/Коагулометр.jpg",
        name: "Коагулометр Tcoag, KC 4 Delta",
        status: "Свободен",
        notification_img: "/public/icons/main/notifications_off.svg"
    },
    {
        img:"/public/pictures/main/Коагулометр.jpg",
        name: "Коагулометр Tcoag, KC 4 Delta",
        status: "Свободен",
        notification_img: "/public/icons/main/notifications_off.svg"
    }
]

function buildFavoritesTable(favorite_devices, favorite_list){
    favorite_devices.forEach(function(device, index, device_list){
        let favorite_item = document.createElement('div')
        favorite_item.classList.add("favorite__list-item")
        favorite_item.innerHTML = 
            `<img src=${device.img} alt="" class="favorite__list-item-image">
            <div class="favorite__list-item-name">${device.name}</div>
            <select class="favorite__list-item-status" name="" id="">
                <option value="free">Свободен</option>
                <option value="busy">В работе</option>
            </select>
            <img src=${device.notification_img} alt="" class="favorite__list-item-notifications">`
        favorite_list.append(favorite_item);
    });
}

buildFavoritesTable(favorite_devices, favorite_list);

// Добавляем изменения иконок уведомелний, работает конечно не очень
const notifications_icons = ["/public/icons/main/notifications_on.svg", "/public/icons/main/notifications.svg", "/public/icons/main/notifications_off.svg"]
const favorite_list_status = document.querySelectorAll(".favorite__list-item-notifications")

favorite_list_status.forEach(function (value) {
    let i = 1
    value.addEventListener('click', function(e){
        e.target.src = notifications_icons[(++i)%3]
    })
})

