$(document).ready(function(){
	
	console.log("Document is ready");

	$('button').on('click', function(){

		$('.element').addClass('active');

		setTimeout(function(){
			$('.element').removeClass('active');
		}, 5000)
	});

});