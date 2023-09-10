import { createContext } from 'react';
import { SnacksProps } from './interfaces';
import { useState, useEffect } from 'react';
import api from './api';

interface SnackContextProps {
	burguers: SnacksProps[];
	pizzas: SnacksProps[];
	sodas: SnacksProps[];
	icecreams: SnacksProps[];
}

function useRequestSnackApi(snacktype: string) {
	const [snacks, setSnacks] = useState<SnacksProps[]>([]);

	useEffect(() => {
		void (async () => {
			const snacksRequest = await api.get(`/${snacktype}`);
			setSnacks(snacksRequest.data as SnacksProps[]);
		})();
	}, [snacktype]);

	return snacks;
}

export const SnackContext = createContext({} as SnackContextProps);

export const SnackProvider = ({ children }: { children: React.ReactNode }) => {
	const burguers = useRequestSnackApi('burguers');
	const pizzas = useRequestSnackApi('pizzas');
	const sodas = useRequestSnackApi('sodas');
	const icecreams = useRequestSnackApi('icecreams');

	return (
		<SnackContext.Provider value={{ burguers, pizzas, sodas, icecreams }}>
			{children}
		</SnackContext.Provider>
	);
};
