function appLogic() {

    "use strict";

    $(".movieList").hide();

    //check element visibility - expects single element relative to display:none
    function checkIsVisible(element) {
        //check if element is hidden or not
        if (element.is(":hidden")) {
            return false;
        } else {
            return true;
        }
    }

    //check elements exists
    function checkExist(element) {
        //check specified elements or not - return boolean
        if (element.length) {
            return true;
        } else {
            return false;
        }
    }

    function createFigure(imgSrc) {
        
        //create image element
        var $imgTemp = $("<img>"); 
        //add src attribute with correct path
        $imgTemp.attr("src", imgSrc);
        //add class attrbute for good styling 
        $imgTemp.attr("class", "images");

        //create figure element
        var $figTemp = $("<figure>");
        //edit figure element's html (put the image element inside it)
        $figTemp.html($imgTemp);
                
        //return built figure 
        return $figTemp;
    }

    function createMovieSelection(genre){

        for(var i = 0; i < moviesArray.length; i++)
        {
            if(moviesArray[i].genre == genre)
            {
                //create figure element 
                var figTemp = createFigure(moviesArray[i].portrait);

                //append to DOM
                $("#imageGrid").append(figTemp);
                
            }
        }
    }


    $("#horror").click(function()
    {   
        //check visibility of movie list 
        if (checkIsVisible($(".movieList")) === true) {
            $(".movieList").hide();
        } // else remain hidden

        //check if any images currently exist there 
        //TODO -- use checkExist() function already written above 
        //if images exist, delete them all
            //see "handle delection of all notes" section in hayward github week11/travel-notes-series3/demo2/assets/scrits/travel.js for detail"

        //append images from horror to imageGrid in DOM
        createMovieSelection('Horror');

        //edit heading for correct movieList section Heading
        $("#movieListGenreHeading").html("Horror");

        //Hide genre categories if they are showing
        if (checkIsVisible($(".genrecontent")) === true) {
            $(".genrecontent").hide();
        } // else remain hidden

        //Image grid fadeIn...
        $(".movieList").fadeIn("slow");

    });



    //This is a good example of how to create handlers for
    //dynamically created elements:

    //handle click event per note
    //$(".note-output").on("click", "p", function() 
    //{
        //check if other delete buttons visible
        
        //then handle click event for current note
        
    //});

    //another helpful means of building new complex elements: 
    //var $button = $('<button class="'+buttonClass+'">'+buttonText+'</button>');




    var moviesArray =
    [
        {
            movie: "The Terminator", 
            genre: "Action/Adventure", 
            decade: "80's", 
            portrait: "/Movie Images/Portrait/The Terminator.jpg", 
            landscape: "/Movie Images/Landscape/The Terminator.jpg"
        },
        {
            movie: "Back to the Future", 
            genre: "Action/Adventure", 
            decade: "80's", 
            portrait: "/Movie Images/Portrait/Back to the Future.jpg", 
            landscape: "/Movie Images/Landscape/Back to the Future.jpg"
        },
        {
            movie: "Lethal Weapon", 
            genre: "Action/Adventure", 
            decade: "80's", 
            portrait: "/Movie Images/Portrait/Lethal Weapon.jpg", 
            landscape: "/Movie Images/Landscape/Lethal Weapon.jpg"
        },
        {
            movie: "The Matrix",
            genre: "Action/Adventure",
            decade: "90's",
            portrait: "/Movie Images/Portrait/The Matrix.jpg",
            landscape: "/Movie Images/Landscape/The Matrix.jpg",
        },
        {
            movie: "Jurrasic Park",
            genre: "Action/Adventure",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Jurrasic Park.jpg",
            landscape: "/Movie Images/Landscape/Jurrasic Park.jpg",
        },
        {
            movie: "The Fifth Element",
            genre: "Action/Adventure",
            decade: "90's",
            portrait: "/Movie Images/Portrait/The Fifth Element.jpg",
            landscape: "/Movie Images/Landscape/The Fifth Element.jpg",
        },
        {
            movie: "The Bourne Identity",
            genre: "Action/Adventure",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/The Bourne Identity.jpg",
            landscape: "/Movie Images/Landscape/The Bourne Identity.jpg"
        },
        {
            movie: "Kill Bill Volume 1",
            genre: "Action/Adventure",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Kill Bill Volume 1.jpg",
            landscape: "/Movie Images/Landscape/Kill Bill Volume 1.jpg"
        },
        {
            movie: "300",
            genre: "Action/Adventure",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/300.jpg",
            landscape: "/Movie Images/Landscape/300.jpg"
        },
        {
            movie: "Mad Max Fury Road",
            genre: "Action/Adventure",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Mad Max Fury Road.jpg",
            landscape: "/Movie Images/Landscape/Mad Max Fury Road.jpg"
        },
        {
            movie: "John Wick",
            genre: "Action/Adventure",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/John Wick.jpg",
            landscape: "/Movie Images/Landscape/John Wick.jpg"
        },
        {
            movie: "Avengers Age of Ultron",
            genre: "Action/Adventure",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Avengers Age of Ultron.jpg",
            landscape: "/Movie Images/Landscape/Avengers Age of Ultron.jpg"
        },
        {
            movie: "The Shining",
            genre: "Horror",
            decade: "80's",
            portrait: "/Movie Images/Portrait/The Shining.jpg",
            landscape: "/Movie Images/Landscape/The Shining.jpg"
        },
        {
            movie: "A Nightmare on Elm Street",
            genre: "Horror",
            decade: "80's",
            portrait: "/Movie Images/Portrait/A Nightmare on Elm Street.jpg",
            landscape: "/Movie Images/Landscape/A Nightmare on Elm Street.jpg"
        },
        {
            movie: "The Evil Dead",
            genre: "Horror",
            decade: "80's",
            portrait: "/Movie Images/Portrait/The Evil Dead.jpg",
            landscape: "/Movie Images/Landscape/The Evil Dead.jpg"
        },
        {
            movie: "The Silence of the Lambs",
            genre: "Horror",
            decade: "90's",
            portrait: "/Movie Images/Portrait/The Silence of the Lambs.jpg",
            landscape: "/Movie Images/Landscape/The Silence of the Lambs.jpg"
        },
        {
            movie: "Funny Games",
            genre: "Horror",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Funny Games.jpg",
            landscape: "/Movie Images/Landscape/Funny Games.jpg"
        },
        {
            movie: "Sleepy Hollow",
            genre: "Horror",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Sleepy Hollow.jpg",
            landscape: "/Movie Images/Landscape/Sleepy Hollow.jpg"
        },
        {
            movie: "The Exorcism of Emily Rose",
            genre: "Horror",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/The Exorcism of Emily Rose.jpg",
            landscape: "/Movie Images/Landscape/The Exorcism of Emily Rose.jpg"
        },
        {
            movie: "The Texas Chainsaw Massacre",
            genre: "Horror",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/The Texas Chainsaw Massacre.jpg",
            landscape: "/Movie Images/Landscape/The Texas Chainsaw Massacre.jpg"
        },
        {
            movie: "Jeepers Creepers",
            genre: "Horror",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Jeepers Creepers.jpg",
            landscape: "/Movie Images/Landscape/Jeepers Creepers.jpg"
        },
        {
            movie: "The Conjuring",
            genre: "Horror",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/The Conjuring.jpg",
            landscape: "/Movie Images/Landscape/The Conjuring.jpg"
        },
        {
            movie: "Sinister",
            genre: "Horror",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Sinister.jpg",
            landscape: "/Movie Images/Landscape/Sinister.jpg"
        },
        {
            movie: "The Cabin in the Woods",
            genre: "Horror",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/The Cabin in the Woods.jpg",
            landscape: "/Movie Images/Landscape/The Cabin in the Woods.jpg"
        },
        {
            movie: "Fatal Attraction",
            genre: "Thriller",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Fatal Attraction.jpg",
            landscape: "/Movie Images/Landscape/Fatal Attraction.jpg"
        },
        {
            movie: "Body Heat",
            genre: "Thriller",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Body Heat.jpg",
            landscape: "/Movie Images/Landscape/Body Heat.jpg"
        },
        {
            movie: "Sudden Impact",
            genre: "Thriller",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Sudden Impact.jpg",
            landscape: "/Movie Images/Landscape/Sudden Impact.jpg"
        },
        {
            movie: "The Sixth Sense",
            genre: "Thriller",
            decade: "90's",
            portrait: "/Movie Images/Portrait/The Sixth Sense.jpg",
            landscape: "/Movie Images/Landscape/The Sixth Sense.jpg"
        },
        {
            movie: "Enemy of the State",
            genre: "Thriller",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Enemy of the State.jpg",
            landscape: "/Movie Images/Landscape/Enemy of the State.jpg"
        },
        {
            movie: "Seven",
            genre: "Thriller",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Seven.jpg",
            landscape: "/Movie Images/Landscape/Seven.jpg"
        },
        {
            movie: "Man on Fire",
            genre: "Thriller",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Man on Fire.jpg",
            landscape: "/Movie Images/Landscape/Man on Fire.jpg"
        },
        {
            movie: "The Others",
            genre: "Thriller",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/The Others.jpg",
            landscape: "/Movie Images/Landscape/The Others.jpg"
        },
        {
            movie: "Insomnia",
            genre: "Thriller",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Insomnia.jpg",
            landscape: "/Movie Images/Landscape/Insomnia.jpg"
        },
        {
            movie: "Don't Breathe",
            genre: "Thriller",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Don't Breathe.jpg",
            landscape: "/Movie Images/Landscape/Don't Breathe.jpg"
        },
        {
            movie: "Shutter Island",
            genre: "Thriller",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Shutter Island.jpg",
            landscape: "/Movie Images/Landscape/Shutter Island.jpg"
        },
        {
            movie: "Split",
            genre: "Thriller",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Split.jpg",
            landscape: "/Movie Images/Landscape/Split.jpg"
        },
        {
            movie: "The Naked Gun",
            genre: "Comedy",
            decade: "80's",
            portrait: "/Movie Images/Portrait/The Naked Gun.jpg",
            landscape: "/Movie Images/Landscape/The Naked Gun.jpg"
        },
        {
            movie: "National Lampoon's Vacation",
            genre: "Comedy",
            decade: "80's",
            portrait: "/Movie Images/Portrait/National Lampoon's Vacation.jpg",
            landscape: "/Movie Images/Landscape/National Lampoon's Vacation.jpg"
        },
        {
            movie: "Trading Places",
            genre: "Comedy",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Trading Places.jpg",
            landscape: "/Movie Images/Landscape/Trading Places.jpg"
        },
        {
            movie: "Office Space",
            genre: "Comedy",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Office Space.jpg",
            landscape: "/Movie Images/Landscape/Office Space.jpg"
        },
        {
            movie: "The Waterboy",
            genre: "Comedy",
            decade: "90's",
            portrait: "/Movie Images/Portrait/The Waterboy.jpg",
            landscape: "/Movie Images/Landscape/The Waterboy.jpg"
        },
        {
            movie: "Rush Hour",
            genre: "Comedy",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Rush Hour.jpg",
            landscape: "/Movie Images/Landscape/Rush Hour.jpg"
        },
        {
            movie: "Role Models",
            genre: "Comedy",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Role Models.jpg",
            landscape: "/Movie Images/Landscape/Role Models.jpg"
        },
        {
            movie: "The 40 Year Old Virgin",
            genre: "Comedy",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/The 40 Year Old Virgin.jpg",
            landscape: "/Movie Images/Landscape/The 40 Year Old Virgin.jpg"
        },
        {
            movie: "Anchorman The Legend of Ron Burgundy",
            genre: "Comedy",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Anchorman The Legend of Ron Burgundy.jpg",
            landscape: "/Movie Images/Landscape/Anchorman The Legend of Ron Burgundy.jpg"
        },
        {
            movie: "Bridesmaids",
            genre: "Comedy",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Bridesmaids.jpg",
            landscape: "/Movie Images/Landscape/Bridesmaids.jpg"
        },
        {
            movie: "Ted",
            genre: "Comedy",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Ted.jpg",
            landscape: "/Movie Images/Landscape/Ted.jpg"
        },
        {
            movie: "The Other Guys",
            genre: "Comedy",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/The Other Guys.jpg",
            landscape: "/Movie Images/Landscape/The Other Guys.jpg"
        },
        {
            movie: "Aliens",
            genre: "Sci-Fi",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Aliens.jpg",
            landscape: "/Movie Images/Landscape/Aliens.jpg"
        },
        {
            movie: "E.T. the Extra-Terrestrial",
            genre: "Sci-Fi",
            decade: "80's",
            portrait: "/Movie Images/Portrait/E.T. the Extra-Terrestrial.jpg",
            landscape: "/Movie Images/Landscape/E.T. the Extra-Terrestrial.jpg"
        },
        {
            movie: "The Empire Strikes Back",
            genre: "Sci-Fi",
            decade: "80's",
            portrait: "/Movie Images/Portrait/The Empire Strikes Back.jpg",
            landscape: "/Movie Images/Landscape/The Empire Strikes Back.jpg"
        },
        {
            movie: "Event Horizon",
            genre: "Sci-Fi",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Event Horizon.jpg",
            landscape: "/Movie Images/Landscape/Event Horizon.jpg"
        },
        {
            movie: "12 Monkeys",
            genre: "Sci-Fi",
            decade: "90's",
            portrait: "/Movie Images/Portrait/12 Monkeys.jpg",
            landscape: "/Movie Images/Landscape/12 Monkeys.jpg"
        },
        {
            movie: "Contact",
            genre: "Sci-Fi",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Contact.jpg",
            landscape: "/Movie Images/Landscape/Contact.jpg"
        },
        {
            movie: "Minority Report",
            genre: "Sci-Fi",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Minority Report.jpg",
            landscape: "/Movie Images/Landscape/Minority Report.jpg"
        },
        {
            movie: "Donnie Darko",
            genre: "Sci-Fi",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Donnie Darko.jpg",
            landscape: "/Movie Images/Landscape/Donnie Darko.jpg"
        },
        {
            movie: "Avatar",
            genre: "Sci-Fi",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Avatar.jpg",
            landscape: "/Movie Images/Landscape/Avatar.jpg"
        },
        {
            movie: "Prometheus",
            genre: "Sci-Fi",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Prometheus.jpg",
            landscape: "/Movie Images/Landscape/Prometheus.jpg"
        },
        {
            movie: "Interstellar",
            genre: "Sci-Fi",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Interstellar.jpg",
            landscape: "/Movie Images/Landscape/Interstellar.jpg"
        },
        {
            movie: "Edge of Tomorrow",
            genre: "Sci-Fi",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Edge of Tomorrow.jpg",
            landscape: "/Movie Images/Landscape/Edge of Tomorrow.jpg"
        },
        {
            movie: "Do the Right Thing",
            genre: "Drama",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Do the Right Thing.jpg",
            landscape: "/Movie Images/Landscape/Do the Right Thing.jpg"
        },
        {
            movie: "Rain Man",
            genre: "Drama",
            decade: "80's",
            portrait: "/Movie Images/Portrait/Rain Man.jpg",
            landscape: "/Movie Images/Landscape/Rain Man.jpg"
        },
        {
            movie: "The Breakfast Club",
            genre: "Drama",
            decade: "80's",
            portrait: "/Movie Images/Portrait/The Breakfast Club.jpg",
            landscape: "/Movie Images/Landscape/The Breakfast Club.jpg"
        },
        {
            movie: "Pulp Fiction",
            genre: "Drama",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Pulp Fiction.jpg",
            landscape: "/Movie Images/Landscape/Pulp Fiction.jpg"
        },
        {
            movie: "The Shawshank Redemption",
            genre: "Drama",
            decade: "90's",
            portrait: "/Movie Images/Portrait/The Shawshank Redemption.jpg",
            landscape: "/Movie Images/Landscape/The Shawshank Redemption.jpg"
        },
        {
            movie: "Titanic",
            genre: "Drama",
            decade: "90's",
            portrait: "/Movie Images/Portrait/Titanic.jpg",
            landscape: "/Movie Images/Landscape/Titanic.jpg"
        },
        {
            movie: "Remember the Titans",
            genre: "Drama",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Remember the Titans.jpg",
            landscape: "/Movie Images/Landscape/Remember the Titans.jpg"
        },
        {
            movie: "Crash",
            genre: "Drama",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Crash.jpg",
            landscape: "/Movie Images/Landscape/Crash.jpg"
        },
        {
            movie: "Million Dollar Baby",
            genre: "Drama",
            decade: "2000's",
            portrait: "/Movie Images/Portrait/Million Dollar Baby.jpg",
            landscape: "/Movie Images/Landscape/Million Dollar Baby.jpg"
        },
        {
            movie: "Black Swan",
            genre: "Drama",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Black Swan.jpg",
            landscape: "/Movie Images/Landscape/Black Swan.jpg"
        },
        {
            movie: "Gone Girl",
            genre: "Drama",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/Gone Girl.jpg",
            landscape: "/Movie Images/Landscape/Gone Girl.jpg"
        },
        {
            movie: "The Revenant",
            genre: "Drama",
            decade: "2010-Current",
            portrait: "/Movie Images/Portrait/The Revenant.jpg",
            landscape: "/Movie Images/Landscape/The Revenant.jpg"
        },
    
    ]

};

$(document).ready(appLogic);