import Snacks from '../../../components/snacks/Snacks';
import Head from '../../../components/headtitle/HeadTitle';
import { useSnacks } from '../../../services/hooks/useSnacks';

export default function IceCreams() {
	const { icecreams: data } = useSnacks();

	return (
		<>
			<Head title='Ice creams'>Ice Creams</Head>
			<Snacks snacks={data}></Snacks>
		</>
	);
}
