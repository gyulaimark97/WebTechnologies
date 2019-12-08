$(document).ready( function () {
    ManSelect();
});

$(function () {
    $('#form').on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            type: 'post',
            url : 'addCar',
            data : $('#form').serialize(),
            success: function() {
                alert("Sikeresen hozzáadta az autót")
            },
            error : function () {
                alert("A car with that name already exists!");
            }
        })
    })
});

function ManSelect() {
    $.getJSON('manufacturers', function (data) {
        var select = $('#manSelect');
        $.each(data, function (key, value) {
            $(select).append('<option value='+value.name+'>'+value.name+'</option>');
        })
    })
}


function createCarsRow(car){

    var tr = document.createElement('tr');
    var nametd = document.createElement('td');
    var consumptiontd = document.createElement('td');
    var colortd = document.createElement('td');
    var manufacturertd = document.createElement('td');
    var availabletd = document.createElement('td');
    var yeartd = document.createElement('td');
    var horsepowertd = document.createElement('td');

    nametd.innerHTML = car.name;
    consumptiontd.innerHTML = car.consumption;
    colortd.innerHTML = car.color;
    manufacturertd.innerHTML = car.manufacturer;
    availabletd.innerHTML = car.available;
    yeartd.innerHTML = car.year;
    horsepowertd.innerHTML = car.horsepower;


    tr.appendChild(nametd);
    tr.appendChild(consumptiontd);
    tr.appendChild(colortd);
    tr.appendChild(manufacturertd);
    tr.appendChild(availabletd);
    tr.appendChild(yeartd);
    tr.appendChild(horsepowertd);

    return tr;
}










