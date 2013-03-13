// DOM Ready
$(function() {
	
	$(".read-more").click(function() {
	  var $el, $ps, $up, totalHeight;
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
			}, function() {
			  $el.css({"display" : "none"});
			});
		$ps.find(".close-more").css({"display":"inline"});
		// prevent jump-down
		return false;
	});
	
	$(".close-more").click(function() {
	  var $el, $ps, $up, totalHeight;
  	$el = $(this);
  	$p  = $el.parent()
  	$up = $p.parent();
  	$p.css({"max-height" : 40, "height" : "auto"});
  	$up.animate({"height" : "auto"});
  	$p.find(".read-more").css({"display" : "inline"});
  	$el.css({"display" : "none"});
  	return false;
  });
});