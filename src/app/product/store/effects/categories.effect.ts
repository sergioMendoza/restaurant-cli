import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CategoryService } from '../../../shared/services/category.service';
import * as categoryActions from '../actions/category.action';
import { Category } from 'src/app/shared/interfaces/category.type';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryActions.LOAD_CATEGORIES),
      switchMap(() => this.categoryService.getAllCategories().pipe(
          map(
            (categories: Category[]) =>
              new categoryActions.LoadCategoriesSuccess(categories)
          ),
          catchError((error) =>
            of(new categoryActions.LoadCategoriesFail(error))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}
