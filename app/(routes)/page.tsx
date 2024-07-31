import getBillboard, { getBillboards } from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ContactSection from "@/components/contact";
import { CarouselPlugin } from "@/components/custom-carousel";
import ProductList from "@/components/product-list";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Billboard from "@/components/ui/billboard";

import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // const billboard = await getBillboard("32f47821-e9d8-4a1c-ae55-5e925e04903d");
  const billboards = await getBillboards();
  // console.log(products);

  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        {/* <Billboard data={billboard} /> */}
        <CarouselPlugin 
          data={billboards.map((billboard) => (
            <Billboard key={billboard.id} data={billboard} />
          ))}
        />
        {/* <Carousel items={products.map((item, index)=>
        <Card key={index} card={
          src: item.image,
        } index={index} layout={false} />
      )}/> */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
          <ProductList title="Featured Products" items={products} />
        </div>
        <div>
          <ContactSection />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
<div className="relative  w-full">

</div>