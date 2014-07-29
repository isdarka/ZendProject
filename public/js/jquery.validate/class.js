/**
 * @autor isdarka
 * @created Nov 26, 2013, 2:18:21 PM
 * 
 */
$(document).ready(function() {
	jQuery.validator.addClassRules("name", {
		required: true,
		minlength: 2
	});
	
	jQuery.validator.addClassRules("select", {
		required: true,
		min : 1
	});
	
	jQuery.validator.addClassRules("max99", {
//		required: true,
		max : 99.99,
		min : 0
	});
	
	$.validator.addMethod(
	    	"chosen",
	    	function (value, element) {
//	    		if(!$(element).closest(".controls").is(":visible"))
//	    			return true;
//	    		if(!$(element).closest(".controls").is(":visible"))
//	    			return true;
	    		if(!$(element).hasClass("required"))
	    			return true;
	    		
	    		if($(element).is("[multiple]"))
	    			$(element).parent().find("ul.chosen-single").css("border-color", "");
	    		else
	    			$(element).parent().find("a.chosen-single").css("border-color", "");

		    	if(parseInt(value) > 0){
		    		return true;
		    	}else if(typeof value == "string" && value.length > 0 && value != 0){
		    		return true;
	    		}else{
	    			if($(element).is("[multiple]"))
	    				$(element).parent().find("ul.chosen-single").css("border-color", "#b94a48");
	    			else
	    				$(element).parent().find("a.chosen-single").css("border-color", "#b94a48");
		    		return false;
		    	}
		    	
		    },
		    jQuery.validator.format("Please select a valid option")
	    );
	
	
	$.validator.addMethod(
	    	"equalToPassword",
	    	function (value, element) {
//	    		if(!$(element).hasClass("required"))
//	    			return true;
	    		var elementCompare = $(element).data("element");
	    		
	    		if($("#" + elementCompare).val() != value)
	    			return false;
	    		
	    		return true;
		    },
		    jQuery.validator.format("Passwords Distincts")
	    	
	    );
//	jQuery.validator.addClassRules("password", {
//		required: true,
//		min : 8
//	});
	
	$.validator.addMethod(
	    	"passwd",
	    	function (value, element) {
	    		
	    		if(!$(element).hasClass("required"))
	    			if(value.length < 1)
	    				return true;
	    		
	    		if(value.length < 8)
	    			return false;
//	    		if (value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
//	    			return false;
	    		if (value.match(/([A-Z].*)/) == null)
	    			return false;
	    		if (value.match(/([a-z].*)/) == null)
	    			return false;
	    		if (value.match(/([0-9].*)/) == null)
	    			return false;
	    		return true;
		    },
		    jQuery.validator.format("Password: min 8 characters, lower and uppercase characters and number(s)")
	    );
});
