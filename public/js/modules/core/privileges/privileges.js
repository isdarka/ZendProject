/**
 * @author isdarka
 * @created May 19, 2014 5:34:47 PM
 */
var applicationActionCollection = new ApplicationActionCollection();
var applicationCollection = new ApplicationCollection();
$(document).ready(function(){
	$("#idApplication").change(function(){
		var idApplication = $("option:selected", this).val();
		if(parseInt(idApplication) > 0)
		{
			$("#idApplicationAction").html("");
			$.ajax({
				type : "POST",
				url : baseUrl + '/core/core/get-application-actions',
				data : {
					idApplication : idApplication	
				},
				success : function(data, textStatus, jqXHR) {
					if(data.status)
					{
						$.each(data.applicationActionCollection, function(index, item){
							var applicationAction = new ApplicationAction();
							applicationAction.setIdApplication(item.id_application);
							applicationAction.setIdApplicationAction(item.id_application_action);
							applicationAction.setName(item.name);
							applicationAction.setStatus(item.status);
							applicationAction.appendTo($("#idApplicationAction"));
						});
						$("#idApplicationAction").trigger("chosen:updated");
					}else
						new Messages(2, data.msn);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					new Messages(2, textStatus + " " + errorThrown);
				}
			});
		}
	});
	
	
	
	$("#add").click(function(e){
		e.preventDefault();
		try {
			var idApplicationAction = parseInt($("#idApplicationAction option:selected").val());
			if(idApplicationAction < 1)
				throw "Favor de seleccionar una accion";
			
			var idApplication = $("#idApplication option:selected").val();
			var application = $("#idApplication option:selected").text();
			var name = $("#idApplicationAction option:selected").text();
			
			var applicationAction = new ApplicationAction();
				applicationAction.setIdApplication(idApplication);
				applicationAction.setIdApplicationAction(idApplicationAction);
				applicationAction.setName(name);
				applicationAction.setApplication(application);
				applicationAction.render($("#data"));
				console.log(applicationAction);
			applicationActionCollection.append(applicationAction);
		} catch (e) {
			new Messages(2, e);
		}
	});
	
	
	
	$("#idRole").change(function(){
		
	});
	
	
	$("#data").on("click", ".delete", function(e){
		e.preventDefault();
		var index = $(this).closest("tr").data("index");
		$(this).closest("tr").fadeOut(500, function(){
			applicationActionCollection.deleteByIndex(index);
			$(this).remove();
		});
	});
	
	
	$("#save").click(function(){
		if($("#form").valid())
		{
			$("#form").append(applicationActionCollection.getHidden());
			$("#form").submit();
		}
	});
	
	if($("#idRole").val() > 0)
		getPrivileges();
	
	
	$("#idMenuItem").change(function(){
		var idMenuItem = $("option:selected", this).val();
		if(parseInt(idMenuItem) > 0)
		{
			$.ajax({
				type : "POST",
				url : baseUrl + '/core/core/get-applications',
				data : {
					idMenuItem : idMenuItem
				},
				success : function(data, textStatus, jqXHR) {
					if(data.status)
					{
						$.each(data.applicationCollection, function(index, item){
							var application = new Application();
							application.setIdApplication(item.id_application);
							application.setName(item.name);
							application.appendTo($("#idApplication"));
						});
						$("#idApplication").trigger("chosen:updated");
					}else
						new Messages(2, data.msn);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					new Messages(2, textStatus + " " + errorThrown);
				}
			});
		}
	});
});


function getPrivileges()
{
	try {
		var idRole = $("#idRole").val();
		
		applicationActionCollection.clear();
		applicationCollection.clear();
		$("#data").html('');
		$.ajax({
			type : "POST",
			url : baseUrl + '/core/core/get-role-actions',
			data : {
				idRole : idRole
			},
			success : function(data, textStatus, jqXHR) {
				if(data.status)
				{
					$.each(data.applicationCollection, function(index, item){
						var application = new Application();
						application.setIdApplication(item.id_application);
						application.setName(item.name);
						application.setStatus(item.status);
						applicationCollection.append(application);
					});
					
					$.each(data.applicationActionCollection, function(index, item){
						var applicationAction = new ApplicationAction();
						var application = applicationCollection.getByIndex(item.id_application);
						applicationAction.setApplication(application.getName());
						applicationAction.setIdApplication(item.id_application);
						applicationAction.setIdApplicationAction(item.id_application_action);
						applicationAction.setName(item.name);
						applicationAction.setStatus(item.status);
						applicationActionCollection.append(applicationAction);
						applicationAction.render($("#data"));
					});
				}else
					new Messages(2, e);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				new Messages(2, textStatus + " " + errorThrown);
			}
		});
	} catch (e) {
		new Messages(2, e);
	}
}