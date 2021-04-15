import {
  ActionReducerMap,
  createFeatureSelector,
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

