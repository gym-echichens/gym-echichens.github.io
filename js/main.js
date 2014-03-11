var gym = {

	dico:null,

	init: function(){
		this.getDico();		
	},

	/*------------- HTML -------------*/
	frameHTML: 		'<div id="frame">'+
						'<div class="row margin">'+
							'<div id="history-box" class="col-md-6"></div>'+
							'<div id="tariff-box" class="col-md-6"></div>'+
						'</div>'+
						'<div class="row margin">'+
							'<div id="download-box" class="col-md-6"></div>'+
							'<div id="contact-box" class="col-md-6"></div>'+
						'</div>'+
						'<div class="row margin">'+
							'<div id="activity-box"></div>'+
						'</div>'+
					'</div>',
	
	historyHTML: 	'<div class="box-center">'+
						'<div class="bubble-topic el-center">'+
							'<div class="bubble-title box-center">'+
								'<div class="bubble-title-bottom el-center turquoise-bkg"></div>'+
								'<div class="bubble-title-top el-center">'+
									'<div class="title-theme"><%= dico.title %></div>'+
								'</div>'+
							'</div>'+
							'<div class="topic-txt-center">'+
								'<div><%= dico.paraph1 %>'+
								'<div class="bold paraph">'+
									'<%= dico.person1 %><br />'+
									'<%= dico.person2 %><br />'+
									'<%= dico.person3 %>'+
								'</div>'+
								'<div><%= dico.paraph2 %></div>'+
							'</div>'+
						'</div>'+
					'</div>',
	
	tariffHTML: 	'<div class="box-center">'+
						'<div class="bubble-topic el-center">'+
							'<div class="bubble-title box-center">'+
								'<div class="bubble-title-bottom el-center yellow-bkg"></div>'+
								'<div class="bubble-title-top el-center">'+
									'<div class="title-theme"><%= dico.title %></div>'+
								'</div>'+
							'</div>'+
							'<div class="topic-txt">'+
								'<div><%= dico.activity1.txt %><span class="right"><%= dico.activity1.cost %></span></div>'+
								'<div><%= dico.activity2.txt %><span class="right"><%= dico.activity2.cost %></span></div>'+
								'<div><%= dico.activity3.txt %><span class="right"><%= dico.activity3.cost %></span></div>'+
								'<div><%= dico.activity4.txt %><span class="right"><%= dico.activity4.cost %></span></div>'+
								'<div><%= dico.activity5.txt %><span class="right"><%= dico.activity5.cost %></span></div>'+
								'<div><%= dico.activity6.txt %><span class="right"><%= dico.activity6.cost %></span></div>'+
								'<div><%= dico.activity7.txt %><span class="right"><%= dico.activity7.cost %></span></div> <br />'+
								'<div><%= dico.fee.txt %><span class="right"><%= dico.fee.cost %></span></div>'+
							'</div>'+
						'</div>'+
					'</div>',
	
	downloadHTML: 	'<div class="box-center">'+
						'<div class="bubble-topic el-center">'+
							'<div class="bubble-title box-center">'+
								'<div class="bubble-title-bottom el-center orange-bkg"></div>'+
								'<div class="bubble-title-top el-center">'+
									'<div class="title-theme"><%= dico.title %></div>'+
								'</div>'+
							'</div>'+
							'<div class="topic-txt-center">'+
								'<div><%= dico.paraph1 %></div><br />'+
								'<div class="bold links">'+
									'<div><a href="download/programme2013-2014.pdf"><%= dico.programme %></a></div>'+
									/*'<div><a href="download/pv2013.pdf"><%= dico.pv1 %></a></div>'+*/
									'<div><a href="download/pv2012.pdf"><%= dico.pv2 %></a></div>'+
									'<div><a href="download/status2012.pdf"><%= dico.status %></a></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>',
	
	contactHTML: 	'<div class="box-center">'+
						'<div class="bubble-topic el-center">'+
							'<div class="bubble-title box-center">'+
								'<div class="bubble-title-bottom el-center blue-bkg"></div>'+
								'<div class="bubble-title-top el-center">'+
									'<div class="title-theme"><%= dico.title %></div>'+
								'</div>'+
							'</div>'+
							'<div class="topic-txt-center">'+
								'<div><%= dico.paraph1 %></div><br />'+
								'<div><h3><%= dico.mail %></h3></div><br /><br />'+
								'<div class="bold"><%= dico.company %></div>'+
								'<div class="bold"><%= dico.postal %></div>'+
								'<div class="bold"><%= dico.city %></div>'+
								
							'</div>'+
						'</div>'+
					'</div>',
	
	activityHTML: 	'<div class="box-center">' +
						'<div class="bubble-title box-center"> ' +
							'<div class="bubble-title-bottom el-center green-bkg"></div> ' +
							'<div class="bubble-title-top-activity el-center"> ' +
								'<div class="title-theme"><%= dico.title %></div> ' +
							'</div> ' +
						'</div> ' +
						'<div class="paraph topic-txt-center">'+
							'<div><%= dico.paraph1 %></div>'+
						'</div><br />'+
						'<div id="activity1" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity1.name %></h4></div>'+
								'<div><%= dico.activity1.description %></div>'+
								'<div><%= dico.activity1.age %></div>'+
								'<div><%= dico.activity1.leader %></div>'+
								'<div><%= dico.activity1.schedule %></div>'+
								'<div><%= dico.activity1.note %></div>'+
							'</div>'+
						'</div>'+
						'<div id="activity2" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity2.name %></h4></div>'+
								'<div><%= dico.activity2.description %></div>'+
								'<div><%= dico.activity2.age %></div>'+
								'<div><%= dico.activity2.leader %></div>'+
								'<div><%= dico.activity2.schedule %></div>'+
								'<div><%= dico.activity2.note %></div>'+
							'</div>'+
						'</div>'+
						'<div id="activity3" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity3.name %></h4></div>'+
								'<div><%= dico.activity3.description %></div>'+
								'<div><%= dico.activity3.age %></div>'+
								'<div><%= dico.activity3.leader %></div>'+
								'<div><%= dico.activity3.schedule %></div>'+
								'<div><%= dico.activity3.note %></div>'+
							'</div>'+
						'</div>'+
						'<div id="activity4" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity4.name %></h4></div>'+
								'<div><%= dico.activity4.description %></div>'+
								'<div><%= dico.activity4.age %></div>'+
								'<div><%= dico.activity4.leader %></div>'+
								'<div><%= dico.activity4.schedule %></div>'+
								'<div><%= dico.activity4.note %></div>'+
							'</div>'+
						'</div>'+
						'<div id="activity5" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity5.name %></h4></div>'+
								'<div><%= dico.activity5.description %></div>'+
								'<div><%= dico.activity5.age %></div>'+
								'<div><%= dico.activity5.leader %></div>'+
								'<div><%= dico.activity5.schedule %></div>'+
								'<div><%= dico.activity5.note %></div>'+
							'</div>'+
						'</div>'+
						'<div id="activity6" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity6.name %></h4></div>'+
								'<div><%= dico.activity6.description %></div>'+
								'<div><%= dico.activity6.age %></div>'+
								'<div><%= dico.activity6.leader %></div>'+
								'<div><%= dico.activity6.schedule %></div>'+
								'<div><%= dico.activity6.note %></div>'+
							'</div>'+
						'</div>'+
						'<div id="activity7" class="row">'+
							'<div class="bubble-activity col-xs-4"></div>'+
							'<div class="col-xs-8 activityDescription">'+
								'<div><h4><%= dico.activity7.name %></h4></div>'+
								'<div><%= dico.activity7.description %></div>'+
								'<div><%= dico.activity7.age %></div>'+
								'<div><%= dico.activity7.leader %></div>'+
								'<div><%= dico.activity7.schedule %></div>'+
								'<div><%= dico.activity7.note %></div>'+
							'</div>'+
						'</div>'+
					'</div>',

	


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


    getTpl: function(xUrl){
      	var self = this;
		$.ajax({
			type: "GET",
			dataType: "text",
			async: false,
			url:xUrl,
			success: function(data){    
				return data;
			},
			error: function (xhr, ajaxOptions, thrownError) {
			   console.log(xhr);
			   console.log(ajaxOptions);
			   console.log(thrownError);
			}
		});
    },


    /*-------------- INIT FUNCTIONS ---------------*/
	renderBubble: function(){
		//var frameTpl = this.getTpl('templates/frameTpl.html');


        $('#main-box').html(this.frameHTML);

		this.renderHistory();
		this.renderTariff();
		this.renderDownload();
		this.renderContact();
		this.renderActivity();

		this.loadBackground();
		
         
	},

	
	renderHistory: function(){
		var dataTpl = {dico: this.dico.history};
        var compiledTpl = _.template(this.historyHTML, dataTpl);
        $('#history-box').html(compiledTpl);
		
	},

	renderTariff: function(){
		var dataTpl = {dico: this.dico.tariff};
        var compiledTpl = _.template(this.tariffHTML, dataTpl);
        $('#tariff-box').html(compiledTpl);
	},

	renderDownload: function(){
		var dataTpl = {dico: this.dico.download};
        var compiledTpl = _.template(this.downloadHTML, dataTpl);
        $('#download-box').html(compiledTpl);
	},

	renderContact: function(){
		var dataTpl = {dico: this.dico.contact};
        var compiledTpl = _.template(this.contactHTML, dataTpl);
        $('#contact-box').html(compiledTpl);
	},

	renderActivity: function(){
		var dataTpl = {dico: this.dico.activity};
        var compiledTpl = _.template(this.activityHTML, dataTpl);
        $('#activity-box').html(compiledTpl);
	},

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



}