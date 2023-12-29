import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from './store/todo/todo.actions';
import { v4 as uuidv4 } from 'uuid';
import { selectAll, selectTotal } from './store/todo/todo.reducer';
import { Observable } from 'rxjs';
import { Todo } from './store/todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'angular-ngrx-todolist';

  content: string = '';

  todos: Observable<Todo[]>;
  total: Observable<number>;

  constructor(private store: Store) {
    this.todos = this.store.select(selectAll);
    this.total = this.store.select(selectTotal);
  }

  add() {
    this.store.dispatch(
      TodoActions.addTodo({
        todo: {
          id: uuidv4(),
          content: this.content,
        },
      })
    );
    this.content = '';
  }

  del(todo: Todo) {
    this.store.dispatch(TodoActions.deleteTodo({ id: todo.id }));
  }

  clears() {
    this.store.dispatch(TodoActions.clearTodos());
  }
}
