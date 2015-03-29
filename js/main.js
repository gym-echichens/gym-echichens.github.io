require.config({


  urlArgs: "v=" + (new Date()).getTime(),
  //urlArgs: "v=1.0.0",

  shim: {
    'bootstrap':{
    	   deps: ['jquery'],
    	   exports: 'Bootstrap'
    },
    'slider':{
         deps: ['jquery'],
         exports: 'Slider'
    },
    'underscore': {
        exports: '_'
    }
  },
   
   paths: {
      jquery: 'libs/jquery-min',
      underscore: 'libs/underscore-min',
      bootstrap: 'libs/bootstrap-min',
      templates: '../templates',
      text: 'libs/text',
      slider:'libs/flux-slider-min'
   }
});

require([
  'app'
], function(Gym){


	//initilize main app
   var gym = Gym;
   gym.init();

});