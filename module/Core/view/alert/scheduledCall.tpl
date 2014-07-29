<div class="modal fade" id="scheduledCallAlert">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
<!-- 				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->
				<h4 class="modal-title">{$i18n->translate('Scheduled Call')}</h4>
			</div>
			<div class="modal-body">
				<table class="table table-condensed table-bordered">
					<thead>
						<tr>
							<th>{$i18n->translate('Distributor')}</th>
							<th>{$i18n->translate('Folio')}</th>
							<th>{$i18n->translate('Date')}</th>
							<th>{$i18n->translate('Due Date')}</th>
							<th>{$i18n->translate('Amount')}</th>
							<th>{$i18n->translate('Pay')}</th>
						</tr>
					</thead>
					<tbody id="scheduledCallData">
					</tbody>
				</table>
			</div>
			<div class="modal-footer">
<!-- 				<button type="button" class="btn btn-default" data-dismiss="modal">{$i18n->translate('Cancel')}</button> -->
				<button type="button" class="btn btn-primary">{$i18n->translate('Accept')}</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->