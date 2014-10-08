'use strict';

(function() {
	var Movie = {
		init: function( config ) {
			this.url = 'http://www.omdbapi.com/?i=&t='+config.title;
			this.template = config.template;
			this.container = config.container;
			this.fetch();

			
		},
		attachTemplate: function(data){
			 var template = Handlebars.compile(this.template );
			 var html = template(data);

			 this.container.append(html);
		},
		fetch: function(){
			var self = this;

			$.getJSON(this.url, function(data){

				self.attachTemplate(data);
									
			});

		}
	};

			
	$( ".form-search" ).submit(function( event ) {
			
			
	  		Movie.init({
				template: $('#movie_template').html(),
				container: $('#container'),
				title: $('#searchformhome').val()
			});
		
	  		event.preventDefault();
	});
	
})();

