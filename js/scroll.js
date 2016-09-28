$(document).ready(function(){
	/*using animate function*/
	/*$(".container:nth-child(1) .text1").delay(500).animate( {
			left:200,
			opacity: 1
		},500);

		$(".container:nth-child(1) .text2").delay(500).animate( {
			right:200,
			opacity: 1
		},500);

	$(document).on("scroll",function(){	
		if($(window).scrollTop() > 100){			
			$(".container:nth-child(2) .text1").delay(500).animate( {
				left:200,
				opacity: 1
			},500);

			$(".container:nth-child(2) .text2").delay(500).animate( {
				right:200,
				opacity: 1
			},500);
		}

		if($(window).scrollTop() > 600){			
			$(".container:nth-child(3) .text1").delay(500).animate( {
				left:200,
				opacity: 1
			},500);

			$(".container:nth-child(3) .text2").delay(500).animate( {
				right:200,
				opacity: 1
			},500);
		}
	});*/

	/*using addClass function*/

	$(".container:nth-child(1) .text1").delay(500).animate( {
			left:200,
			opacity: 1
		},500);

	$(".container:nth-child(1) .text2").delay(500).animate( {
		right:200,
		opacity: 1
	},500);

	$(document).on("scroll",function(){	
		if($(window).scrollTop() > 100){			
			$(".container:nth-child(2) .text1").delay(500).addClass("section2T1");
			$(".container:nth-child(2) .text2").delay(500).addClass("section2T2");
		}
		else{
			$(".container:nth-child(2) .text1").delay(500).removeClass("section2T1");
			$(".container:nth-child(2) .text2").delay(500).removeClass("section2T2");
		
		}
		if($(window).scrollTop() > 600){			
			$(".container:nth-child(3) .text1").delay(500).addClass("section3T1");
			$(".container:nth-child(3) .text2").delay(500).addClass("section3T2");
		}
		else{
			$(".container:nth-child(3) .text1").delay(500).removeClass("section3T1");
			$(".container:nth-child(3) .text2").delay(500).removeClass("section3T2");
		}
	});	
}); 