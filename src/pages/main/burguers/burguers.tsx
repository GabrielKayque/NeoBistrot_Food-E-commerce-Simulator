import Head from "../../../components/headtitle/HeadTitle";
import Snacks from "../../../components/snacks/Snacks";

const data = [
  {
    id: 1,
    name: "Hambúrguer Clássico",
    description: "Pão, carne bovina, queijo cheddar, alface e molho especial.",
    price: 15.99,
    image: "https://i.imgur.com/upjIUnG.jpg",
  },
  {
    id: 2,
    name: "Hambúrguer Vegano",
    description:
      "Pão integral, hambúrguer de grão de bico, alface, tomate e maionese vegana.",
    price: 12.5,
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
