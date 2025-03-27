jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		
		
		var getNoteid = $(this).attr('nid');
		var getType = $(this).attr('ntype');
		var getLevel = $(this).attr('nlevel');
		var proceed = true;
		
		
        if((getNoteid=="") || (getNoteid==" ")){ 
            proceed = false;
        }
           
		//loading
		if(getLevel){
			getpath = "";
		}else{
			getpath = "../";
		}
		
		data1 = "<div><img src='"+getpath+"images/loading.gif'></div>"
		$('.cd-panel-content').html(data1);	    
        
        if(proceed){
			
         $noteid = "note"+getNoteid;  

		
		$(function(){
			$(".cd-panel-content").load('../financial_statements/notes_to_the_consolidated_financial_statements.html #'+$noteid, function() {
        	$(this).html($(this).html().replace('button', 'span'));
			$(this).html($(this).html().replace('class="collapse" aria-expanded="false"', 'class="" aria-expanded="false"'));
    }); 
});
			
			
			
			
		}
		
		
		$('.cd-panel').addClass('is-visible');
	});
	
	//close the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	
	/*******  Custom scripts ******/


	
	
});



//detect iPhone 6

function iPhoneVersion() {
  var iHeight = window.screen.height;
  var iWidth = window.screen.width;
  if (iWidth === 320 && iHeight === 480) {
    return "4";
  }
  else if (iWidth === 375 && iHeight === 667) {
    return "6";
  }
  else if (iWidth === 414 && iHeight === 736) {
    return "6+";
  }
  else if (iWidth === 320 && iHeight === 568) {
    return "5";
  }
  else if (iHeight <= 480) {
    return "2-3";
  }
  return 'none';
}


var p = document.getElementsByClassName("os1");
var q = document.getElementsByClassName("os2");

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS && iPhoneVersion() === "6") {
    var i;
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "none";
	q[i].style.display = "inline-block";
}} else {
    var i;
  for (i = 0; i < q.length; i++) {
    p[i].style.display = "inline-block";
	q[i].style.display = "none";
	  
}
}



// image loder 


// const images = document.querySelectorAll('[data-src]');
// const config = {
//   rootMargin: '-50px 0px -55% 0px',
//   threshold: 0.5
// };

// let loaded = 0;

// let observer = new IntersectionObserver(function (entries, self) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // console.log(`Image ${entry.target.src} is in the viewport!`);
//       preloadImage(entry.target);
//       // Stop watching and load the image
//       self.unobserve(entry.target);
//     }
//   });
// });

// images.forEach(image => {
//   observer.observe(image);
// });

// function preloadImage(object) {
//   const data = object.getAttribute('data-src');
//   if (!data) { return; }
//   object.data = data;
	

//  _updateMonitoring();
// }





