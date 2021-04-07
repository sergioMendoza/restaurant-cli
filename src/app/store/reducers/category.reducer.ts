import { Action, createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/shared/interfaces/category.type';
import * as fromCategories from '../actions/category.action';

export interface CategoryState {
  data: Category[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  data: [],
  loaded: false,
  loading: false
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducer(
  state = initialState,
  action: fromCategories.CategoriesAction
): CategoryState {

  switch(action.type){
    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromCategories.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}


export const getCategoriesLoading = (state: CategoryState) => state.loading;
export const getCategoriesLoaded = (state: CategoryState) => state.loaded;
export const getCategories = (state: CategoryState) => state.data;
