$("html").removeClass();

$("video").bind("ended", function() {
   $("body").addClass('finished');
});

setTimeout(function() { $("body").addClass('finished'); }, 2000)