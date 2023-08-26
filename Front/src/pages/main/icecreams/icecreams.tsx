import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";
import { useContext } from "react";
import { SnackContext } from "../../../services/context";

export default function IceCreams() {
  const { icecreams: data } = useContext(SnackContext);

  return (
    <>
      <Head title="Ice creams">Ice Creams</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
