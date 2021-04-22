import { Action, createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/shared/interfaces/category.type';
import * as fromCategories from '../actions/category.action';

export interface CategoryState {
  entities: { [id: number]: Category };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  entities: {},
  loaded: false,
  loading: false
};

export const reducer = (
  state = initialState,
  action: fromCategories.CategoriesAction
): CategoryState => {
  switch (action.type) {
    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCategories.LOAD_SELECTED_CATEGORY: {
      return {
        ...state,
      };
    }
    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      const categories = action.payload;
      const entities = categories.reduce(
        (_entities: { [id: number]: Category }, category: Category) => ({
          ..._entities,
          [category.id]: category
        }),
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
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
};

export const getCategoriesLoading = (state: CategoryState) => state.loading;
export const getCategoriesLoaded = (state: CategoryState) => state.loaded;
export const getCategoriesEntities = (state: CategoryState) => state.entities;
