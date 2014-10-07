module.exports = function(docMap, options, getCurrent){
	return {
		navToApi: function(){
			if(options.parent === "canjs") {
				return "<li class='active'><a href='index.html'>api</a></li>";
			} else if(options.parent === "guides") {
				return "<li><a href='../docs/index.html'>api</a></li>";
			} else {
				return "<li><a href='docs/index.html'>api</a></li>";
			}
		},
		navToGuides: function(){
			if(options.parent === "guides") {
				return "<li class='active'><a href='index.html'>guides</a></li>";
			} else if(options.parent === "canjs") {
				return "<li><a href='../guides/index.html'>guides</a></li>";
			} else {
				return "<li><a href='guides/index.html'>guides</a></li>";
			}
		},
		pageType: function(){
			return getCurrent().type === "template" ? getCurrent().name : ""
		}
	};
};
