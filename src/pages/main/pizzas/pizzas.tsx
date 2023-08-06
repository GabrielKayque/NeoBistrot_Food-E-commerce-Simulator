import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";
import { useContext } from "react";
import { SnackContext } from "../../../services/context";

export default function Pizzas() {
  const { pizzas: data } = useContext(SnackContext);

  return (
    <>
      <Head title="Pizzas">Pizzas</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
