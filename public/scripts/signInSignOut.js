//alert("dec five connnected");
function appLogic() 
{
    "use strict";

    function isVisible(element) 
    {
        //check if element is hidden or not
        if (element.is(":hidden")) 
        {
            return false;
        } else {
            return true;
        }
    }
    
    //alert(!$("#signOut").attr("active") );
    //NEED TO FIX! should only hide IF user is signed in. otherwise don't hide. 
    //$("#signOut").hide();
    //alert($("#signIn").text());
    // if (!$("#signOut").attr("active") || $("#signOut").attr("active") === "false") {
        
    //     $("#signOut").attr("active", "false");
    //     $("#signOut").hide();

    //     $("#signIn").attr("active", "true");
    //     $("#signIn").show();
        
    // }else if ($("#signOut").attr("active") === "true") {

    //     $("#signOut").show();
        
    //     $("#signIn").attr("active", "false");
    //     $("#signIn").hide();

    // }



    //THE LOGIC 

    // $("#signIn").on("click", function(){

    //     $(this).attr("active", "false");
    //     $(this).hide();

    //     $("#signIn").attr("active", "true");
    //     $("#signOut").fadeIn("slow");

    // });

    // $("#signOut").on("click", function(){
        
    //     $(this).attr("active", "false");
    //     $(this).hide();

    //     $("#signIn").attr("active", "true");
    //     $("#signIn").fadeIn("slow");

    // });

   // $("#")


    // $('h1').on('click', function(){
    //     console.log("another click");

    // });

};

$(document).ready(appLogic);


// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//     console.log('User signed out.');
//     });
// }
// $('#signOut').on('click', function(){
//     console.log("another click");
// });
