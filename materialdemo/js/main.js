$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	 	
	 	$('.modal-trigger').leanModal();
	 	//Delayed pop-up
	
	function hi () {
		Materialize.toast('Hi, I&apos;m Claire!', 5000);	  
	};
	function Welcome () {
		Materialize.toast('The Ai Regi', 5000);	  
	};
	
	setTimeout(hi,2000);
	setTimeout(Welcome,5000);
});
