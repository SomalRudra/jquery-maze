
let isStartedMaze = false;

$(function () {

    setupMazeGame();

});

function setupMazeGame() {
    $("#start").on('click mouseenter', function () {
        setBoundaryEvents();
        setEndOptionEvents();
        //alert("start");
    });

}

function setBoundaryEvents() {
    $("div.boundary").mouseenter(function () {
        $("div.boundary").addClass("redback");
        $("#boundary1").text("Loser...");
        $("div.boundary").animate({
            "background-color": "red",
            "color": "#fff",
            "font-size": '32px',
            "font-weight": 'bold'
        },
            1000,
            function () {
                if (isStartedMaze === true) {
                    alert("Winner......");
                    console.log("Winner....");
                }
                resetElementsAndValues();
            });
    });
}

function setEndOptionEvents() {
    $("#end").mouseenter(function () {
        console.log('end entered');
        $("div.boundary").addClass("greenback");
        $("#boundary1").text("Winner!!!");
        $("div.boundary").animate(
            {
                "background-color": "green",
                "color": "#fff",
                "font-size": '32px',
                "font-weight": 'bold'
            },
            1000,
            // This function is the complete callback
            function () {
                if (isStartedMaze === true) {
                    alert("Winner......");
                    console.log("Winner....");
                }
                resetElementsAndValues();
            });
    });
}

function resetElementsAndValues() {
    isStartedMaze = false;

    //reset background
    $("div.boundary")
        .removeClass("redback")
        .removeClass("greenback");

    //remove message 
    $("#boundary1").text("");

    //reset event handlers 
    $("div.boundary").off("mouseenter");
    $("#end").off("mouseenter");
}