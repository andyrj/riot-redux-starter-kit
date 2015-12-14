<filterLink>
	<a class={ disabled: isDisabled } href='#' onclick={ click } >
		{ opts.text }
	</a>
	<style>
		.disabled {
			pointer-events: none;
			cursor: default;
			text-decoration: none;
			font-weight: bold;
		}
	</style>
	<script>
		this.click = () => {
			opts.store.dispatch({
				type: 'SET_VISIBILITY_FILTER',
				filter: opts.text
			});
		};
				
		this.render = () => {
			this.isDisabled = opts.text == opts.store.getState().visibility;  
		};

		this.on('update', () => {
			this.render();
		});

		this.on('mount', () => {
			this.render();
		});

	</script>
</filterLink>
