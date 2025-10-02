import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
  onAddToCart
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          {badge && (
            <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground">
              {badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] mb-2 hover:text-secondary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center bg-accent text-accent-foreground text-xs px-1.5 py-0.5 rounded">
            <span className="font-semibold">{rating}</span>
            <Star className="h-3 w-3 ml-0.5 fill-current" />
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-foreground">
            Rs. {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rs. {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          size="sm"
          className="w-full bg-secondary hover:bg-secondary/90 text-white"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.();
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
