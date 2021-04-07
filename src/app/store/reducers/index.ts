import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromCategories from './category.reducer';

export interface ProductsState {
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  categories: fromCategories.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// category state
export const getCategoryState = createSelector(
  getProductsState,
  (state: ProductsState) => state.categories
);

export const getAllCategories = createSelector(
  getCategoryState,
  fromCategories.getCategories
);

export const getCategoriesLoaded = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoaded
);

export const getCategoriesLoading = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoading
);
