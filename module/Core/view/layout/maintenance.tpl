<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="isdarka">
	    <title>Dportenis</title>
	    <link rel="shortcut icon" href="{$baseUrl}/images/favicon.ico" />
	    
	    
	    <script type="text/javascript">
			var baseUrl = "{$baseUrl}";
		</script>
		
	    <link href="{$baseUrl}/css/bootstrap.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/font-awesome/font-awesome.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/style.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/login.css" rel="stylesheet">
	    
	    <script type="text/javascript" src="{$baseUrl}/js/jquery-2.0.3.js"></script>
	    <script type="text/javascript" src="{$baseUrl}/js/bootstrap.js"></script>
	    {literal}
	    <script type="text/javascript">
	    	$(document).ready(function(){
	    		startTime();
	    	});
			function startTime() {
	    		var today=new Date();
	    	    var h=today.getHours();
	    	    var m=today.getMinutes();
	    	    var s=today.getSeconds();
	    	    m = checkTime(m);
	    	    s = checkTime(s);
	    	    $("#clock").text(h+":"+m+":"+s);
	    	    var t = setTimeout(function(){startTime()},500);
	    	}
			function checkTime(i) {
			    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
			    return i;
			}
		</script>
		{/literal}
	</head>
	<body>
  		<div id="wrap">
    		<div id="wrap" class="container">
    			<div class="row">
    				<div class=" col-sm-offset-3 col-sm-6">
    					<div class="panel panel-primary">
  							<div class="panel-heading">{$i18n->translate('SITE MAINTENANCE')}</div>
						  	<div class="panel-body">
						  		<p class="text-center">
						  			<i class="fa fa-exclamation-triangle fa-5x"></i>
						  		</p>
						  		<h1 class="text-center" id="clock"></h1>
						  	</div>
						</div>
    				</div>
    			</div>
		    </div><!--/.container-->
		</div><!--  /.wrap -->
	</body>
</html>

