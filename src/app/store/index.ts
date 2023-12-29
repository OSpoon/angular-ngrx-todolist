import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';

export interface AppState {  [fromTodo.todoesFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<AppState> = {  [fromTodo.todoesFeatureKey]: fromTodo.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
