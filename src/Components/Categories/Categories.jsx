/* eslint-disable react/prop-types */
import { useGetCategoriesQuery } from "../../redux/features/api/categoryApi/categoryApi";
import Category from "../Category/Category";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const { data } = useGetCategoriesQuery();

  const categories = data?.data;

  return (
    <div>
      <div className="grid grid-cols-6 justify-between items-center gap-3  ">
        {categories?.map((category) => (
          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            category={category}
            key={category._id}
          ></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
