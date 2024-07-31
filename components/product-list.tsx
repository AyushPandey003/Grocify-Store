import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import { Card, Carousel } from "./ui/apple-cards-carousel";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const data: Card[] = items.map((item) => ({
    itemKey: item.id,
    src: item.images[0].url,
    title: item.name,
    category: `$${item.price}`,
    content: <ProductCard key={item.id} data={item} />,
  }));
  return (
    <div className="space-y-4">
      <h3 className="flex flex-col font-bold text-3xl items-center justify-center">{title}</h3>
      {data.length === 0 && <NoResults />}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        <Carousel
          items={data.map((item) => (
            // <ProductCard key={item.id} data={item} />
            <Card key={item.itemKey} card={item} index={0} />
          ))}
        />
      {/* </div> */}
    </div>
  );
};

export default ProductList;
