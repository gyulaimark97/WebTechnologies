
    $.getJSON("cars", function (data) {
        var table = $('#fullList');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var manufacturercell = $('<td>' + value.manufacturer + '</td>');
            var namecell = $('<td>' + value.name + '</td>');
            var consumptioncell = $('<td>' + value.consumption + '</td>');
            var colorcell = $('<td>' + value.color + '</td>');
            var countcell = $('<td>' + value.available + '</td>');
            var horsepowercell = $('<td>' + value.horsepower + '</td>');
            var datecell = $('<td>' + value.year + '</td>');

            $(row).append(manufacturercell);
            $(row).append(namecell);
            $(row).append(consumptioncell);
            $(row).append(colorcell);
            $(row).append(countcell);
            $(row).append(horsepowercell);
            $(row).append(datecell);
            $(table).append(row)
        })
    });






