
// le script se lancera lorsque tous les elements de la page seront charges


jQuery(document).ready(function($){



// fixe les faders sur l'axe vertical y, et limite leur deplacement au containere virtuel 'container1'
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

//$(".fader1, .fader2, .fader3, .fader4").draggable({axis: "y"},{containment:$("#Container1")});
//Troncon qui detecte au clic sur les objet du menu de gauche si ils sont deja visible ou non
//Si ils sont visible le script les caches, si ils sont cache le script les rend visible.
	
	$("#BlocTexte").hide();
	$(".LED1").hide();
	$(".LED2").hide();
	$(".LED3").hide();
	$(".LED4").hide();
	$("#BlocTexte2").hide();
	$(".TexteSynopsis").hide();
	$(".TexteServices").hide();
	$(".TexteContacts").hide();
	

	$('#mention').hide();	

	$('.button').click(function(){
		if ($('#mention').is(':visible')) {
			$('#mention').hide();
		}
		else {
			$('#mention').fadeIn();
		}
	});
	$("#BlocTexte .fermer .croixrouge").click( function() { 		
		$(".LED1").hide();
		$(".LED2").hide();
		$(".LED3").hide();
		$(".LED4").hide();
		$("#BlocTexte").hide();
		$(".categorie2").hide();
		$(".categorie1").hide();
		$(".categorie3").hide();
		$(".categorie4").hide();
	});  

	$("#etiquette1, #etiquette5").click(function(){

		if ($('#BlocTexte .categorie1').is(':visible')) {

			$("#BlocTexte").fadeOut();
			$(".categorie1").fadeOut();
			$(".categorie2").fadeOut();
			$(".categorie3").fadeOut();
			$(".categorie4").fadeOut();
			$(".LED1").fadeOut();
		}	
		else {

			$("#Container1 .fader1").animate({
				 top: '0%'
			}, 1200).delay(800);
			setTimeout(function(){
			$(".LED1").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie1").fadeIn();
			$(".categorie2").hide();
			$(".categorie3").hide();
			$(".categorie4").hide();
			$(".LED2").fadeOut();
			$(".LED3").fadeOut();
			$(".LED4").fadeOut();
			}, 800);
		}

	});	

	$("#etiquette2, #etiquette6").click(function(){

		if ($('#BlocTexte .categorie2').is(':visible')) {

			$("#BlocTexte").fadeOut();
			$(".categorie2").fadeOut();
			$(".categorie1").fadeOut();
			$(".categorie3").fadeOut();
			$(".categorie4").fadeOut();
			$(".LED2").fadeOut();
		}
		else {
			$("#Container1 .fader2").animate({
				 top: '0%'
			}, 1200).delay(800);
			setTimeout(function(){
			$(".LED2").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie2").fadeIn();
			$(".categorie1").hide();
			$(".categorie3").hide();
			$(".categorie4").hide();
			$(".LED1").fadeOut();
			$(".LED3").fadeOut();
			$(".LED4").fadeOut();
			}, 800);
		}

	});	

	$("#etiquette3, #etiquette7").click(function(){

		if ($('#BlocTexte .categorie3').is(':visible')) {

			$(".LED3").fadeOut();
			$("#BlocTexte").fadeOut();
			$(".categorie3").fadeOut();
			$(".categorie2").fadeOut();
			$(".categorie1").fadeOut();
			$(".categorie4").fadeOut();
		}			
		else {
			$("#Container1 .fader3").animate({
				 top: '0%'
			}, 1200).delay(800);
			setTimeout(function(){
			$(".LED3").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie3").fadeIn();
			$(".categorie2").hide();
			$(".categorie1").hide();
			$(".categorie4").hide();
			$(".LED2").fadeOut();
			$(".LED1").fadeOut();
			$(".LED4").fadeOut();
			}, 800);
		}

	});	

	$("#etiquette4, #etiquette8").click(function(){

		if ($('#BlocTexte .categorie4').is(':visible')) {

			$(".LED4").fadeOut();
			$("#BlocTexte").hide();
			$(".categorie4").hide();
			$(".categorie2").hide();
			$(".categorie3").hide();
			$(".categorie1").hide();
		}
		else {
			$("#Container1 .fader4").animate({
				 top: '0%'
			}, 1200).delay(800);
			setTimeout(function(){

			
			$(".LED4").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie4").fadeIn();
			$(".categorie2").hide();
			$(".categorie3").hide();
			$(".categorie1").hide();
			$(".LED2").fadeOut();
			$(".LED3").fadeOut();
			$(".LED1").fadeOut();	
			}, 800);	
		}

	});	

	
	$("#Container1 .fader1").click( function() { 

			$("#Container1 .fader1").animate({
				 top: '0%'
			}, 1200).delay(800)
			setTimeout(function(){
			$(".LED1").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie2").hide();
			$(".categorie1").fadeIn();
			$(".categorie3").hide();
			$(".categorie4").hide();
			}, 800);


	});  

	$("#Container1 .fader2").click( function() { 

			$("#Container1 .fader2").animate({
				 top: '0%'
			}, 1200).delay(800)
			setTimeout(function(){
			$(".LED2").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie2").fadeIn();
			$(".categorie1").hide();
			$(".categorie3").hide();
			$(".categorie4").hide();
			}, 800);


	});  

	$("#Container1 .fader3").click( function() { 

			$("#Container1 .fader3").animate({
				 top: '0%'
			}, 1200).delay(800)
			setTimeout(function(){
			$(".LED3").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie2").hide();
			$(".categorie1").hide();
			$(".categorie3").fadeIn();
			$(".categorie4").hide();
			}, 800);


	});  

	$("#Container1 .fader4").click( function() { 

			$("#Container1 .fader4").animate({
				 top: '0%'
			}, 1200).delay(800)
			setTimeout(function(){
			$(".LED4").fadeIn();
			$("#BlocTexte").fadeIn();
			$(".categorie2").hide();
			$(".categorie1").hide();
			$(".categorie3").hide();
			$(".categorie4").fadeIn();
			}, 800);

	});  

	$(".etiquette").click(function(){
		$("#Container1 .fader1, #Container1 .fader2, #Container1 .fader3, #Container1 .fader4").animate({
				 top: '75%'
			});
	});



// Code programme responsive 

	$("#Synopsis").click(function(){
		if ($("#BlocTexte2 .TexteSynopsis").is(':visible')) {

			$("#BlocTexte2").hide();
			$(".TexteSynopsis").hide();
		}
		else {
			$("#BlocTexte2").show();
			$(".TexteSynopsis").show();
			$(".TexteContacts").hide();
			$(".TexteServices").hide();
		}
	});
	$("#Services").click(function(){
		if ($("#BlocTexte2  .TexteServices").is(':visible')) {

			$("#BlocTexte2").hide();
			$(".TexteServices").hide();
		}
		else {
			$("#BlocTexte2").show();
			$(".TexteSynopsis").hide();
			$(".TexteContacts").hide();
			$(".TexteServices").show();
		}
	});
	$("#Contacts").click(function(){
		if ($("#BlocTexte2 .TexteContacts").is(':visible')) {

			$("#BlocTexte2").hide();
			$(".TexteContacts").hide();
		}
		else {
			$("#BlocTexte2").show();
			$(".TexteSynopsis").hide();
			$(".TexteContacts").show();
			$(".TexteServices").hide();
		}
	});


          
});
$(document).ready(function(){
  
// We need to turn it into a function.
// To apply the changes both on document ready and when we resize the browser.
  
var ravenous = function() { 

// Set the matchMedia

if (window.matchMedia('(max-width: 720px)').matches)
{
  
// Changes when we reach the max-width
  

$('#BlocTexte, .LED').css('opacity', '0');
$("#BlocTexte2").show();
$(".TexteContacts").show();


} else {

// Reset for CSS changes - Still need a better way to do this!
  
$('#BlocTexte, .LED').css('opacity', '1')
$("#BlocTexte2").hide();
$(".TexteContacts").hide();
}
};
  // Set the function to resize
  $(window).resize(ravenous);
  // Call the function
  ravenous();  
});