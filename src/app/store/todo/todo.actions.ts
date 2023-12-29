import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Todo } from './todo.model';

export const TodoActions = createActionGroup({
  source: 'Todo/API',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    'Delete Todo': props<{ id: string }>(),
    'Clear Todos': emptyProps(),
  },
});
