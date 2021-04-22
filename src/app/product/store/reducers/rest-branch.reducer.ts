import { Action, createReducer, on } from '@ngrx/store';
import { RestBranch } from 'src/app/shared/interfaces/rest-branch.type';
import * as fromRestBranch from '../actions/rest-branch.action';



export interface RestBranchState {
  entities: { [id: number]: RestBranch };
  loaded: boolean;
  loading: boolean;
}

export const initialState: RestBranchState = {
  entities: {},
  loaded: false,
  loading: false
};


export const reducer = (
  state = initialState,
  action: fromRestBranch.RestBranchAction
): RestBranchState => {
  switch (action.type) {
    case fromRestBranch.LOAD_RESTBRANCH: {
      return {
        ...state,
        loading: true
      };
    }
    case fromRestBranch.LOAD_RESTBRANCH_SUCCESS: {
      const categories = action.payload;
      const entities = categories.reduce(
        (_entities: { [id: number]: RestBranch }, restBranch: RestBranch) => ({
          ..._entities,
          [restBranch.id]: restBranch
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
    case fromRestBranch.LOAD_RESTBRANCH_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
};

export const getCategoriesLoading = (state: RestBranchState) => state.loading;
export const getCategoriesLoaded = (state: RestBranchState) => state.loaded;
export const getCategoriesEntities = (state: RestBranchState) => state.entities;
