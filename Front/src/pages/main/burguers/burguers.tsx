import Head from '../../../components/headtitle/HeadTitle';
import Snacks from '../../../components/snacks/Snacks';
import { useSnacks } from '../../../services/hooks/useSnacks';

export default function Burguers() {
	const { burguers: data } = useSnacks();

	return (
		<>
			<Head title='Burguers'>Burguers</Head>
			<Snacks snacks={data}></Snacks>
		</>
	);
}
