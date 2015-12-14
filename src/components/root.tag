<root>
	<counter store={ opts.store } state={ opts.store.getState().counter } />
	<div>
		Show: 
		<filterLink store={ opts.store } text='SHOW_ALL' />&nbsp;
		<filterLink store={ opts.store } text='SHOW_COMPLETED' />&nbsp; 
		<filterLink store={ opts.store } text='SHOW_ACTIVE' />
	</div>
	<todos store={ opts.store } todos={ opts.store.getState().todos } filter={ opts.store.getState().visibility } />
	<script>
		opts.store.subscribe(this.update)
	</script>
</root>
