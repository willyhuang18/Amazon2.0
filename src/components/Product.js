import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATTING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATTING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div>
      <p>{category}</p>

      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
    </div>
  );
}

export default Product;
