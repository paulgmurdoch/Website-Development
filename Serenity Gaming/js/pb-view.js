/** * PB View JS * Front-end js for Page Builder blocks *//** Fire up jQuery - let's dance! */jQuery(document).ready(function($){	/** Tabs & Toggles	-------------------------------*/	// Tabs	if(jQuery().tabs) {		$(".block_tabs").tabs({			show: true		});	}	// Toggles	$('.block_toggle .tab-head, .block_toggle .arrow').each( function() {		var toggle = $(this).parent();		$(this).click(function() {			toggle.find('.tab-body').slideToggle();			return false;		});	});	// Accordion	 $(function() {    $( ".block_accordion_wrapper" ).accordion();    $('.ui-accordion-header').disableSelection();  });});