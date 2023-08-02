import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";
import useSnacks from "../../../services/useSnacks";

export default function Sodas() {
  const data = useSnacks("sodas");

  return (
    <>
      <Head title="Drinks">Drinks</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
