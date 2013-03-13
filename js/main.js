// DOM Ready
$(function() {

	var $el, $ps, $up, totalHeight;
	
	$(".read-more").click(function() {
		// IE 7 doesn't even get this far. I didn't feel like dicking with it.
		totalHeight = 0
	
		$el = $(this);
		$p  = $el.parent();
		$up = $p.parent();
		$ps = $up.find(".description");

		// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
		$ps.each(function() {
			totalHeight += $(this).outerHeight();
		});

		$p.css({"max-height" : 9999});			
		$up
			.css({
				// Set height to prevent instant jumpdown when max height is removed
				"height": $up.height(),
			})
			.animate({
				"height": totalHeight
			});
		
		$el.remove();
		
		$p.append('<a href="#" class="close-more"> close </a>').click(function() {
  	  console.log("here");
  	  $el = $(this);
  		$p  = $el.parent().find(".description");
  		$up = $p.parent();
  		console.log($p);
  		$p.css({"max-height" : "4.5em", "height" : "4.5em"});
  		$up.animate({"height" : "4.5em"});
  		return false;
  	});
		// prevent jump-down
		return false;
	});
});