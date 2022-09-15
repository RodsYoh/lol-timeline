import { Checkbox } from "~/components/Checkbox";
import { CategoriesSelectorContainer } from "./styles";

export const CategoriesSelector = (props: CategoriesSelectorProps) => {
  const { categories, handleCategoryClick, selectedCategories } = props;

  return (
    <CategoriesSelectorContainer>
      {categories.map((category) => (
        <Checkbox
          key={category.value}
          onClick={() => handleCategoryClick(category.value)}
          label={category.label}
          checked={selectedCategories.includes(category.value)}
          category={category.value}
        />
      ))}
    </CategoriesSelectorContainer>
  );
};

export interface CategoriesSelectorProps {
  categories: { label: string; value: Category }[];
  handleCategoryClick(category: Category): void;
  selectedCategories: Category[];
}
