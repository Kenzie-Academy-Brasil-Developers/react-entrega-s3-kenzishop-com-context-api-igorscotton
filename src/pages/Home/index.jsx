import CardProduct from "../../components/CardProduct";
import { ShowCase } from "./style";
import { useEffect } from "react";
import { useShowCase } from "../../providers/products/context";

const Home = () => {
  const { showCase, showCaseRequest } = useShowCase();  

  useEffect(() => {
    showCaseRequest();
  }, []);

  return (
    <ShowCase>
      {showCase &&
        showCase.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
    </ShowCase>
  );
};

export default Home;
