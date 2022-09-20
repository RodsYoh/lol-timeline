import { useState } from "react";
import { Logo } from "~/components/Logo/Logo";
import { CategoriesSelector } from "./components/CategoriesSelector/CategoriesSelector";
import { SidebarContainer } from "./styles";

/**
 * Main sidebar with Logo and Checkbox filtering categories.
 *
 * On mobile, this sidebar becomes a header.
 */
export const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  function handleChange(category: Category) {
    if (selectedCategories.includes(category)) {
      const newArr = [...selectedCategories].filter((cat) => cat !== category);
      setSelectedCategories(newArr);
    } else {
      setSelectedCategories((c) => [...c, category]);
    }
  }

  console.log(selectedCategories);

  return (
    <SidebarContainer>
      <Logo width="40" />
      <CategoriesSelector
        categories={[
          { value: "skins", label: "Skins" },
          { value: "changes", label: "Changes" },
          { value: "champions", label: "Champions" },
          { value: "pbe", label: "PBE" },
          { value: "release", label: "Release Notes" },
          { value: "rumor", label: "Rumor" },
        ]}
        handleCategoryClick={handleChange}
        selectedCategories={selectedCategories}
      />
    </SidebarContainer>
  );
};
