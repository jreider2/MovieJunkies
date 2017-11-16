console.log("SIGN.JS CONNNECTEDDDDD");

$('h1').on('click', function(){
    console.log("another click");

});

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

$('#signOut').on('click', signOut());