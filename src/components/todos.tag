<todos>
	<div>
		<form onsubmit={ add }>
			<input name=todo /> <button type='submit'>Add</button>
		</form>
		<ul>
			<li each={ display } class={ completed: completed }>
				<input type='checkbox' checked={ completed } onclick={ parent.completeClick }> { text }
			</li>
		</ul>
	</div>
	<script>
		this.add = (event) => {
			opts.store.dispatch({
				type: 'ADD_TODO',
				text: this.todo.value,
				id: this.nextTodoId++
			});
			this.todo.value = '';
		};

		this.completeClick = (event) => {
			opts.store.dispatch({
				type: 'TOGGLE_TODO',
				id: event.item.id
			});
		};

		this.render = () => {
			this.display = this.getVisibleTodos(opts.todos, opts.filter);
		};

		this.on('update', () => {
			this.render();
		});
		
		this.getVisibleTodos = (
			todos,
			filter
		) => {
			switch(filter) {
				case 'SHOW_ALL':
					return todos;
				case 'SHOW_COMPLETED':
					return todos.filter(
						t => t.completed
					);
				case 'SHOW_ACTIVE':
					return todos.filter(
						t => !t.completed
					);
			}
		};

		this.on('mount', () => {
			this.nextTodoId = 0;
			opts.store.subscribe(this.render);
			this.render();
		});

	</script>
</todos>
