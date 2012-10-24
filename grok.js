if (!($ = window.jQuery)) { //loading jQuery if it doesn't exist already
    script = document.createElement( 'script' );
   	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload=imageGrok;
    document.body.appendChild(script);
}
else {  
    imageGrok();
} 
function imageGrok() {  
	$(document).ready(function(){
	// checking to see if the bookmarklet has been activated already
    	if($('#iG-container').length == 0) {
	    	$('html, body').animate({scrollTop:0}, 'fast');
		// Set this to the css file you'd like to use, feel free to edit the one here
	    	$('<style type="text/css">@import url(http://path/to/your/css);</style>').appendTo("head");
	    	$('body').append('<div id="background-blocker"></div><div id="iG-container"><div id="iG-close"><span id="close">Close</span></div><ul id="iG-list"></ul></div>');
	    	$("#iG-close").click(function() {
				$("#iG-container, #background-blocker").remove();
			});
		 	var iG = [];
	    	$('img').each(function() {
					// somewhat arbitrary numbers, just trying to keep the super small images out of the feed
					// I've also removed .gifs from the result
					if (this.clientWidth > 99 && this.clientHeight > 49 && this.src.indexOf('.gif') < 0){
						iG.push(this);
					}
			});
			var iGFrameImgs = $('iframe').contents().find('img');
			if (iGFrameImgs.length > 0) {
				$.each(iGFrameImgs, function(){
					if (this.clientWidth > 99 && this.clientHeight > 49 && this.src.indexOf('.gif') < 0){
						iG.push(this);
					}
				});
			}
			$.each(iG, function(){
				if (this.clientWidth > this.clientHeight){
					bgSize = "background-size:auto 100%;";
				}
				else {
					bgSize = "background-size:100%;";
				}
	
				finalLink = "<li style='background:url("+this.src+") center center no-repeat;"+bgSize+"'><a href='"+this.src+"'><span>+</span></a>";
				$('#iG-list').append(finalLink);
			});
			$('#iG-list a').click(function(e){
				e.preventDefault();
				// in my application I use the selected image URL as an argument and pop open the corresponding link in a new window
				iGlink = "http://path/to/your/app"+this.href;
				window.open(iGlink,'popup','width=600,height=340');
			});
	    }
	});
}; 

