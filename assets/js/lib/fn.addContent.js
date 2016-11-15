$(function(){
	var config = {
		json: './assets/json/',
		template: './assets/templates/'
	};

	$.fn.add_content = function(json, tpl) {
		var _this = $(this);
		$.getJSON( config.json + json, function( data ) {
			$.get( config.template + tpl + '.tpl', function(templates) {
				_this.html(Mustache.render($(templates).filter('#' + tpl).html(), data));
			});
		});
	};
})