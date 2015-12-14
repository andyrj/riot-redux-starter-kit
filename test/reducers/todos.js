import todos from '../../src/reducers/todos'
import deepFreeze from 'deep-freeze-strict';
import { expect } from 'chai';


describe('Todos', () => {
	it('it can add new todos', () => {
		const stateBefore = [];
		const action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn Redux with RiotJS!'
		};
		const stateAfter = [
			{
				id: 0,
				text: 'Learn Redux with RiotJS!',
				completed: false
			}
		];

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(
			todos(stateBefore, action)
		).to.deep.equal(stateAfter);
	});

	it('can toggle the state of the todo', () => {
		const stateBefore = [
			{
				id: 0,
				text: 'Learn Redux with RiotJS!',
				completed: false
			},
			{
				id: 1,
				text: 'Go outside',
				completed: false
			}
		];
		const action = {
			type: 'TOGGLE_TODO',
			id: 1
		}
		const stateAfter = [
			{
				id: 0,
				text: 'Learn Redux with RiotJS!',
				completed: false
			},
			{
				id: 1,
				text: 'Go outside',
				completed: true
			}
		];
		
		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(
			todos(stateBefore, action)
		).to.deep.equal(stateAfter);

	});
});
