$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire)
     {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("button[name=subscribe]").click(() =>
         {               
                
                 $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Dynamic Bytes newsletter!</p>");
                            
        });

        $("#popup-close").click(() => 
        {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }

    $("button[name=login]").click(() =>
         {
            
              

                 $("#login-content").html("<p style='text-align: center'>You are Succesfully Logged in Dynamic Bytes !</p>");
                
            
        });
    

});
