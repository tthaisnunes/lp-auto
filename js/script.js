$('#myTabs a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});

$('#carousel-2').carousel('pause');

$('#carousel-example-generic').carousel();
$("#carousel-example-generic").on("swipeleft",function(){
	$('.carousel').carousel('next');
});  
$("#carousel-example-generic").on("swiperight",function(){
	$('.carousel').carousel('prev');
});