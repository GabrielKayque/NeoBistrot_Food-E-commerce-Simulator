import { useContext } from 'react';

import { SnackContext} from '../snackContext';

export function useSnacks() {
	return useContext(SnackContext);
}
