changes()
loadAudioFile('./Resources/BGM_TITLE_2021.wav',false);
$("#live2d").fadeTo(0, 0);
// $("#btn1").fadeTo(0, 0.2);
$("#input1").fadeTo(0, 0.2);
$("#live2d").fadeTo(2500, 1);
function changes() {
    limit = 4
    if (document.getElementById("input1").value >= limit)
        t = limit;
    else
        t = document.getElementById("input1").value;
    realChanges();
}
function realChanges() {
    document.getElementById("live2d").width = document.documentElement.clientWidth * t;
    document.getElementById("live2d").style.width = document.documentElement.clientWidth;
    document.getElementById("live2d").height = document.documentElement.clientHeight * t;
    document.getElementById("live2d").style.height = document.documentElement.clientHeight;
    $("#live2d").css("width", document.documentElement.clientWidth);
    $("#live2d").css("height", document.documentElement.clientHeight);
    // $("#live2d").fadeTo(0, 0);
    // $("#live2d").fadeTo(2500, 1);
}
$("#input1").change(function () {
    changes()
});
$(window).resize(function () {
    changes()
});
$("#input1").mouseenter(function () {
    $("#input1").fadeTo(500, 1);
});
// $("#btn").mouseenter(function () {
//     $("#btn").fadeTo(500, 1);
// });
$("#input1").mouseleave(function () {
    $("#input1").fadeTo(1000, 0.2);
});
// $("#btn").mouseleave(function () {
//     $("#btn").fadeTo(1000, 0.2);
// });