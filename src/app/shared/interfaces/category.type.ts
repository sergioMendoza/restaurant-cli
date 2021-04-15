export interface Category {
  id: number;
  categoryName: string;
  familyCode: string;
  points: number;
  color: string;
  isParentCategory: boolean;
  parentId: number;
  delivery: boolean;
  selfService: boolean;
  active: boolean;
  restBranches: number[];
}
