$(document).ready(function() {
    TableInit();
    score();
    ArrowCapture();
});

// capturing arrow keys pressed
function ArrowCapture() {
    $(document).on("keydown", function(event) {
        var text = event.key;
        if (text == "ArrowUp")
            console.log("up");
        if (text == "ArrowDown")
            console.log("down");
        if (text == "ArrowLeft")
            console.log("left");
        if (text == "ArrowRight")
            console.log("right");
    });
}
//function to double the score if score added is equal to score already stored using keyboard keys
function score() {
    $(document).on("keypress", function(event) {
        key = event.key;
        score = $("#score").html();
        switch (key) {
            case "q":
                key = 16;
                break;
            case "w":
                key = 32;
                break;
            case "e":
                key = 64;
                break;
            case "r":
                key = 128;
                break;
            case "t":
                key = 256;
                break;
            case "y":
                key = 512;
                break;
            case "u":
                key = 1024;
                break;
            case "i":
                key = 2048;
                break;
            default:
        }
        if (score == 0 && key == 4)
            $("#score").html(key);
        else if (key == score) {
            key = +key + +score;
            $("#score").html(key);
        }
    });
}

function TableInit() {
    $("#btn").click(function() {
        $("td").empty().removeClass();
        $("#score").html(0);
        var rand1 = Math.floor(Math.random() * 16) //first random cell
        $("table").find("td").eq(rand1).text(2).addClass("twos"); // setting value "2" to first random cell
        var i = Math.floor(Math.random() * 9); // random for displaying "4" 10% of the time
        if (i == 0)
            val = 4;
        else
            val = 2;
        var rand2 = Math.floor(Math.random() * 16);
        while (rand1 == rand2) // to avoid rand1 and rand2 going to the same table cell
            rand2 = Math.floor(Math.random() * 16);
        if (val == 2)
            $("table").find("td").eq(rand2).text(val).addClass("twos"); //setting value and class "2" to 2nd random cell
        else
            $("table").find("td").eq(rand2).text(val).addClass("fours"); //setting value and class "4" to 2nd random cell
    });
}