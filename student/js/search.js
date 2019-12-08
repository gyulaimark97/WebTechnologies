
$('#search').submit(function(e) {
    e.preventDefault();
    var string=$("#manSelect").val();
    //deleteAllCookies();
    document.cookie="name="+string;
    //alert(string);
    getData();

});



function getData() {
    $.get('manufacturer', function(data){


        var carstable = $("#list");

        $("#list > tr").remove();

        for(var i = 0; i < data.length; i++){

            var row = createCarsRow(data[i]);

            carstable.append(row);

        }

    });
}

/*function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}*/