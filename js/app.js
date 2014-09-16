define([
  'jquery',
  'underscore',
  'galleria',
  'text!templates/home.html',
  'text!templates/tariff.html',
  'text!templates/download.html',
  'text!templates/activity.html',
  'text!templates/pic.html',
], function($,_, Galleria, HomeTpl, TariffTpl, DownloadTpl, ActivityTpl, PicTpl){
 
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


      var self = this;
      $(window).scroll(function(e) {
        var pos = $(this).scrollTop();

          if(pos >= 0 && pos<= 20){
            $('#logo-gym').css({ opacity: 1 });
          }else if(pos > 20 && pos <= 40){
            $('#logo-gym').css({ opacity: 0.9 });
          }else if(pos > 40 && pos<= 60){
            $('#logo-gym').css({ opacity: 0.8 });
          }else if(pos > 60 && pos<= 80){
            $('#logo-gym').css({ opacity: 0.7 });
          }else if(pos > 80 && pos<= 100){
            $('#logo-gym').css({ opacity: 0.6 });
          }else if(pos > 100 && pos<= 120){
            $('#logo-gym').css({ opacity: 0.5 });
          }else if(pos > 120 && pos<= 140){
            $('#logo-gym').css({ opacity: 0.4 });
          }else if(pos > 140 && pos<= 160){
            $('#logo-gym').css({ opacity: 0.3 });
          }else if(pos > 160 && pos<= 180){
            $('#logo-gym').css({ opacity: 0.2 });
          }else if(pos > 180 && pos<= 200){
            $('#logo-gym').css({ opacity: 0.1 });
          }else{
            $('#logo-gym').css({ opacity: 0 });
          }
           
          $('#logo-gym').css({ top: (pos+10)+'px' });
        
        
      });

      $(window).scroll();

      this.render();

    },


    setMenuEvents: function(){
      var self = this;

      //scroll animation
      $('.nav-menu').bind('click', function(e){
  
        var field = $(e.currentTarget);
        var lngId = field.attr('id');
        var id = lngId.substring(4,lngId.length);
        
        var position = $('#main #'+id).offset().top-30;

        $('body,html').animate({ scrollTop: position }, 500);
       
      });


      //set hover menu background
      $( window ).scroll(function() {

        var position = $(window).scrollTop() + 70;

        if(position < ($('#main #home').offset().top + $('#main #home').height())){
          $('.nav-menu').removeClass('nav-yellow nav-red nav-green nav-violet').addClass('nav-turquoise');

        }else if (position < ($('#main #tariff').offset().top + $('#main #tariff').height())){
           $('.nav-menu').removeClass('nav-turquoise nav-red nav-green nav-violet').addClass('nav-yellow');

        }else if (position < ($('#main #download').offset().top + $('#main #download').height())){
           $('.nav-menu').removeClass('nav-turquoise nav-yellow nav-green nav-violet').addClass('nav-red');

        }else if (position < ($('#main #activity').offset().top + $('#main #activity').height())){
           $('.nav-menu').removeClass('nav-turquoise nav-yellow nav-red nav-violet').addClass('nav-green');
        }
        else if (position < ($('#main #pic').offset().top + $('#main #pic').height())){
           $('.nav-menu').removeClass('nav-turquoise nav-yellow nav-red nav-green').addClass('nav-violet');
        }

        
      });

      $(window).scroll();


    },

    render: function(){
      this.renderHome();
      this.renderTariff();
      this.renderDownload();
      this.renderActivity();
      this.renderPic();

      this.setMenuEvents();
    },


    renderHome: function(){
      var dataTpl = {};
      var compiledTpl = _.template(HomeTpl, dataTpl);

      $('#home').html(compiledTpl);
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
    },

    renderPic: function(){
      var dataTpl = {};
      var compiledTpl = _.template(PicTpl, dataTpl);

      $('#pic').html(compiledTpl);

      Galleria.loadTheme('./js/libs/themes/classic/galleria.classic.min.js');
      Galleria.configure({
        responsive: true,
        showInfo: false
      });
      Galleria.run('.galleria');
     
    }


  };

  return Gym;


});



  /*
 

  */