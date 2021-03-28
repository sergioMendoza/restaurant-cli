export interface Category {
  categoryId: number;
  categoryName: string;
  familyCode: string;
  points: number;
  color: string;
  isParentCategory: boolean;
  parentCategoryId?: number;
  delivery: boolean;
  selfService: boolean;
  active: boolean;
  restBranches: number[];
}
