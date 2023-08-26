import { createContext, useState } from 'react';
import { SnacksProps } from './interfaces';
import useSnacks from './hooks/useSnacks';
import { useNavigate } from 'react-router-dom';

// ========== Context Snacks ==========
interface SnackContextProps {
	burguers: SnacksProps[];
	pizzas: SnacksProps[];
	sodas: SnacksProps[];
	icecreams: SnacksProps[];
}

export const SnackContext = createContext({} as SnackContextProps);

export const SnackProvider = ({ children }: { children: React.ReactNode }) => {
	const burguers = useSnacks('burguers');
	const pizzas = useSnacks('pizzas');
	const sodas = useSnacks('sodas');
	const icecreams = useSnacks('icecreams');

	return (
		<SnackContext.Provider value={{ burguers, pizzas, sodas, icecreams }}>
			{children}
		</SnackContext.Provider>
	);
};

// ======== Context Cart ========
interface SnackCart extends SnacksProps {
	quantity: number;
	subtotal: number;
}

interface CartContextProps {
	cart: SnackCart[];
	addSnack: (snack: SnacksProps) => void;
	deleteSnack: (snack: SnacksProps) => void;
	incrementSnack: (snack: SnackCart) => void;
	decrementSnack: (snack: SnackCart) => void;
	confirmOrder: () => void;
	paymentOrder: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	const [cart, setCart] = useState<SnackCart[]>([]);

	function addSnack(snack: SnacksProps) {
		const snackAlreadyExist = cart.find((item) => item.name === snack.name);

		if (snackAlreadyExist) {
			const newCart = cart.map((item) => {
				if (item.name === snack.name) {
					const quantity = item.quantity + 1;
					const subtotal = quantity * snack.price;

					return { ...item, quantity, subtotal };
				}
				return item;
			});
			return setCart(newCart);
		}

		const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
		const newCart = [...cart, newSnack];
		setCart(newCart);
	}

	function deleteSnack(snack: SnacksProps) {
		const newCart = cart.filter((item) => !(item.name === snack.name));
		setCart(newCart);
	}

	function updateSnack(snack: SnackCart, newQuantity: number) {
		if (newQuantity == 0) return;

		const newCart = cart.map((item) => {
			if (item.name !== snack.name) return item;

			return {
				...item,
				quantity: newQuantity,
				subtotal: newQuantity * snack.price,
			};
		});
		setCart(newCart);
	}

	function incrementSnack(snack: SnackCart) {
		updateSnack(snack, snack.quantity + 1);
	}
	function decrementSnack(snack: SnackCart) {
		updateSnack(snack, snack.quantity - 1);
	}

	function confirmOrder() {
		navigate('/pagamento');
	}
	function paymentOrder() {
		navigate('/cart');
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addSnack,
				deleteSnack,
				incrementSnack,
				decrementSnack,
				confirmOrder,
				paymentOrder,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
