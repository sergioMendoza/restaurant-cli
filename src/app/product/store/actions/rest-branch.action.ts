import { Action, createAction, props } from '@ngrx/store';
import { RestBranch } from 'src/app/shared/interfaces/rest-branch.type';

// Load categories
export const LOAD_RESTBRANCH = '[RestBranch] Load RestBranch';
export const LOAD_RESTBRANCH_FAIL = '[RestBranch] Load RestBranch Fail';
export const LOAD_RESTBRANCH_SUCCESS = '[RestBranch] Load RestBranch Success';

export class LoadRestBranch implements Action {
  readonly type = LOAD_RESTBRANCH;
}
export class LoadRestBranchFail implements Action {
  readonly type = LOAD_RESTBRANCH_FAIL;
  constructor(public payload: any) {}
}
export class LoadRestBranchSuccess implements Action {
  readonly type = LOAD_RESTBRANCH_SUCCESS;
  constructor(public payload: RestBranch[]) {}
}

// Action types
export type RestBranchAction =
  | LoadRestBranch
  | LoadRestBranchFail
  | LoadRestBranchSuccess;
