import Snacks from '../../../components/snacks/Snacks';
import Head from '../../../components/headtitle/HeadTitle';
import { useSnacks } from '../../../services/hooks/useSnacks';

export default function Pizzas() {
	const { pizzas: data } = useSnacks();

	return (
		<>
			<Head title='Pizzas'>Pizzas</Head>
			<Snacks snacks={data}></Snacks>
		</>
	);
}
