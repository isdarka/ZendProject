<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="BaseProject in Zend Framework 2">
	    <meta name="author" content="isdarka">
	    <title>IsdarkA</title>
	    <link rel="shortcut icon" href="{$baseUrl}/images/favicon.ico" />
	    <link href="{$baseUrl}/css/bootstrap.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/bootstrap-theme.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/font-awesome/font-awesome.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/style.css" rel="stylesheet">
	    <link href="{$baseUrl}/css/isdarka.css" rel="stylesheet">
	    
	    <script type="text/javascript" src="{$baseUrl}/js/jquery-2.0.3.js"></script>
    
<!--     <script type="text/javascript" src="http://heelhook.github.io/chardin.js/chardinjs.min.js"></script> -->
<!--     <link href="http://heelhook.github.io/chardin.js/chardinjs.css" rel="stylesheet"> -->
        
<!--     jQuery UI -->
		<link href="{$baseUrl}/css/jquery.ui/jquery-ui-1.10.3.custom.css" rel="stylesheet">
		<script type="text/javascript" src="{$baseUrl}/js/jquery.ui/jquery-ui-1.10.3.custom.js"></script>
	
<!-- 	Timepicker -->
		<link href="{$baseUrl}/css/jquery.ui.timepicker/timepicker.css" rel="stylesheet">
		<script type="text/javascript" src="{$baseUrl}/js/jquery.ui.timepicker/jquery-ui-timepicker-addon.js"></script>
	
<!--     ZipCode -->
		<script type="text/javascript" src="{$baseUrl}/js/zipcode.js"></script>
	    <script type="text/javascript" src="{$baseUrl}/js/bootstrap.js"></script>
    
    
<!--     chosen -->
		<script type="text/javascript" src="{$baseUrl}/js/chosen/chosen.jquery.js"></script>
		<script type="text/javascript" src="{$baseUrl}/js/chosen/chosen.ajaxaddition.jquery.js"></script>
		<link href="{$baseUrl}/css/chosen/chosen.css" rel="stylesheet">
	
	    <script type="text/javascript" src="{$baseUrl}/js/jquery.validate/jquery.validate.js"></script>
	    <script type="text/javascript" src="{$baseUrl}/js/jquery.validate/additional-methods.js"></script>
	    <script type="text/javascript" src="{$baseUrl}/js/jquery.validate/class.js"></script>
	    <script type="text/javascript" src="{$baseUrl}/js/jquery.validate/messages.js"></script>
    
		<script type="text/javascript">
			var baseUrl = "{$baseUrl}";
			{if $idUser}
				var idUser = "{$idUser}";
			{else}
				var idUser = "0";
			{/if}
			
		</script>
	
	<!-- 	BaseModel -->
		<script type="text/javascript" src="{$baseUrl}/js/model/bean/bean.js"></script>
		<script type="text/javascript" src="{$baseUrl}/js/model/collection/collection.js"></script>
		
	<!-- 	Messages -->
		<script type="text/javascript" src="{$baseUrl}/js/Messages.js"></script>
		
	<!-- 	TimePicker -->
		<script type="text/javascript" src="{$baseUrl}/js/timepicker/bootstrap-timepicker.js"></script>
		<link href="{$baseUrl}/css/timepicker/bootstrap-timepicker.css" rel="stylesheet">
		
	<!-- 	Number -->
		<script type="text/javascript" src="{$baseUrl}/js/number/jquery.number.min.js"></script>
		
		
		<script type="text/javascript" src="{$baseUrl}/js/model/bean/Message.js"></script>
		<script type="text/javascript" src="{$baseUrl}/js/model/bean/UserAvatar.js"></script>
		<script type="text/javascript" src="{$baseUrl}/js/model/collection/MessageCollection.js"></script>
		<script type="text/javascript" src="{$baseUrl}/js/model/collection/UserAvatarCollection.js"></script>
		
		<script type="text/javascript" src="{$baseUrl}/js/model/bean/Person.js"></script>
	<!-- 	<script type="text/javascript" src="{$baseUrl}/js/push/Notification.js"></script> -->
	    <script type="text/javascript" src="{$baseUrl}/js/scripts.js"></script>

	</head>

 	<body>
  	<div id="wrap">
  	
  


