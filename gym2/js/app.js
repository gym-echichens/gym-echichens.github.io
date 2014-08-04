define([
  'jquery',
  'underscore',
  'text!templates/home.html',
  'text!templates/newsContact.html',
  'text!templates/tariff.html',
  'text!templates/download.html',
  'text!templates/activity.html',
], function($,_, HomeTpl, NewsContactTpl, TariffTpl, DownloadTpl, ActivityTpl){
 
  var Gym = {

    HEIGHT: null,

    init: function(){

/*
      //init panels heights
      this.HEIGHT = window.innerHeight;

      if(this.HEIGHT > 1024){
         $('.panels').css("min-height",this.HEIGHT +'px');
      }
*/
     

      this.render();

      this.setMenuEvents();
    },


    setMenuEvents: function(){
      var self = this;


      //scroll animation
      $('.nav-menu').bind('click', function(e){
  
        var field = $(e.currentTarget);
        var lngId = field.attr('id');
        var id = lngId.substring(4,lngId.length);
        
        var position = $('#main #'+id).offset().top-30;

        $('html').animate({ scrollTop: position }, 500);
       
      });


      //set hover menu background
      $( window ).scroll(function() {

        var position = $(window).scrollTop() + 70;

        if(position < ($('#main #home').offset().top + $('#main #home').height())){
          $('.nav-menu').removeClass('nav-turquoise nav-yellow nav-red nav-green').addClass('nav-black');

        }else if (position < ($('#main #newsContact').offset().top + $('#main #newsContact').height())){
          $('.nav-menu').removeClass('nav-black nav-yellow nav-red nav-green').addClass('nav-turquoise');

        }else if (position < ($('#main #tariff').offset().top + $('#main #tariff').height())){
           $('.nav-menu').removeClass('nav-black nav-turquoise nav-red nav-green').addClass('nav-yellow');

        }else if (position < ($('#main #download').offset().top + $('#main #download').height())){
           $('.nav-menu').removeClass('nav-black nav-turquoise nav-yellow nav-green').addClass('nav-red');

        }else if (position < ($('#main #activity').offset().top + $('#main #activity').height())){
           $('.nav-menu').removeClass('nav-black nav-turquoise nav-yellow nav-red').addClass('nav-green');
        }

        
      });


    },

    render: function(){
      this.renderHome();
      this.renderNewsContact();
      this.renderTariff();
      this.renderDownload();
      this.renderActivity();
    },


    renderHome: function(){
      var dataTpl = {};
      var compiledTpl = _.template(HomeTpl, dataTpl);

      $('#home').html(compiledTpl);
    },


    renderNewsContact: function(){
      var dataTpl = {};
      var compiledTpl = _.template(NewsContactTpl, dataTpl);

      $('#newsContact').html(compiledTpl);
    },

    renderTariff: function(){
      var dataTpl = {};
      var compiledTpl = _.template(TariffTpl, dataTpl);

      $('#tariff').html(compiledTpl);
    },

    renderDownload: function(){
      var dataTpl = {};
      var compiledTpl = _.template(DownloadTpl, dataTpl);

      $('#download').html(compiledTpl);
    },

    renderActivity: function(){
      var dataTpl = {};
      var compiledTpl = _.template(ActivityTpl, dataTpl);

      $('#activity').html(compiledTpl);
    }


  };

  return Gym;


});



  /*
 

  */