/**
 * @autor isdarka
 * @created Nov 25, 2013, 8:54:09 PM
 * 
 */

//ProgressBar Ajax
var ajaxSend = 0;
var complete = 0;
var ajaxBar = true;
var now = new Date();
$(document).ajaxSend(function(){
	ajaxSend++;
});

$(document).ajaxStart(function(){
	if(ajaxBar)
	{
		$("#progressBar").show(0);
		$("#progressBar .progress-bar").width("0%");
	}
});

$(document).ajaxStop(function(){
	$("#progressBar .progress-bar").width("100%");
	$("#progressBar").fadeOut(1500, function(){
		
	});
	
});

$(document).ajaxComplete(function(){
	complete++;
	var percentage = 0;
	percentage = (complete * 100)/ajaxSend;
	$("#progressBar .progress-bar").width(percentage + "%");
	if(percentage == 100)
		$("#progressBar .bar").delay(1000).width("0%");
});
// END ProgressBar Ajax

$(document).ready(function() {
	$("form.validate").each(function(){
		$(this).validate({		
			highlight : function(element) {
				$(element).closest("div.form-group").removeClass("has-success").addClass("has-error");
			},
			unhighlight: function( element, errorClass, validClass ) {
				$(element).closest("div.form-group").removeClass("has-error").addClass("has-success");
				$(element).css("border-color", "");
			},
			success : function(element) {
				$(element).closest("div.form-group").removeClass("has-error").addClass("has-success");
			},
			errorClass : "control-label",
			errorElement : "span",
			errorPlacement : function(error, element) {
				var td = $(element).closest("td");
				if(td.length > 0)
				{
					$(element).css("border-color", "#b94a48");
				}else{
					var div = $(element).closest("div");
					if(div.hasClass("input-group"))
					{
						div.parent().append(error);
					}else
						div.append(error);
//					$(error).appendTo($(element).closest("div"));
				}
			},
			ignore: ':hidden:not(.chosen)'
		});
	});
	
	jQuery.extend(jQuery.validator.messages, {
	    required: "Este campo es requerido.",
	    remote: "Please fix this field.",
	    email: "Favor de ingresar un correo electronico valido.",
	    url: "Please enter a valid URL.",
	    date: "Inserte una fecha valida.",
	    dateISO: "Please enter a valid date (ISO).",
	    number: "Favor de ingresar solo numeros.",
	    digits: "Please enter only digits.",
	    creditcard: "Please enter a valid credit card number.",
	    equalTo: "Los campos no son identicos.",
	    accept: "Please enter a value with a valid extension.",
	    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
	    minlength: jQuery.validator.format("Please enter at least {0} characters."),
	    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
	    range: jQuery.validator.format("Favor de ingresar un valor entre {0} y {1}."),
	    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
	    min: jQuery.validator.format("Por favor ingrese un valor mayor a 0."),
	    datelessthan: "La fecha de inicio debe de ser anterior a la fecha de termino",
	    validateRFC: "Favor de colocar un RFC valido",
	    image: "La imagen debe ser en formato jpg, jpeg, png o gif",
	    day: "Favor de ingresar un dÃ­a valido ",
	    month: "Favor de ingresar un mes valido ",
	    year: "Favor de ingresar un aÃ±o valido",
	    preview: "Favor de seleccionar una imagen",
	    time24: "Favor de ingresar una Hora Valida",
	    numbergreaterthan: "Favor de ingresar un valor mayor a {0}",
	    hourgreater: "La hora debe ser mayor",
	    hourless: "La hora debe ser menor",
	    uniquebyclass: "El campo no debe estar repetido",
	    chosen : "Seleccione una opción valida",
	    passwd : "Contraseña: mínimo 8 caracteres, minúsculas, mayúsculas y números",
	    equalToPassword : "Las contraseñas no son iguales"
	});
	$(".datepicker").datepicker({ dateFormat: 'dd-mm-yy' });
	
	
	var maxYear = now.getFullYear() - 18;
	var minYear = maxYear - 60;
	$(".birthdate").datepicker({ 
		changeMonth: true,
        changeYear: true,
        yearRange: minYear + ':' + maxYear,
        dateFormat: 'yy-mm-dd' });
	
	$('.datetimepicker').datetimepicker({ 
		dateFormat: 'yy-mm-dd',
		timeFormat: "HH:mm:ss"
	});
	
//	TimePicker
	 $('.timepicker').timepicker({
		 minuteStep: 1,
		 showInputs: false,
		 disableFocus: true,
		 showMeridian: false,
		 showSeconds: true
		 });
//	ToolTip
	$('[data-toggle="tooltip"]').tooltip();
	$(document).on('mouseenter','[data-toggle="tooltip"]', function(){
	    $(this).tooltip('show');
	});

	$(document).on('mouseleave','[data-toggle="tooltip"]', function(){
	    $(this).tooltip('hide');
	});
//	Zipcode
	$("#zipcode").zipcode({ url: baseUrl + "/core/index/zipcode" });
	
	
//	Tabs
	$('#tabs a:first').tab('show');
	$('#tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
//	Messages
	$("#alertMessages").click(function(e){
		e.preventDefault();
		$("#alertMessages").slideUp();
	});
	

	$(".gear").bind('mouseover',function(event){
    	$(this).find("i").addClass("fa-spin");
    }).bind('mouseleave',function(){
    	$(this).find("i").removeClass("fa-spin");
    });
	
//	Chosen
	$(".chosen").chosen({allow_single_deselect:true});
	
	$(".chosen").each(function(index, element){
//		data-asyn="/s2credit/distribuitor/search"
		var url = $(this).data('async');
		if(url != undefined)
			if(url.length > 0)
			{
				$(this).ajaxChosen({
			        dataType : 'json',
			        type : 'POST',
			        url : baseUrl + url
				},{
				        loadingImg : baseUrl + '/img/loading.gif'
				});
			}
	});
	// Fixed when chosen on modal!
	$('.modal').on('shown.bs.modal', function () {
		  $('.chosen', this).chosen('destroy').chosen({allow_single_deselect:true});
		  $('.chosen', this).each(function(index, element){
			  var url = $(this).data('async');
				if(url != undefined)
					if(url.length > 0)
					{
						$(this).ajaxChosen({
					        dataType : 'json',
					        type : 'POST',
					        url : baseUrl + url
						},{
						        loadingImg : baseUrl + '/img/loading.gif'
						});
					}
		  });
//		  $('.chosen', this).trigger("chosen:updated");
	});
	
	
//	Messages
	$("#newMessage").click(function(e){
		e.preventDefault();
		$("#sendMessageModal").modal("show");
	});
	
	$("#saveSendMessage").click(function(){
		try {
			var idUsers = $("#messageUsers").val();
			
			if($("#sendMessageForm").valid())
			{
				var subject = $("#subject").val();
				var body = $("#body").val();
				
				$.ajax({
					type: "POST",
					url: baseUrl +  '/core/message/save-message',
					data: {
						idUsers : idUsers,
						subject : subject,
						body : body
					},
					success: function(data){
						if(data.status)
							new Messages(1, data.msn);
						else
							new Messages(2, data.msn);
						$("#sendMessageModal").modal("hide");
					},
					error : function(jqXHR, textStatus, errorThrown){
						throw textStatus;
					}
				});
			}
		} catch (e) {
			new Messages(2, e);
		}
		
	});
	
	function hasMessages()
	{
		ajaxBar = false;
		$.ajax({
			type: "POST",
			url: baseUrl +  '/core/message/has-messages',
			data: {
			},
			success: function(data){
				ajaxBar = true;
				$("#notification").find(".badge").text("");
				if(data.status)
					if(data.messages > 0){
						$("#notification").find(".badge").text(data.messages);
						$(".msnNotifications").find(".dropdown-header").find("a").text('You have ' + data.messages + ' new notifications');
					}
				
				
//				 setTimeout(hasMessages,15000);
				 
			},
			error : function(jqXHR, textStatus, errorThrown){
				ajaxBar = true;
			}
		});
	}
//	hasMessages();

	$("#notification").click(function(e){
		try {
			$.ajax({
				type: "POST",
				url: baseUrl +  '/core/message/get-messages',
				data: {
				},
				success: function(data){
					if(data.status){
						var userAvatarCollection = new UserAvatarCollection();
						$.each(data.userAvatars, function( index, item ) {
							var userAvatar = new UserAvatar();
								userAvatar.setIdUser(item.idUser);
								userAvatar.setAvatar(item.avatar);
								
							userAvatarCollection.append(userAvatar);
						});

						var messageCollection = new MessageCollection();
						$.each(data.messages, function( index, item ) {
							var message = new Message();
							message.setIdMessage(item.id_message);
							message.setStatus(item.status);
							message.setTimestamp(item.timestamp);
							message.setSubject(item.subject);
							message.setMessage(item.message);
							message.setUserAvatar(userAvatarCollection.getByIndex(item.id_user));
							messageCollection.append(message);
						});
					}else
						new Messages(2, data.msn);
					 
				},
				error : function(jqXHR, textStatus, errorThrown){
				}
			});
		} catch (e) {
		}
	});

	$(".msnNotifications").on("click", ".readMessage", function(e){
		e.preventDefault();
		try {
			var index = $(this).closest("li").data("index");
			
			$.ajax({
				type: "POST",
				url: baseUrl +  '/core/message/get-message',
				data: {
					idMessage : index
				},
				success: function(data){
					if(data.status){
						var userAvatar = new UserAvatar();
						userAvatar.setIdUser(data.message.id_user);
						userAvatar.setAvatar(data.userAvatar.path + "/" + data.userAvatar.name);
					
						var message = new Message();
							message.setIdMessage(data.message.id_message);
							message.setStatus(data.message.status);
							message.setTimestamp(data.message.timestamp);
							message.setSubject(data.message.subject);
							message.setMessage(data.message.message);
							message.setUserAvatar(userAvatar);
							
						message.renderFullMessage($("#readMessageModal div.modal-dialog div.modal-content div.modal-body"));
						$("#readMessageModal").modal("show");
					}else
						new Messages(2, data.msn);
					
				},
				error : function(jqXHR, textStatus, errorThrown){
				}
			});
			
			
		} catch (e) {
			console.log(e);
		}
	});
	
	
//	Push Notification
//	try {
//		var notification = new Notification();
//		
//	} catch (e) {
//		new Messages(2, e);
//	}
	
	$('.dropdown').on('shown.bs.dropdown', function () {
		$("input[name=inputComment]").focus();
	});

//	$("#comment").click(function(){
//		console.log("asd");
//		$("#inputComment").focus();
//	});
	
//	$(window).bind('beforeunload',function(){
//		notification.close();
//	});
	

	
//	$(document).on("keypress", function(e) {		
//		if(e.ctrlKey && (e.which === 104))
//		{
//			e.preventDefault();
//			$('body').chardinJs('toggle');
//		}
//	});
//	$('body').chardinJs('start')
});



String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

