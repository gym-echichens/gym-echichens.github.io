var gym = {

	dico:null,

	init: function(){
		this.getDico();
		
	},

	/*------------- HTML -------------*/
	frameHTML: 		'<div id="frame">'+
						'<div class="row">'+
							'<div id="history-box" class="col-md-6"></div>'+
							'<div id="tariff-box" class="col-md-6"></div>'+
						'</div>'+
						'<div class="row">'+
							'<div id="download-box" class="col-md-6"></div>'+
							'<div id="contact-box" class="col-md-6"></div>'+
						'</div>'+
						'<div class="row">'+
							'<div id="activity-box" class="col-md-12"></div>'+
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
								'<div class="bubble-title-bottom el-center blue-bkg"></div>'+
								'<div class="bubble-title-top el-center">'+
									'<div class="title-theme"><%= dico.title %></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>',
	
	contactHTML: 	'<div class="box-center">'+
						'<div class="bubble-topic el-center">'+
							'<div class="bubble-title box-center">'+
								'<div class="bubble-title-bottom el-center orange-bkg"></div>'+
								'<div class="bubble-title-top el-center">'+
									'<div class="title-theme"><%= dico.title %></div>'+
								'</div>'+
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


    /*-------------- INIT FUNCTIONS ---------------*/
	renderBubble: function(){

        $('#main-box').html(this.frameHTML);

		this.renderHistory();
		this.renderTariff();
		this.renderDownload();
		this.renderContact();
		this.renderActivity();
         
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



}