import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import { IProduct } from "@/lib/features/product/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { addToCart } from "@/lib/features/cart/cartSlice";

function FoodCard({ product }: { product: IProduct }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card sx={{ maxWidth: 345 }} className="px-2">
      <CardActionArea>
        <Image
          alt=""
          src={product.image_url}
          width={100}
          height={100}
          layout="responsive"
          className="object-cove"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.desc}
          </Typography>
          <p className="text-red-500 mt-3 font-bold ">{product.price} đ</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          className=" text-lg bg-green-500 hover:bg-green-600 text-white"
          onClick={() => dispatch(addToCart(product))}
        >
          Add cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default FoodCard;
