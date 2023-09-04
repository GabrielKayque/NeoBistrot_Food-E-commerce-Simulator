import { z } from 'zod';

export const paymentUserFormSchema = z.object({
	fullName: z
		.string()
		.nonempty('Nome e sobrenome obrigatórios')
		.min(3, 'Nome e sobrenome muito curto')
		.transform((name) =>
			name
				.trim()
				.split(' ')
				.map((palavra) => palavra[0].toUpperCase().concat(palavra.slice(1)))
				.join(' ')
		)
		.refine((nome) => {
			const nameRegex = /(\w.+\s).+/gi;
			// Testa pra ver se o primeiro nome tem letras e um espaço no final e depois se tem mais letras (Nome e sobrenome)
			return nameRegex.test(nome);
		}, 'Precisa conter nome e sobrenome'),
	email: z.string().nonempty('Email obrigatório').email('Email inválido'),
	mobile: z
		.string({ required_error: 'Celular obrigatório' })
		.min(15, 'Celular inválido')
		.transform((mobile) => {
			const numberRegex = /\D/g;
			// Remove as mascaras () e - ; deixa apenas os numeros
			return mobile.replace(numberRegex, '');
		}),
	document: z
		.string({ required_error: 'CPF ou CNPJ obrigatório' })
		.refine((document) => {
			if (document.length == 14 || document.length == 18) {
				return true;
			}
			return false;
		}, 'CPF ou CNPJ inválido')
		.transform((document) => {
			const numberRegex = /\D/g;
			return document.replace(numberRegex, '');
		}),
	zipCode: z
		.string({
			required_error: 'CEP obrigatório',
		})
		.min(9, 'CEP inválido')
		.transform((zipCode) => {
			const numberRegex = /\D/g;
			return zipCode.replace(numberRegex, '');
		}),
	street: z.string().nonempty('O endereço é obrigatório.'),
	number: z.string().nonempty('O número é obrigatório.'),
	complement: z.string(),
	neighborhood: z.string().nonempty('O bairro é obrigatório.'),
	city: z.string().nonempty('A cidade é obrigatória.'),
	state: z.string().nonempty('O estado é obrigatório.'),
	creditCardNumber: z
		.string({
			required_error: 'Número do cartão obrigatório',
		})
		.nonempty('O número do cartão é obrigatório.')
		.transform((val) => val.replace(/[^\d]+/g, '')),
	creditCardHolder: z
		.string()
		.nonempty('O nome do titular é obrigatório.')
		.min(3, 'O nome do titular deve ser completo.')
		.refine((nome) => {
			const nameRegex = /(\w.+\s).+/gi;
			return nameRegex.test(nome);
		}, 'Precisa conter nome e sobrenome'),
	creditCardExpiration: z
		.string({
			required_error: 'Data de validade obrigatória',
		})
		.nonempty('A data de validate é obrigatória.')
		.transform((value) => {
			const [month, year] = value.split('/');

			if (month && year && month.length === 2 && year.length === 2)
				return new Date(+`20${year}`, +month - 1, 1).toISOString();

			return value;
		})
		.refine((value) => new Date(value) >= new Date(), 'A data de validade é inválida.'),
	creditCardSecurityCode: z
		.string({
			required_error: 'Código de segurança obrigatório',
		})
		.nonempty('O CVV é obrigatório.')
		.min(3, 'O CVV deve possuir entre 3 e 4 dígitos.')
		.max(4, 'O CVV deve possuir entre 3 e 4 dígitos.')
		.transform((value) => value.replace(/[^\d]+/g, '')),
});

export type PaymentUserFormProps = z.infer<typeof paymentUserFormSchema>;
