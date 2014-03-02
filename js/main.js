var gym = {

	dico:null,

	init: function(){
		this.getDico();
		
	},

	/*------------- HTML -------------*/
	frameHTML: '<div id="frame"><div class="row"><div id="history-box" class="col-md-6"></div><div id="tariff-box" class="col-md-6"></div></div> <div class="row"><div id="download-box" class="col-md-6"></div><div id="contact-box" class="col-md-6"></div></div> <div class="row"><div id="activity-box" class="col-md-12"></div></div></div>',
	historyHTML: '<div class="box-center"><div class="bubble-topic el-center"><div class="bubble-title box-center"><div class="bubble-title-bottom el-center"></div><div class="bubble-title-top el-center"></div></div></div></div>',
	tariffHTML: '<div class="box-center"><div class="bubble-topic el-center"><div class="bubble-title box-center"><div class="bubble-title-bottom el-center"></div><div class="bubble-title-top el-center"></div></div></div></div>',
	downloadHTML: '<div class="box-center"><div class="bubble-topic el-center"><div class="bubble-title box-center"><div class="bubble-title-bottom el-center"></div><div class="bubble-title-top el-center"></div></div></div></div>',
	contactHTML: '<div class="box-center"><div class="bubble-topic el-center"><div class="bubble-title box-center"><div class="bubble-title-bottom el-center"></div><div class="bubble-title-top el-center"></div></div></div></div>',
	activityHTML: '<div class="box-center"><div class="bubble-title box-center"><div class="bubble-title-bottom el-center"></div><div class="bubble-title-top-activity el-center"></div></div></div>',

	


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