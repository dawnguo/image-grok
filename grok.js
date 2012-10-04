if (!($ = window.jQuery)) {   
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
    	if($('#image-grabber-container').length == 0) {
	    	$('html, body').animate({scrollTop:0}, 'fast');
	    	$('<style type="text/css">@import url(https://www.filepicker.io/api/file/Q-EIrdPsTHqdGDkf5TgB);</style>').appendTo("head");
	    	$('body').append('<div id="background-blocker"></div><div id="image-grabber-container"><div id="button-toggle"><span id="close">Close</span></div><ul id="list-of-images"></ul></div>');
	    	$("#button-toggle").click(function() {
				$("#image-grabber-container, #background-blocker").remove();
			})
		 	var iG = []
	    	$('img').each(function() {
					if (this.clientWidth > 99 && this.clientHeight > 49 && this.src.indexOf('.gif') < 0){
						iG.push(this)
					}
			});
	    	console.log(iG.length)

	    	var beginLiTag = "<li><a href='";
			var endATag = "'>";
			var beginImageTag = "<img src='";
			var middleImageTag = "' style='margin-top:";
			var endImageTag = "px'>";
			var endLiTag = "</a></li>";


			$.each(iG, function(){
				if (this.clientWidth > this.clientHeight){
					bgSize = "background-size:auto 100%;"
				}
				else {
					bgSize = "background-size:100%;"
				}
				finalLink = "<li style='background:url("+this.src+") center center no-repeat;"+bgSize+"'><a href='http://google.com'><span>text here?</span></a>"
				$('#list-of-images').append(finalLink);
			})
			
	    }
	});
};  

