/**
 * @author isdarka
 */

$(document).ready(function(){
	
	if($("#key").val().length < 1)
	{
		generateKey();
	}
});

function generateKey()
{
	$("#generatedKey").easypassgen({
        'syllables':        10,
        'numbers':          true,
        'specialchars':     false
    });
	
	var key = $("#generatedKey").text();
	$("#key").val(key.trim());
}