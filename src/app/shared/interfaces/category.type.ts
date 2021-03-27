export interface Category {
  categoryId: number;
  categoryName: string;
  familyCode?: string;
  points?: number;
  color?: string;
  orderNumber?: number;
  isSubCategory?: boolean;
  delivery?: boolean;
  selfService?: boolean;
  active: boolean;
}
