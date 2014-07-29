{if $flashMessenger}
	{if $flashMessenger->hasCurrentSuccessMessages()}
		{foreach $flashMessenger->getSuccessMessages() as $message}
			<div class="alert alert-success alert-dismissable">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			  	<strong>{$i18n->translate("Success")}!</strong>
			  	{if is_array($message)}
			  		<dl class="dl-horizontal">
					{foreach key=key item=item from=$message $message}
							<dt>{$i18n->translate($key)}</dt>
							<dd>{$i18n->translate($item)}</dd>
					{/foreach}
					</dl>
			  	{else}
			  		{$message}.
			  	{/if}
			</div>
		{/foreach}
	{/if}
	{if $flashMessenger->hasCurrentInfoMessages()}
		{foreach $flashMessenger->getInfoMessages() as $message}
			<div class="alert alert-info alert-dismissable">
			  	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			  	<strong>{$i18n->translate("Info")}!</strong>
			  	{if is_array($message)}
			  		<dl class="dl-horizontal">
					{foreach key=key item=item from=$message $message}
							<dt>{$i18n->translate($key)}</dt>
							<dd>{$i18n->translate($item)}</dd>
					{/foreach}
					</dl>
			  	{else}
			  		{$message}.
			  	{/if}
			</div>
		{/foreach}
	{/if}
	{if $flashMessenger->hasCurrentMessages()}
		{foreach $flashMessenger->getMessages() as $message}
			<div class="alert alert-warning alert-dismissable">
			  	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			  	<strong>{$i18n->translate("Warning")}!</strong>
			  	{if is_array($message)}
			  		<dl class="dl-horizontal">
					{foreach key=key item=item from=$message $message}
							<dt>{$i18n->translate($key)}</dt>
							<dd>{$i18n->translate($item)}</dd>
					{/foreach}
					</dl>
			  	{else}
			  		{$message}.
			  	{/if}
			</div>
		{/foreach}
	{/if}
	{if $flashMessenger->hasCurrentErrorMessages()}
		{foreach $flashMessenger->getErrorMessages() as $message}
			<div class="alert alert-danger alert-dismissable">
			  	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			  	<strong>{$i18n->translate("Error")}!</strong> 
			  	{if is_array($message)}
			  		<dl class="dl-horizontal">
					{foreach key=key item=item from=$message $message}
							<dt>{$i18n->translate($key)}</dt>
							<dd>{$i18n->translate($item)}</dd>
					{/foreach}
					</dl>
			  	{else}
			  		{$message}.
			  	{/if}
			</div>
		{/foreach}
	{/if}
{/if}
