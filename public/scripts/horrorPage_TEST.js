 var moviesArray =
[
    {
        movie: "The Terminator", 
        genre: "Action/Adventure", 
        decade: "80's", 
        portrait: "../MovieImages/Portrait/The Terminator.jpg", 
        landscape: "../MovieImages/Landscape/The Terminator.jpg"
    },
    {
         movie: "Back to the Future", 
         genre: "Action/Adventure", 
         decade: "80's", 
         portrait: "../MovieImages/Portrait/Back to the Future.jpg", 
         landscape: "../MovieImages/Landscape/Back to the Future.jpg"
    },
    {
        movie: "Lethal Weapon", 
        genre: "Action/Adventure", 
        decade: "80's", 
        portrait: "../Movie Images/Portrait/Lethal Weapon.jpg", 
        landscape: "../MovieImages/Landscape/Lethal Weapon.jpg"
    },
    {
         movie: "The Shining", 
         genre: "Horror", 
         decade: "80's", 
         portrait: "/images/The Shining_Portrait.jpg", 
         landscape: "../MovieImages/Landscape/The Shining.jpg"
    },
    {
         movie: "A Nightmare on Elm Street", 
         genre: "Horror", 
         decade: "80's", 
         portrait: "/images/The Shining_Portrait.jpg", 
         landscape: "../MovieImages/Landscape/A Nightmare on Elm Street.jpg"
    },
    {
         movie: "The Evil Dead", 
         genre: "Horror", 
         decade: "80's", 
         portrait: "/images/The Shining_Portrait.jpg", 
         landscape: "../MovieImages/Landscape/The Evil Dead.jpg"
    },
]


    /* want to check to see what page the user is on, if user
         is on horror page, thriller, drama, etc, navigate to the right folder and output images*/

    // the listener is now the "Horror" heading element
    //seems it's better if it's outside the element being appended to 
    $("#horror").click(function()
    {   alert("I have been clicked Supreme Being")
        for(i = 0; i < moviesArray.length; i++)
        {
            if(moviesArray[i].genre == 'Horror')
            {
                //check correct movies being accessed
                console.log(moviesArray[i].movie);
                //  var image = document.createElement("img");
                //  var anchor = document.createElement("a");
                // var figure = document.createElement("figure");
                //create image element
                var imgTemp = $("<img>"); 
                //add src attribute with correct path
                imgTemp.attr("src", moviesArray[i].portrait);
                //add class attrbute for good styling 
                imgTemp.attr("class", "images");

                //create figure element
                var figTemp = $("<figure>");
                //edit figure element's html (put the image element inside it)
                figTemp.html(imgTemp);
                
                //append to DOM
                $("#imageGrid").append(figTemp);

                //figure.src = moviesArray[i].portrait;
            }
        }
        //alert("blah blah");
    });
