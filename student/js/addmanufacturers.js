$(document).ready(function () {
    listingManufacturers();
    ManSelect();
});

$(function () {
    $('#addman').on("submit", function (event) {
        event.preventDefault();

        $.ajax({
            type: 'post',
            url : 'addManufacturers',
            data : $('#addman').serialize(),
            success : function (receivedData) {
                listingManufacturers();
                alert("Sikeresen hozzáadta a gyártót")
            },
            error : function () {
                alert("A manufacturer with that name already exists!");
            }
        })
    })
});

function listingManufacturers() {
    $.getJSON('manufacturers', function (data) {
        $.each(data, function (key, value) {
            var manTable = $("#manTable");
            var row = $('<tr></tr>');
            var nameCell = $('<td>'+ value.name + '</td>');
            var countryCell = $('<td>' + value.country + '</td>');
            var yearCell = $('<td>' + value.founded + '</td>');
            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(yearCell);
            $(manTable).append(row);
        })
    })
}