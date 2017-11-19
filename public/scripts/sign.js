console.log("SIGN.JS CONNNECTEDDDDD");

$('h1').on('click', function(){
    console.log("another click");
});

//gapi.auth2.init({ client_id: '332330513278-7uboe8hl0v0cdnan6orf83opb3p29j9m.apps.googleusercontent.com'});

// function onSignIn(googleUser) {
//     // Useful data for your client-side scripts:


//       // The ID token you need to pass to your backend:
//       var id_token = googleUser.getAuthResponse().id_token;
//       console.log("ID Token: " + id_token);

      

//       //professor's example
//       var note_text = $(".note-input input").val();
//       var created = new Date();
//       //create new note
//       var newNote = {"created":created, "note":note_text};
//       $.post("examplePost", newNote, function (response) {
//           console.log("server post response returned..." + response);
//       });
// };


// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         console.log('User signed out.');
//     });
// }


// $('.signInDiv').on('click', onSignIn());

// $('#signOut').on('click', signOut());

