/**
 * @author isdarka
 * @created May 28, 2014 3:25:19 PM
 */
var order = false;
$(document).ready(function(){
	
	$("#order").click(function(){
		
		if(order)
		{
			$("#items").sortable("disable");
			order = false;
			$(this).val("Enable Order");
		}else{
			$("#items").sortable({
				helper: fixHelper,
				out: function( event, ui ) {
					ui.item.find("td").removeClass("success");
					orderItems();
				}
			}).disableSelection();
			 $( "#items" ).sortable( "option", "disabled", false );
			order = true;
			$(this).val("Disable Order");
		}
	});
});

//Return a helper with preserved width of cells
var fixHelper = function(e, ui) {
	ui.children().each(function() {
		$(this).addClass("success");
		$(this).width($(this).width());
	});
	return ui;
};


function orderItems()
{
	var number = 1;
	var menuItemCollection = new MenuItemCollection();
	$("#items tr").each(function(index, tr){
		var idMenuItem = $(this).data("index");
		$(this).find(".order").text(number);
		
		var menuItem = new MenuItem();
		menuItem.setIdMenuItem(idMenuItem);
		menuItem.setOrder(number);
		menuItemCollection.append(menuItem);
		number++;
	});
	
	
	$.ajax({
		type : "POST",
		url : baseUrl + '/core/menu-item/save-order',
		data : {
			json : menuItemCollection.toJson(),
		},
		success : function(data, textStatus, jqXHR) {
			if(data.status)
			{
				
			}else
				new Messages(2, data.msn);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			new Messages(2, textStatus + " " + errorThrown);
		}
	});
}