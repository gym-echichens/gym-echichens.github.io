require.config({


  urlArgs: "v=" + (new Date()).getTime(),
  //urlArgs: "v=1.0.0",

  shim: {
    'bootstrap':{
    	   deps: ['jquery'],
    	   exports: 'Bootstrap'
    },
    'underscore': {
        exports: '_'
    }
  },
   
   paths: {
      jquery: 'libs/jquery-min',
      underscore: 'libs/underscore-min',
      bootstrap: 'libs/bootstrap-min',
      galleria: 'libs/galleria-min',
      templates: '../templates',
      text: 'libs/text'
   }
});

require([
  'app'
], function(Gym){


	//initilize main app
   var gym = Gym;
   gym.init();

});