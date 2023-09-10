import { createContext, useState } from 'react';
import { SnacksProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
import { PaymentUserFormProps as CustomerData } from '../pages/pagamento/paymentUserFormValidation';

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
	paymentOrder: (customer: CustomerData) => void;
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();

	const localStorageKey = '@NeoBistrotCart';
	const [cart, setCart] = useState<SnackCart[]>(() => {
		const value = localStorage.getItem(localStorageKey);
		if (value) return JSON.parse(value) as SnackCart[];
		return [];
	});

	function saveCart(items: SnackCart[]) {
		setCart(items);
		localStorage.setItem(localStorageKey, JSON.stringify(items));
	}

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
			return saveCart(newCart);
		}

		const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
		const newCart = [...cart, newSnack];
		saveCart(newCart);
	}

	function deleteSnack(snack: SnacksProps) {
		const newCart = cart.filter((item) => !(item.name === snack.name));
		saveCart(newCart);
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
		saveCart(newCart);
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
	function paymentOrder(data: CustomerData) {
		console.log('Itens', cart, 'Cliente', data);
		localStorage.removeItem(localStorageKey);
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