<!--   navbar-fixed-top -->
<!--     <div class="navbar  navbar-inverse"> -->
 <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">		
      <div class="navbar-inner">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="{$baseUrl}/core" ><i class="icon-isdarka"></i>IsdarkA</a>
        </div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#">{$i18n->translate('Home')}</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        {$systemMenu}
      </div><!-- /.container -->
    </div><!-- /.navbar -->
    
<!--     Progress Bar -->
	<div class="progress progress-striped active navbar-fixed-top" id="progressBar" style="display:none; height: 3px; margin: 0px;">
		<div class="progress-bar"  style="width: 0%">
		</div>
	</div>
<!--    / Progress Bar -->

    <div id="wrap" class="container">
		{include file="messages.tpl"}
			
		<div class="row">
<!--         	<div class="col-xs-6 col-sm-2 " > -->
<!-- 	        	<div class="list-group  ">  -->
<!-- 		            <a href="#" class="list-group-item active">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 		            <a href="#" class="list-group-item">Link</a> -->
<!-- 	           </div> -->
<!--         	</div> -->
        	<div class="col-xs-6 col-sm-12" >
        		{$content}
        		<div class="text-center">
        			{include file="paginator.tpl"}
        		</div>
        	</div>
        </div>
		
		
      <hr>

      
    <div class="alert">
	<div class="alert alert-danger navbar-fixed-top" id="alertMessages" style="display:none; width: 40%; left: 30%; top: -5px; z-index: 10000;">
		<a class="close"  href="#" aria-hidden="true">&times;</a>
	  	<strong>a</strong>
	  	<p></p>
	</div>
	</div>
    </div><!--/.container-->
		</div><!--  /.wrap -->

	<footer>
		<div class="container text-center">
			<a href="#" data-toggle="tooltip" class="social" title="GitHub">
				<span class="fa-stack fa-lg">
					<i class="fa fa-circle fa-stack-2x"></i>
				  	<i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
				</span>
			</a>
			<a href="#" data-toggle="tooltip" class="social" title="Google Plus">
			<span class="fa-stack fa-lg">
				<i class="fa fa-circle fa-stack-2x"></i>
			  	<i class="fa fa-google-plus fa-stack-1x fa-inverse"></i>
			</span>
			</a>
			<a href="#" data-toggle="tooltip" class="social" title="FaceBook">
			<span class="fa-stack fa-lg">
				<i class="fa fa-circle fa-stack-2x"></i>
			  	<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
			</span>
			</a>
			<a href="#" data-toggle="tooltip" class="social" title="Twitter">
			<span class="fa-stack fa-lg">
				<i class="fa fa-circle fa-stack-2x"></i>
			  	<i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
			</span>
			</a>
			<a href="#" data-toggle="tooltip" class="social" title="YouTube">
			<span class="fa-stack fa-lg">
				<i class="fa fa-circle fa-stack-2x"></i>
			  	<i class="fa fa-youtube fa-stack-1x fa-inverse"></i>
			</span>
			</a>
			<a href="#" data-toggle="tooltip" class="social" title="Linux">
				<span class="fa-stack fa-lg">
					<i class="fa fa-circle fa-stack-2x"></i>
				  	<i class="fa fa-linux fa-stack-1x fa-inverse"></i>
				</span>
			</a>
		</div>
		<div class="site-footer">
		</div>
		<div class="footer-bottom">
			<i class="icon-isdarka"></i>
			Copyright 2014 · All Rights Reserved
		</div>
	</footer>
    
    {if $messageUsers}
    	{include file="sendMessage.tpl"}
    {/if}
  </body>
</html>

