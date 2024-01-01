/* eslint-disable react/prop-types */
import { Badge, Button, Card, Tooltip } from "keep-react";
import "./Product.css";
import { Heart, ShoppingCart } from "phosphor-react";

const Product = ({ product }) => {
  console.log(product);

  const { model, image, price, status, stock } = product;
  return (
    <div>
      <div>
        <Card
          className="max-w-[320px] overflow-hidden rounded-md"
          imgSrc={image}
          imgSize="md"
          imgStyle="p-5"
        >
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#1b629262] bg-[#1b629262]">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge
                size="xs"
                colorType="light"
                color="success"
                className="flex gap-3"
              >
                <span>{status}</span>
                <span>
                  {stock ? <span className="text-xs"> : {stock} </span> : null}
                </span>
              </Badge>
              <Card.Title className="!text-sm  text-[#191C1F]">
                ${price}
              </Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <Tooltip
                content="View details"
                trigger="hover"
                placement="top"
                animation="duration-300"
                style="dark"
                size="xs"
              >
                <Card.Title className="!text-xs text-[#191C1F] capitalize hover:text-red-500 duration-300 cursor-pointer">
                  {model?.slice(0, 35)}...
                </Card.Title>
              </Tooltip>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="xs" type="outlineGray" color={"error"}>
                <span className="pr-2 ">
                  <ShoppingCart size={18} />
                </span>
                Add To Cart
              </Button>
            </Card.Container>
          </Card.Container>
        </Card>
      </div>
    </div>
  );
};

export default Product;
