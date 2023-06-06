function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date1');
    let today1 = new Date();
    out1.innerHTML = 'Дата и время для локали ОАЭ: ' + today1.toLocaleString('ar-AE');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Дата и время для локали Германии: ' + today2.toLocaleString('de-DE');

    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Дата и время для локали Испании (Аргентина): ' +  today3.toLocaleString('es-AR');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Дата и время для локали Таиланда: ' +   today4.toLocaleString('th-TH');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = 'Дата и время для локали Албании: ' +   today5.toLocaleString('sq');
}

function showDateCount() {
    var Days;
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = 'Количество дней с даты рождения: ' + Math.floor((today - birthday)/1000/60/60/24);
    document.getElementById('DaysHB').innerHTML = daysCount;
}

function DeleteD() {
    var Days;
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    document.getElementById('DaysHB').innerHTML = '';
}