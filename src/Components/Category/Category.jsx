/* eslint-disable react/prop-types */
import { Dropdown } from "keep-react";

const Category = ({ category }) => {
  //   console.log(category);

  const { children } = category;
  return (
    <div>
      <div>
        {children?.map((item) => (
          <>
            <Dropdown
              label={item?.name}
              size="sm"
              type="primary"
              dismissOnClick={true}
            >
              {item?.children?.map((subCategory) => (
                <>
                  <div key={subCategory._id}>
                    <Dropdown.Item>{subCategory.name}</Dropdown.Item>
                  </div>
                </>
              ))}
              {/* <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item> */}
            </Dropdown>
            {/* <div>{item?.name}</div> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
