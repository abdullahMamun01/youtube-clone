import { useSearchContext } from "../hooks/context/useSearchContext";
import { useSelectCategoryContext } from "../hooks/context/useSelectCategoryContext";
import { categories } from "../utils/constants";


export default function SearchTags() {
  const {selectCategory,setSelectCategory} = useSelectCategoryContext()
  const {setSearchTerm} = useSearchContext()
  const selectTags = selectCategory || 'All';
  const handleSelect = (tag) => {
    setSearchTerm("")
    setSelectCategory(tag)
  };

  return (
    <div className="w-full flex flex-row gap-4 max-[768px]:hidden">
   
        {categories.map((tag, i) => (
          <div
            key={i}
            onClick={() => handleSelect(tag)}
            className={`px-3 py-1  text-gray  ${
              selectTags === tag
                ? "transition ease-in-out delay-100 bg-secondary text-neutral "
                : "bg-neutral"
            } rounded-lg font-medium text-[14px] hover:cursor-pointer `}
          >
            {tag}
          </div>
        ))}

    </div>
  );
}
