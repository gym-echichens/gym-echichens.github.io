var gym = {

	dico:null,

	init: function(){
		this.getDico();		
		this.getTpl('templates/frameTpl.html', 'frame');
	},
	
	
	/*-------------- REQUESTS ---------------*/
	getDico: function(){
		var self = this;
		$.ajax({
			type: "GET",
			dataType: "json",
			url:"json/jsonDico.txt",
			success: function(data){    
				self.dico = data;
				self.renderBubble();
			},
			error: function (xhr, ajaxOptions, thrownError) {
			   console.log(xhr);
			   console.log(ajaxOptions);
			   console.log(thrownError);
			}
		});
      },


    getTpl: function(xUrl, type){
      	var self = this;
		$.ajax({
			type: "GET",
			dataType: "text",
			async: false,
			url:xUrl,
			success: function(data){    
				switch(type)
				{
				case 'frame':
				  self.renderBubble(data);
				  break;
				case 'activities':
				  self.renderActivity(data);
				  break;
				case 'history':
				  self.renderHistory(data);
				  break;
				case 'contact':
				  self.renderContact(data);
				  break;
				case 'download':
				  self.renderDownload(data);
				  break;
				case 'tariff':
				  self.renderTariff(data);
				  break;
				default:
				  //do nothing
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
			   console.log(xhr);
			   console.log(ajaxOptions);
			   console.log(thrownError);
			}
		});
    },


    /*-------------- INIT FUNCTIONS ---------------*/
	renderBubble: function(data){

        $('#main-box').html(data);

        this.getTpl('templates/historyTpl.html', 'history');
        this.getTpl('templates/tariffTpl.html', 'tariff');
        this.getTpl('templates/downloadTpl.html', 'download');
        this.getTpl('templates/contactTpl.html', 'contact');
        this.getTpl('templates/activitiesTpl.html', 'activities');


//		this.loadBackground();
		
         
	},

	
	renderHistory: function(data){
		var dataTpl = {dico: this.dico.history};
        var compiledTpl = _.template(data, dataTpl);
        $('#history-box').html(compiledTpl);
		
	},

	renderTariff: function(data){
		var dataTpl = {dico: this.dico.tariff};
        var compiledTpl = _.template(data, dataTpl);
        $('#tariff-box').html(compiledTpl);
	},

	renderDownload: function(data){
		var dataTpl = {dico: this.dico.download};
        var compiledTpl = _.template(data, dataTpl);
        $('#download-box').html(compiledTpl);
	},

	renderContact: function(data){
		var dataTpl = {dico: this.dico.contact};
        var compiledTpl = _.template(data, dataTpl);
        $('#contact-box').html(compiledTpl);
	},

	renderActivity: function(data){
		var dataTpl = {dico: this.dico.activity};
        var compiledTpl = _.template(data, dataTpl);
        $('#activity-box').html(compiledTpl);
	},


/*
	loadBackground: function(){

		var winHeight = $('footer').position().bottom;

	   	var createBubble =  setInterval(function() {
	   		if($('bubble-white').length < 50){
	   			for(var i = 0; i < 10; i++){
					var dia = Math.floor((Math.random()*100)+1); 
					var left = Math.floor((Math.random()*100)+1); 
					var timer = Math.floor((Math.random()*100000)+10); 

					var div = document.createElement("div");
					div.setAttribute("class", "bubble-white");
					div.style.position = 'absolute';
					div.style.width = dia+"px";
					div.style.height = dia+"px";
					div.style.left = left+"%";
					div.style.bottom = (-winHeight-100)+"px";

					$('body').append(div);

					$(div).animate({ top: "-100px" }, timer , "linear", function() {
						$(this).remove();
					});

				}
	   		}
	       
	    }, 4000);

	}

//*/

}