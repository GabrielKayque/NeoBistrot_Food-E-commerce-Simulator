import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";

const data = [
  {
    id: 1,
    name: "Bebida Triplo",
    description: "Pão, 3 carnes bovinas, queijo cheddar e molho especial.",
    price: 19.99,
    image: "https://i.imgur.com/upjIUnG.jpg",
  },
  {
    id: 2,
    name: "Bebida Vegano",
    description: "Pão, bacon crocante, queijo cheddar e molho barbecue.",
    price: 16.5,
    image: "https://i.imgur.com/B4J04AJ.jpg",
  },
  {
    id: 3,
    name: "Bebida Vegano",
    description: "Pão, bacon crocante, queijo cheddar e molho barbecue.",
    price: 13.5,
    image: "https://i.imgur.com/B4J04AJ.jpg",
  },
];
export default function Sodas() {
  return (
    <>
      <Head title="Drinks">Drinks</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
