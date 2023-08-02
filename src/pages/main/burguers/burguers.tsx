import Head from "../../../components/headtitle/HeadTitle";
import Snacks from "../../../components/snacks/Snacks";
import useSnacks from "../../../services/useSnacks";

export default function Burguers() {
  const data = useSnacks("burguers");

  return (
    <>
      <Head title="Burguers">Burguers</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
