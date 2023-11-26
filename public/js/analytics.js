const device__period_time_item = document.querySelectorAll(".device__period-time-item")

device__period_time_item.forEach(function(value) {
    value.addEventListener('click', function(e){
        if (!e.target.classList.contains("device__period-time-item_active")){
            Array.from(device__period_time_item).find(element => element.classList.contains("device__period-time-item_active")).classList.remove("device__period-time-item_active")
            e.target.classList.add("device__period-time-item_active")
        }
    })
})
