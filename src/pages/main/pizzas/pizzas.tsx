import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";
import useSnacks from "../../../services/useSnacks";

export default function Pizzas() {
  const data = useSnacks("pizzas");

  return (
    <>
      <Head title="Pizzas">Pizzas</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
