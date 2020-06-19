var timers = [];
var isShow = true;
$(".send").on("click", function () {
    var jqueryDom = createScreenbullet($("#content").val());
    addInterval(jqueryDom);
});
$(".clear").on("click", function () {
    if (isShow) {
        $(".bullet").css("opacity", 0);
        isShow = false;
    } else {
        $(".bullet").css("opacity", 1);
        isShow = true;
    }   
});
function createScreenbullet(text) {
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
    var fontSize = Math.floor((Math.random()* 20) + 15) + "px";
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
    var i = 0;
    var speed = Math.floor(Math.random() * 5) + 1;
    var right = jqueryDom.offset().right - $(".container").offset().right;
    var timer = setInterval(function () {
        right--;
        jqueryDom.css("right", (i += speed)+ "px");
        if (jqueryDom.offset().right + jqueryDom.width() < $(".container").offset().right) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}