import React, { useState } from "react"
import Client from "../core/Client"
import Button from "./Button"
import Input from "./Input"

interface Props {
	client: Client
	onSubmit?: (client: Client) => void
	onCancel?: () => void
}

const Form: React.FC<Props> = props => {
	const id = props.client?.id
	const [name, setName] = useState(props.client?.name ?? "")
	const [age, setAge] = useState(props.client?.age ?? 0)

	return (
		<div>
			{id && <Input text='Código' value={id} className='mb-5' readOnly />}
			<Input text='Nome' value={name} onChange={setName} className='mb-5' />
			<Input text='Idade' value={age} onChange={setAge} type='number' />
			<div className='flex justify-end mt-7'>
				<Button
					color='blue'
					className='mr-2'
					onClick={() => props.onSubmit(new Client(name, age, id))}
				>
					{id ? "Alterar" : "Salvar"}
				</Button>
				<Button color='gray' onClick={props.onCancel}>
					Cancelar
				</Button>
			</div>
		</div>
	)
}

export default Form
