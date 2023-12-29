import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from './todo.model';
import { TodoActions } from './todo.actions';

export const todoesFeatureKey = 'todoes';

export interface State extends EntityState<Todo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, action) =>
    adapter.addOne(action.todo, state)
  ),
  on(TodoActions.deleteTodo, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TodoActions.clearTodos, (state) => adapter.removeAll(state))
);

export const todoesFeature = createFeature({
  name: todoesFeatureKey,
  reducer,
  extraSelectors: ({ selectTodoesState }) => ({
    ...adapter.getSelectors(selectTodoesState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  todoesFeature;
