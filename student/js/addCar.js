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
    $.get('manufacturers', function (data) {
        var carsselect = $("#manSelect");
        for(var i = 0; i < data.length; i++){
            var manName = document.createElement('option');

            manName.innerHTML = data[i].name;
            manName.setAttribute("value", data[i].name);

            carsselect.append(manName);
        }
    });


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











