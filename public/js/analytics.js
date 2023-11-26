const device__period_time_item = document.querySelectorAll(".device__period-time-button");
      device_time_interval_before = document.querySelector(".device__time-interval-before");
      device_time_interval_after = document.querySelector(".device__time-interval-after");

device__period_time_item.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        if (!e.target.classList.contains("device__period-time-button_active")) {
            Array.from(device__period_time_item).find(element => element.classList.contains("device__period-time-button_active")).classList.remove("device__period-time-button_active")
            e.target.classList.add("device__period-time-button_active")
        };

        let period_of_time = e.target.value;
        let date_before = new Date(device_time_interval_before.value)
        let date_after = new Date(device_time_interval_after.value)

        if(e.target.value[0] == "D"){
            date_after = date_before;
            date_after.setDate(+date_before.getDate() + +period_of_time.slice(1));
            date_after.setHours(+date_before.getHours() + 3);
            device_time_interval_after.value = date_after.toISOString().slice(0,16);
        }

        if(e.target.value[0] == "M"){
            date_after = date_before;
            date_after.setMonth(+date_before.getMonth() + +period_of_time.slice(1))
            date_after.setHours(+date_before.getHours() + 3);
            device_time_interval_after.value = date_after.toISOString().slice(0,16);
        }
    });
});


// Строем таблицу 
const works_table = document.querySelector(".device__work-table-body");

const works_table_data = [
    {
        time: "09.10.2021, 15:46",
        type: [
            "В работе",
            "Измерение"
        ],
        works: [
            {
                work_name: "Образец/серия:",
                work_description: "000100057935_170000010325_0000251849",
            },
        ],  
        result: "",
        user: "morozovava"
    },
    {
        time: "12.10.2021, 12:17",
        type: [
            "В работе",
            "Калибровка"
        ],
        works: [
            {
                work_name: "Номер колонки:",
                work_description: "Колонка 2",
            },
            {
                work_name: "Образец:",
                work_description: "Образец 2",
            },
            {
                work_name: "Образец:",
                work_description: "образец 1",
            },
            {
                work_name: "Метод:",
                work_description: "метов тестовый",
            },
            {
                work_name: "Номер колонки:",
                work_description: "Колонка 1",
            },
        ],  
        result: "Промывка с указанием вещества: Вещество Комментарий: тест успешности",
        user: "morozovava"
    },
];

function createWorksTable(works_table_data, works_table){
    works_table_data.forEach(function(work){
        let works_table_item = document.createElement('div');
        works_table_item.classList.add("device__work-table-item");

        works_table_item.innerHTML += 
        `<div class="device__work-table-item-start">${work.time}</div>
        <div class="device__work-table-item-work-type"><span>${work.type[0]}</span><br>${work.type[1]}</div>`;

        let works_list = document.createElement('div');
        works_list.classList.add("device__work-table-item-works")
        work.works.forEach(function(item){
            works_list.innerHTML += `<span>${item.work_name}</span>${item.work_description}<br>`;
        });
        works_table_item.append(works_list);

        works_table_item.innerHTML += 
        `<div class="device__work-table-item-results">
            ${work.result}
            <img src="/public/icons/analytics/check.svg" alt="">
        </div>
        <div class="device__work-table-item-user">${work.user}</div>`;

        works_table.append(works_table_item);
    });
};

createWorksTable(works_table_data, works_table);