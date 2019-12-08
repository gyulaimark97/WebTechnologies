

$('#search').submit(function(e) {
    e.preventDefault();
    document.cookie = $(this).serialize();

    getData();

});

function getData() {
    $.get('manufacturer', function(data){

        alert("sda")
        var carstable = $("#list");

        $("#list > tr").remove();

        for(var i = 0; i < data.length; i++){

            var row = createCarsRow(data[i]);

            carstable.appendChild(row);

        }

    });
}