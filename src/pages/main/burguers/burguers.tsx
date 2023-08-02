import Head from "../../../components/headtitle/HeadTitle";
import Snacks from "../../../components/snacks/Snacks";

const data = [
  {
    id: 1,
    name: "Hambúrguer Triplo",
    description: "Pão, 3 carnes bovinas, queijo cheddar e molho especial.",
    price: 19.99,
    image: "https://i.imgur.com/upjIUnG.jpg",
  },
  {
    id: 2,
    name: "Hambúrguer Vegano",
    description: "Pão, bacon crocante, queijo cheddar e molho barbecue.",
    price: 16.5,
    image: "https://i.imgur.com/B4J04AJ.jpg",
  },
];

export default function Burguers() {
  return (
    <>
      <Head title="Burguers">Burguers</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
