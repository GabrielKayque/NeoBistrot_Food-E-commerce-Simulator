import { useCart } from '../../services/hooks/useCart';
import { Container } from './ConfirmOrderstyle';
import currencyFormat from '../../services/currencyFormat';
function ConfirmOrder({ pagamento = false }: { pagamento?: boolean }) {
	const { cart, confirmOrder } = useCart();
	const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

	return (
		<Container>
			{!pagamento ? (
				<button
					type='button'
					onClick={confirmOrder}
				>
					Finalizar Pedido
				</button>
			) : (
				<button type='submit'>Pagar</button>
			)}
			<span>
				Total <strong>{currencyFormat(totalAmount)}</strong>
			</span>
		</Container>
	);
}

export default ConfirmOrder;
