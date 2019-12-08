$(document).ready(function()
{
    $("#content").load("content.html");
    $.each($(".menubutton"),  function (mbIndex, mbValue) {
        $(mbValue).click(function(event){
            event.preventDefault();
            if(!($(this).find("a").attr("href")=="index.html"))
                $("#content").load($(this).find('a').attr("href") )
            else
                open("index.html", "_self")
        })
    });
});


