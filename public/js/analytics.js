const device__period_time_item = document.querySelectorAll(".device__period-time-item")
const favorite_device = document.querySelector(".device__favorites")

device__period_time_item.forEach(function(value) {
    value.addEventListener('click', function(e){
        if (!e.target.classList.contains("device__period-time-item_active")){
            Array.from(device__period_time_item).find(element => element.classList.contains("device__period-time-item_active")).classList.remove("device__period-time-item_active")
            e.target.classList.add("device__period-time-item_active")
        }
    })
})

let i = 0;
favorite_device.addEventListener('click', function(e){
    e.target.style = 'fill: blue;'
})