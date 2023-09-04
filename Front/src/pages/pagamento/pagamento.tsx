import ConfirmOrder from '../../components/confirmorder/ConfirmOrder';
import Head from '../../components/headtitle/HeadTitle';
import OrderHeader from '../../components/orderheader/OrderHeader';
import { Form, MainTile, PagamentoContainer } from './pagamentostyle';
import { useCart } from '../../services/hooks/useCart';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { IMask, IMaskInput } from 'react-imask';
import { PaymentUserFormProps, paymentUserFormSchema } from './paymentUserFormValidation';

function Pagamento() {
	const { paymentOrder } = useCart();
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PaymentUserFormProps>({
		resolver: zodResolver(paymentUserFormSchema),
	});

	function onSubmit(data: PaymentUserFormProps) {
		paymentOrder(data);
	}
	return (
		<PagamentoContainer>
			<Head title='Pagamento' />
			<OrderHeader />
			<MainTile>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<Form onSubmit={handleSubmit(onSubmit)}>
					<h4>Informações Pessoais</h4>

					<div className='field'>
						<label htmlFor='full-name'>Nome e sobrenome</label>

						<input
							type='text'
							id='full-name'
							autoComplete='full-name'
							{...register('fullName')}
						/>

						{errors.fullName && <p className='error'>{errors.fullName.message}</p>}
					</div>

					<div className='grouped'>
						<div className='field'>
							<label htmlFor='mobile'>Celular</label>

							<Controller
								{...register('mobile')}
								control={control}
								render={({ field: { ref, ...field } }) => (
									<IMaskInput
										type='tel'
										id='mobile'
										autoComplete='phone'
										mask={['(00) 90000-0000']}
										{...field}
										inputRef={ref}
									/>
								)}
							/>
							{errors.mobile && <p className='error'>{errors.mobile.message}</p>}
						</div>

						<div className='field'>
							<label htmlFor='document'>CPF ou CNPJ</label>

							<Controller
								{...register('document')}
								control={control}
								render={({ field: { ref, ...field } }) => (
									<IMaskInput
										type='text'
										id='document'
										autoComplete='document'
										mask={[{ mask: '000.000.000-00' }, { mask: '00.000.000/0000-00' }]}
										{...field}
										inputRef={ref}
									/>
								)}
							/>
							{errors.document && <p className='error'>{errors.document.message}</p>}
						</div>

						<div className='field email'>
							<label htmlFor='email'>E-mail</label>
							<input
								type='email'
								id='email'
								autoComplete='email'
								{...register('email')}
							/>
							{errors.email && <p className='error'>{errors.email.message}</p>}
						</div>
					</div>

					<h4>Endereço de entrega</h4>

					<div className='field'>
						<label htmlFor='zipCode'>CEP</label>
						<Controller
							{...register('zipCode')}
							control={control}
							render={({ field: { ref, ...field } }) => (
								<IMaskInput
									type='text'
									id='zipCode'
									autoComplete='postal-code'
									style={{ width: '120px' }}
									mask={'00000-000'}
									{...field}
									inputRef={ref}
								/>
							)}
						/>
						{errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
					</div>

					<div className='grouped'>
						<div className='field'>
							<label htmlFor='street'>Endereço</label>
							<input
								id='street'
								autoComplete='street-address'
								{...register('street')}
							/>
							{errors.street && <p className='error'>{errors.street.message}</p>}
						</div>

						<div className='field'>
							<label htmlFor='number'>Número</label>
							<input
								id='number'
								{...register('number')}
							/>
							{errors.number && <p className='error'>{errors.number.message}</p>}
						</div>

						<div className='field'>
							<label htmlFor='complement'>Complemento</label>
							<input
								id='complement'
								{...register('complement')}
							/>
							{errors.complement && <p className='error'>{errors.complement.message}</p>}
						</div>
					</div>

					<div className='grouped'>
						<div className='field'>
							<label htmlFor='neighborhood'>Bairro</label>
							<input
								type='text'
								id='neighborhood'
								{...register('neighborhood')}
							/>
							{errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
						</div>

						<div className='field'>
							<label htmlFor='city'>Cidade</label>
							<input
								type='text'
								id='city'
								{...register('city')}
							/>
							{errors.city && <p className='error'>{errors.city.message}</p>}
						</div>

						<div className='field'>
							<label htmlFor='state'>Estado</label>
							<select
								id='state'
								{...register('state')}
							>
								<option value=''>Selecione</option>
								<option value='AC'>Acre</option>
								<option value='AL'>Alagoas</option>
								<option value='AP'>Amapá</option>
								<option value='AM'>Amazonas</option>
								<option value='BA'>Bahia</option>
								<option value='CE'>Ceará</option>
								<option value='ES'>Espírito Santo</option>
								<option value='GO'>Goiás</option>
								<option value='MA'>Maranhão</option>
								<option value='MT'>Mato Grosso</option>
								<option value='MS'>Mato Grosso do Sul</option>
								<option value='MG'>Minas Gerais</option>
								<option value='PA'>Pará</option>
								<option value='PB'>Paraíba</option>
								<option value='PR'>Paraná</option>
								<option value='PE'>Pernambuco</option>
								<option value='PI'>Piauí</option>
								<option value='RJ'>Rio de Janeiro</option>
								<option value='RN'>Rio Grande do Norte</option>
								<option value='RS'>Rio Grande do Sul</option>
								<option value='RO'>Rondônia</option>
								<option value='RR'>Roraima</option>
								<option value='SC'>Santa Catarina</option>
								<option value='SP'>São Paulo</option>
								<option value='SE'>Sergipe</option>
								<option value='TO'>Tocantins</option>
								<option value='DF'>Distrito Federal</option>
							</select>
							{errors.state && <p className='error'>{errors.state.message}</p>}
						</div>
					</div>

					<h4>Pagamento</h4>

					<div className='field'>
						<label htmlFor='credit-card-number'>Número do cartão</label>

						<Controller
							{...register('creditCardNumber')}
							control={control}
							render={({ field: { ref, ...field } }) => (
								<IMaskInput
									id='credit-card-number'
									type='text'
									autoComplete='cc-number'
									mask={'0000 0000 0000 0000'}
									{...field}
									inputRef={ref}
								/>
							)}
						/>
						{errors.creditCardNumber && (
							<p className='error'>{errors.creditCardNumber.message}</p>
						)}
					</div>

					<div className='field'>
						<label htmlFor='credit-card-holder-name'>Nome impresso no cartão</label>
						<input
							type='text'
							id='credit-card-holder-name'
							autoComplete='credit-card-holder-name'
							{...register('creditCardHolder')}
						/>
						{errors.creditCardHolder && (
							<p className='error'>{errors.creditCardHolder.message}</p>
						)}
					</div>

					<div className='grouped'>
						<div className='field'>
							<label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
							<Controller
								{...register('creditCardExpiration')}
								control={control}
								render={({ field: { ref, ...field } }) => (
									<IMaskInput
										type='text'
										id='credit-card-expiration'
										autoComplete='cc-exp'
										mask={[
											{
												mask: 'MM/YY',
												blocks: {
													MM: {
														mask: IMask.MaskedRange,
														from: 1,
														to: 12,
													},
													YY: {
														mask: IMask.MaskedRange,
														from: new Date().getFullYear() - 2000,
														to: 99,
													},
												},
											},
										]}
										{...field}
										inputRef={ref}
									/>
								)}
							/>

							{errors.creditCardExpiration && (
								<p className='error'>{errors.creditCardExpiration.message}</p>
							)}
						</div>

						<div className='field'>
							<label htmlFor='credit-card-code'>Código de segurança (CVV)</label>
							<Controller
								{...register('creditCardSecurityCode')}
								control={control}
								render={({ field: { ref, ...field } }) => (
									<IMaskInput
										type='text'
										id='credit-card-code'
										autoComplete='cc-csc'
										mask={[{ mask: '000' }, { mask: '0000' }]}
										{...field}
										inputRef={ref}
									/>
								)}
							/>
							{errors.creditCardSecurityCode && (
								<p className='error'>{errors.creditCardSecurityCode.message}</p>
							)}
						</div>
					</div>

					<ConfirmOrder pagamento={true} />
					{Object.keys(errors).length !== 0 && (
						<p className='error'>Alguns campos não foram preenchidos corretamente.</p>
					)}
				</Form>
			</MainTile>
		</PagamentoContainer>
	);
}

export default Pagamento;
