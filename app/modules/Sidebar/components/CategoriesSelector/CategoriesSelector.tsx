import { Checkbox } from "~/components/Checkbox";
import { Typography } from "~/components/Typography";
import { CategoriesSelectorContainer } from "./styles";

/**
 * Checkbox list of all categories where the user can
 * use to filter data.
 */
export const CategoriesSelector = (props: CategoriesSelectorProps) => {
  const { categories, handleCategoryClick, selectedCategories } = props;

  return (
    <CategoriesSelectorContainer>
      <Typography isDisabled>
        <strong>
          WIP!
          <br />
          Trabalhando nos filtros...
        </strong>
      </Typography>
      {categories.map((category) => (
        <Checkbox
          key={category.value}
          // onClick={() => handleCategoryClick(category.value)}
          label={category.label}
          checked={selectedCategories.includes(category.value)}
          category={category.value}
          isDisabled
        />
      ))}
    </CategoriesSelectorContainer>
  );
};

export interface CategoriesSelectorProps {
  /**
   * Categories that can be used to filter data
   */
  categories: { label: string; value: Category }[];
  /**
   * Function that runs when user clicks on a checkbox
   * @param category key of parent data object
   */
  handleCategoryClick(category: Category): void;
  /**
   * Categories that are currently checked by user.
   * This will probably comes from a global state later.
   */
  selectedCategories: Category[];
}
