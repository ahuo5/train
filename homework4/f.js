$(".send").on("click", function () {
    var jqueryDom = createScreenbullet($("#content").val());
    addInterval(jqueryDom);
});
$(".clear").on("click", function () {
    $(".container").empty()
});
function createScreenbullet(text) {
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
    var fontSize = Math.floor((Math.random()* 30) + 15) + "px";
    var right = $(".container").width() + "px";
    var top = parseInt(Math.random() * parseInt($('.container').css('height')));
    top = parseInt(top) > 550 ? "550px" : top;
    jqueryDom.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "right": right,
        "top": top,
        "whiteSpace": 'nowrap',
        "display": 'block',
    });
    $(".container").append(jqueryDom);
    return jqueryDom;
}
function addInterval(jqueryDom) {
    things = [];
    var i = 0;
    var speed = Math.floor(Math.random() * 5) + 1;
    var right = jqueryDom.offset().right - $(".container").offset().right;
    var things = setInterval(function () {
        right--;
        jqueryDom.css("right", (i += speed)+ "px");
        if (jqueryDom.offset().right + jqueryDom.width() < $(".container").offset().right) {
            jqueryDom.remove();
            clearInterval(things);
        }
    }, 10);
    things.push(things);
}