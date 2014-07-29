/**
 * @author isdarka
 */


function Notification()
{
	
}

Notification.prototype = new WebSocket("ws://localhost.dev:8080");
Notification.prototype.constructor = Notification;

Notification.prototype.onopen = function(event)
{
	$("#notification").find(".badge").text("");
	$(".msnNotifications").find(".dropdown-header").find("a").text('You have 0 new notifications');
	
	var msg = {
			idUser : idUser
			};
			
	this.send(JSON.stringify(msg));
			
};

Notification.prototype.onmessage = function(event) 
{
	var data = event.data;
	try {
		data = JSON.parse(data);
		if(data.notification)
		{
//			$("#notification").css('position', 'absolute');
			$("#notification").find(".badge").text(data.notification);
			$(".msnNotifications").find(".dropdown-header").find("a").text('You have ' + data.notification + ' new notifications');
			$("#notification").find(".badge").effect("highlight", {}, 500);
		}
		
		if(data.scheduledCollection)
		{
			var scheduledCallCollection = new ScheduledCallCollection();
			scheduledCallCollection.clear();
			$.each(data.scheduledCollection, function(index, item){
				var scheduledCall = new ScheduledCall();
				scheduledCall.setDatetime(item.datetime);
				scheduledCall.setIdAssignment(item.id_assignment);
				scheduledCall.setIdScheduledCall(item.id_scheduled_call);
				scheduledCall.setIdUser(item.id_user);
				scheduledCall.setNote(item.note);
				scheduledCall.setStatus(item.status);
				scheduledCallCollection.append(scheduledCall);
			});
			
			if(scheduledCallCollection.count() > 0)
			{
				$.ajax({
					type : "POST",
					url : baseUrl + '/core/index/get-scheduled-call',
					data : {
						scheduledCallCollection : scheduledCallCollection.toJson()
					},
					success : function(data, textStatus, jqXHR) {
						if(data.status)
						{
							$("#scheduledCallData").html("");
							var distributorCollection = new DistribuitorCollection();
							distributorCollection.clear();
							$.each(data.distributorCollection, function(index, item){
								var distributor = new Distribuitor();
								distributor.setIdDistribuitor(item.id_distribuitor);
								distributor.setName(item.name);
								distributor.setLastName(item.last_name);
								distributor.setSecondLastName(item.second_last_name);
								distributorCollection.append(distributor);
							});
							var chargeCollection = new ChargeCollection();
							chargeCollection.clear();
							$.each(data.chargeCollection, function(index, item){
								var charge = new Charge();
								charge.setAmount(item.amount);
								charge.setDate(item.date);
								charge.setDiscountAmount(item.discount_amount);
								charge.setDueDate(item.due_date);
								charge.setFolio(item.folio);
								charge.setIdCharge(item.id_charge);
								charge.setIdChargeType(item.id_charge_type);
								charge.setIdDistribuitor(item.id_distribuitor);
								charge.setMora(item.mora);
								charge.setPay(item.pay);
								charge.setPaymentDate(item.payment_date);
								charge.setPreviousBalance(item.previous_balance);
								charge.setDistributor(distributorCollection.getByIndex(charge.getIdDistribuitor()));
								chargeCollection.append(charge);
								charge.renderScheduled($("#scheduledCallData"));
							});
							
							$("#scheduledCallAlert").modal("show");
							
						}
					},
					error : function(jqXHR, textStatus, errorThrown) {
//						new Messages(2, textStatus + " " + errorThrown);
					}
				});
			}
		}

	} catch (e) {
		console.log("Ups: " + e);
	}
};

Notification.prototype.onerror = function(event)
{
//	new Messages(2, "Notification Error");
};

Notification.prototype.onclose = function(event)
{
	
//	new Messages(3, "Notification Close");
};
