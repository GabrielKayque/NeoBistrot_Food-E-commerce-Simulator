import Snacks from '../../../components/snacks/Snacks';
import Head from '../../../components/headtitle/HeadTitle';
import { useSnacks } from '../../../services/hooks/useSnacks';

export default function Sodas() {
	const { sodas: data } = useSnacks();

	return (
		<>
			<Head title='Drinks'>Drinks</Head>
			<Snacks snacks={data}></Snacks>
		</>
	);
}
