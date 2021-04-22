import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromCategories from '../reducers/category.reducer';
import { Category } from 'src/app/shared/interfaces/category.type';

// category state
export const getCategoryState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.categories
);

export const getCategoryEntities = createSelector(
  getCategoryState,
  fromCategories.getCategoriesEntities
);

export const getAllCategories = createSelector(
  getCategoryEntities,
  (entities) => Object.keys(entities).map((id) => entities[parseInt(id, 10)])
);

export const getCategoriesLoaded = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoaded
);

export const getCategoriesLoading = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoading
);
