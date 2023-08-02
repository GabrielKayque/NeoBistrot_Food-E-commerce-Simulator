import Snacks from "../../../components/snacks/Snacks";
import Head from "../../../components/headtitle/HeadTitle";
import useSnacks from "../../../services/useSnacks";

export default function IceCreams() {
  const data = useSnacks("icecreams");

  return (
    <>
      <Head title="Ice creams">Ice Creams</Head>
      <Snacks snacks={data}></Snacks>
    </>
  );
}
