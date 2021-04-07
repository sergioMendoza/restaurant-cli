import { Action, createAction, props } from '@ngrx/store';
import { Category } from 'src/app/shared/interfaces/category.type';

// Load categories
export const LOAD_CATEGORIES = '[Categories] Load Categories';
export const LOAD_CATEGORIES_FAIL = '[Categories] Load Categories Fail';
export const LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success';

export class LoadCategories implements Action {
  readonly type = LOAD_CATEGORIES;
}

export class LoadCategoriesFail implements Action {
  readonly type = LOAD_CATEGORIES_FAIL;
  constructor(public payload: Category[]) {}
}

export class LoadCategoriesSuccess implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {}
}

// Action types
export type CategoriesAction = LoadCategories | LoadCategoriesFail | LoadCategoriesSuccess;
