import { useGetCategoriesQuery } from "../../redux/features/api/categoryApi/categoryApi";
import Category from "../Category/Category";

const Categories = () => {
  const { data } = useGetCategoriesQuery();

  const categories = data?.data;

  console.log(categories);

  return (
    <div>
      <div>
        {categories?.map((category) => (
          <Category category={category} key={category._id}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
