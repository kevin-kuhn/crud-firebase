import { useMemo } from "react"
import Client from "../core/Client"
import { EditIcon, TrashIcon } from "./Icons"

interface Props {
	clients: Client[]
	selectedClient?: (client: Client) => void
	removededClient?: (client: Client) => void
}

const Table: React.FC<Props> = props => {
	const showActions = useMemo(
		() => !!props.selectedClient || !!props.removededClient,
		[props.selectedClient, props.removededClient]
	)

	const renderHeader = () => {
		return (
			<tr>
				<th className='text-left p-4'>Codigo</th>
				<th className='text-left p-4'>Nome</th>
				<th className='text-left p-4'>Idade</th>
				{showActions && <th className='p-4'>Ações</th>}
			</tr>
		)
	}

	const renderActions = (client: Client) => {
		return (
			<td className='flex justify-center'>
				{props.selectedClient && (
					<button
						onClick={() => props.selectedClient?.(client)}
						className='flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1'
					>
						{EditIcon}
					</button>
				)}
				{props.removededClient && (
					<button
						onClick={() => props.removededClient?.(client)}
						className='flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1'
					>
						{TrashIcon}
					</button>
				)}
			</td>
		)
	}

	const renderData = () => {
		return props.clients?.map((client, index) => (
			<tr
				key={client.id}
				className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
			>
				<td className='text-left p-4'>{client.id}</td>
				<td className='text-left p-4'>{client.name}</td>
				<td className='text-left p-4'>{client.age}</td>
				{showActions && renderActions(client)}
			</tr>
		))
	}

	return (
		<table className='w-full rounded-xl overflow-hidden'>
			<thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'>
				{renderHeader()}
			</thead>
			<tbody>{renderData()}</tbody>
		</table>
	)
}

export default Table
