import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";
import { useContext } from "react";
import { SnackContext } from "../../../services/context";

export default function Sodas() {
  const { sodas: data } = useContext(SnackContext);

  return (
    <>
      <Head title="Drinks">Drinks</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
