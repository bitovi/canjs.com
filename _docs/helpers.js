can.Mustache.registerHelper('makeTypesString', function(types) {
	if(types.length) {
		// turns [{type: 'Object'}, {type: 'String'}] into '{Object | String}'
		return '{' + types.map(function(t) { return t.type; }).join(' | ') + '}';
	} else {
		return '';
	}
});

can.Mustache.registerHelper('listOptions', function(types, options) {
	var out = [];
	types.forEach(function(type) {
		type.options.forEach(function(option) {
			out.push(options.fn(option)); 
		});
	});

	return out.join('');
});

can.Mustache.registerHelper('contentList', function(page) {
	var out = [];

	page.signatures.forEach(function(sig) {
		out.push(options.fn({text: sig.code, where: sig.code + '%0A%09%09%0A%09'}));
	});

	if(page.body.length) {
		var h2Find = /<h2>(.*?)<\/h2>/g,
			matches;
		while((matches = h2Find.exec(page.body)) !== null) {
			out.push(options.fn({text: matches[1], where: matches[1].replace(/ /g, '+')}));
		}
	}

	return out.join('');
});

can.Mustache.registerHelper('makeHref', function(name) {
	// I expect there will be some kind of predictable scheme
	// like pages being at //docs/name.html. At least I hope.
	// A flat scheme would make this tons easier. So:
	// TODO: talk with David and see how this actually works.
	return './' + name + '.html';
});