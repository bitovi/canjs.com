var extend = function(d, s){
	for(var prop in s) {
		d[prop] = s[prop];
	}
	return d;
};


module.exports = function(existingTags){
	var tags = extend({}, existingTags);
	
	return extend(tags,{
		returns: existingTags["return"],
		params: existingTags.param
	});
};
