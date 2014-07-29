/**
 * @author isdarka
 * @created May 19, 2014 12:43:20 PM
 */
var actionCollection = new ActionCollection();
$(document).ready(function(){
	
	$("#add").click(function(e){
		e.preventDefault();
		try {
			var idAction = parseInt($("#idAction option:selected").val());
			if(idAction < 1)
				throw "Please select a option";
			var action = $("#idAction option:selected").text();
			var controller = $("#idController option:selected").text();
			
			var actionBean = new Action();
			actionBean.setAction(action);
			actionBean.setController(controller);
			actionBean.setIdAction(idAction);
			actionBean.render($("#data"));
			actionCollection.append(actionBean);
		} catch (e) {
			new Messages(2, e);
		}
	});
	
	$("#data").on("click", ".delete", function(e){
		e.preventDefault();
		var index = $(this).closest("tr").data("index");
		$(this).closest("tr").fadeOut(500, function(){
			actionCollection.deleteByIndex(index);
			$(this).remove();
		});
	});
	
	$("#save").click(function(){
		if($("#form").valid())
		{
			try {
				if(actionCollection.count() < 1)
					throw "Please add actions";
				
				$("#form").append(actionCollection.getHidden());
				$("#form").submit();
				
			} catch (e) {
				new Messages(2, e);
			}
		}
	});
	
	
	$("#idController").change(function(){
		var idController = parseInt($("option:selected", this).val());
		var controller = parseInt($("option:selected", this).text());
		if(idController > 0)
		{
			$("#idAction").html("");
			$.ajax({
				type : "POST",
				url : baseUrl + '/core/application-action/get-actions',
				data : {
					idController : idController
				},
				success : function(data, textStatus, jqXHR) {
					if(data.status)
					{
						$.each(data.actionCollection, function(index, item){
							var action = new Action();
							action.setAction(item.name);
							action.setController(controller);
							action.setIdAction(item.id_action);
							action.setIdController(item.id_controller);
							action.appendTo($("#idAction"));
						});
						$("#idAction").trigger("chosen:updated");
					}else
						new Messages(2, data.msn);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					new Messages(2, textStatus + " " + errorThrown);
				}
			});
		}
	});
	if(parseInt($("#idApplicationAction").val()) > 0)
		getSaved();
});

function getSaved()
{
	var idApplicationAction = $("#idApplicationAction").val();
	$.ajax({
		type : "POST",
		url : baseUrl + '/core/application-action/get-actions-saved',
		data : {
			idApplicationAction : idApplicationAction
		},
		success : function(data, textStatus, jqXHR) {
			if(data.status)
			{
				$.each(data.actionCollection, function(index, item){
					var action = new Action();
					action.setAction(item.action);
					action.setIdAction(item.idAction);
					action.setIdController(item.idController);
					action.setController(item.controller);
					action.render($("#data"));
					actionCollection.append(action);
				});
				$("#idAction").trigger("chosen:updated");
			}else
				new Messages(2, data.msn);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			new Messages(2, textStatus + " " + errorThrown);
		}
	});
}
