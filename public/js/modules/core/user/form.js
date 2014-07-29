/**
 * 
 */
$(document).ready(function(){
	
//	$("#form.validate").validate({
//		rules: {
//			password: "required",
//			passwordConfirm: {
//					equalTo: "#password"
//				}
//			}
//	});
//	
//	jQuery.validator.setDefaults({
//		debug: true,
//		success: "valid"
//		});
		$( "#form" ).validate({
			rules: {
				password: "required",
				password_confirm: {
					equalTo: "#password"
				}
			}
		});
	$("#idEmployee").change(function(){
		var idEmployee = $("option:selected",this).val();
		idEmployee = parseInt(idEmployee);
		if(idEmployee > 0)
			$("#idBranch, #name, #lastName, #secondLastName, #birthdate").closest(".form-group").fadeOut();
		else
			$("#idBranch, #name, #lastName, #secondLastName, #birthdate").closest(".form-group").fadeIn();
	});
	
	$("#name").blur(function(){
		if($("#username").val().length < 1)
		{
			var lastName = $("#lastName").val();
			var first = "";
			if(lastName.length > 0)
				first = lastName.substr(0, 1);
			
			$("#username").val($(this).val().capitalize() + first.capitalize());
		}
		
	});
	
	$("#lastName").blur(function(){
		var username = $("#username").val();
		var name = $("#name").val();
		
		if(username.toUpperCase() == name.toUpperCase())
		{
			var first = $(this).val().substr(0, 1);
			$("#username").val(name.capitalize() + first.capitalize());
		}
		
	});
	
	
//	$("#idRole").change(function(){
//		var idRole = $("option:selected", this).val();
//		idRole = parseInt(idRole);
//		if(!isNaN(idRole))
//		{
//			if(idRole == customerRole)
//			{
////				customerData
////				userData
////				$()
//				$("#customerData").fadeOut(500, function(){
//					$("#userData").switchClass("col-xs-6", "col-xs-12", 500, function(){
////						$('.chosen', this).chosen('destroy').chosen({allow_single_deselect:true});
//					});
//				});
////				$("#userData").switchClass("col-xs-6", "col-xs-12", function(){
////					
////				});
//				$("#customerField").fadeIn(500, function(){
//					$('.chosen', this).chosen('destroy').chosen({allow_single_deselect:true});
//					$('.chosen', this).addClass("required");
//				});
//			}else{
//				$("#userData").switchClass("col-xs-12", "col-xs-6", function(){
//					$("#customerData").show();
//				});
//				$("#customerField").fadeOut(500, function(){
//					$('.chosen', this).removeClass("required");
//				});
//			}
//		}else
//			$("#customerField").fadeOut(500, function(){
//				$('.chosen', this).removeClass("required");
//			});
//	});
	
//	if($("#idRole option:selected").val() == customerRole)
//	{
//		$("#idRole").change();
//	}
	
	$("#add").click(function(e){
		e.preventDefault();
		try {
			var idArea = $("#idArea option:selected").val();
			var area = $("#idArea option:selected").text();
			var customer = $("#idArea option:selected").closest("optgroup").attr("label");
			
			idArea = parseInt(idArea);
			if(isNaN(idArea) || idArea < 1)
				throw "Please select area";
			
			appendArea(idArea, area, customer);
		} catch (e) {
			new Messages(2, e);
		}
	});
	
	 $(".areas").on("click", ".btn-danger", function(e){
		 e.preventDefault();
		 $(this).closest("tr").fadeOut(500, function(){
			 $(this).remove();
		 });
	 });
	 
	 
	 $("#save").click(function(){
		 if($("#form").valid())
		 {
			 var storage = new Object();
			 $.each($(".areas").find("tr"), function(index, tr){
				 var area = new Object();
				 area.idArea = $(this).data("index");
				 storage[area.idArea] = area;
			 });
			 
			 $("#form").append($('<input>')
				.addClass("entries")
				.prop("type", "hidden")
				.prop("name", "areas")
				.val(JSON.stringify(storage)));
			 
			 $("#form").submit();
//			 console.log(JSON.stringify(storage));
		 }
	 });
	 
	 $("#idEmployee").change();
	 
});

function appendArea(idArea, area, customer)
{
	var tr = $('<tr data-index="' + idArea + '"></tr>');
	tr.append($('<td></td>').text(customer));
	tr.append($('<td></td>').text(area));
	
	var button = $('<a></a>').addClass("btn").addClass("btn-danger").prop("href", "#").append($('<i></i>').addClass("fa").addClass("fa-minus"));
	tr.append($('<td></td>').append(button));
	
	var exist = $(".areas").find('[data-index="' + idArea + '"]');
	if(exist.length > 0)
	{
		exist.after(tr);
		exist.remove();
	}else
		$(".areas").append(tr);
}