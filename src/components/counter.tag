<counter>
	<label>Counter: { counter }</label>
	<br />
	<button onclick={ increment }>+</button>
	<button onclick={ decrement }>-</button>
	<script>
		var self = this;

		this.counter = opts.state;

		this.render = () => {
			this.counter = opts.state;
			this.update();
		}
		
		opts.store.subscribe(this.render);

		this.increment = () => {
			opts.store.dispatch({ type: 'INCREMENT' });
		};

		this.decrement = () => {
			opts.store.dispatch({ type: 'DECREMENT' });
		};

	</script>
</counter>
