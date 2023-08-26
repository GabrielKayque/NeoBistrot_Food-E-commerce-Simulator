import Head from "../../../components/headtitle/HeadTitle";
import Snacks from "../../../components/snacks/Snacks";
import { useContext } from "react";
import { SnackContext } from "../../../services/context";

export default function Burguers() {
  const { burguers: data } = useContext(SnackContext);

  return (
    <>
      <Head title="Burguers">Burguers</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
