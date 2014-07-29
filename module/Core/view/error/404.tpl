<h1>A 404 error occurred</h1>
<h2>{$message}</h2>
{if $reason}
	{if $reason == 'error-controller-cannot-dispatch'}
		{assign var="reasonMessage" value="The requested controller was unable to dispatch the request."}
	{elseif $reason == 'error-controller-not-found'}
		{assign var="reasonMessage" value="The requested controller could not be mapped to an existing controller class."}
	{elseif $reason == 'error-controller-invalid'}
		{assign var="reasonMessage" value="The requested controller was not dispatchable."}
	{elseif $reason == 'error-router-no-match'}
		{assign var="reasonMessage" value="The requested URL could not be matched by routing."}
	{else}
		{assign var="reasonMessage" value="We cannot determine at this time why a 404 was generated."}
	{/if}
	
	<p>{$reasonMessage}</p>
{/if}
{if $controller}
	<dl>
	    <dt>Controller:</dt>
	    <dd>{$controller}
		    {if $controller && $controller != $controller }
		    	(resolves to {$controller_class})
		    {/if}
		</dd>
	</dl>
{/if}


{if $display_exceptions}
	{if $exception}
		<h2>Additional information</h2>
		<h3>{get_class($exception)}</h3>
		
		<dl>
		    <dt>File:</dt>
		    <dd>
		        <pre class="prettyprint linenums">{$exception->getFile()}:{$exception->getLine()}</pre>
		    </dd>
		    <dt>Message:</dt>
		    <dd>
		        <pre class="prettyprint linenums">{$exception->getMessage()}</pre>
		    </dd>
		    <dt>Stack trace:</dt>
		    <dd>
		        <pre class="prettyprint linenums">{$exception->getTraceAsString()}</pre>
		    </dd>
		</dl>
		{assign var="e" value=$exception->getPrevious()}
		{if $e}
			<hr/>
			
			<h2>Previous exceptions:</h2>
			<ul class="unstyled">
			    <li>
			        <h3>{get_class($e)}</h3>
			        <dl>
			            <dt>File:</dt>
			            <dd>
			                <pre class="prettyprint linenums">{$e->getFile()}:{$e->getLine()}</pre>
			            </dd>
			            <dt>Message:</dt>
			            <dd>
			                <pre class="prettyprint linenums">{$e->getMessage()}</pre>
			            </dd>
			            <dt>Stack trace:</dt>
			            <dd>
			                <pre class="prettyprint linenums">{$e->getTraceAsString()}</pre>
			            </dd>
			        </dl>
			    </li>
			</ul>
		{/if}
	{/if}	
{/if}
