import React from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import useClients from "../hooks/useClients"

export default function Home() {
	const {
		client,
		clients,
		isTableVisible,
		showTable,
		selectClient,
		deleteClient,
		saveClient,
		newClient,
	} = useClients()

	return (
		<div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
			<Layout title='Cadastro Simples'>
				{isTableVisible ? (
					<>
						<div className='w-full flex justify-end'>
							<Button className='mb-4' color='green' onClick={newClient}>
								Novo Cliente
							</Button>
						</div>
						<Table
							clients={clients}
							selectedClient={selectClient}
							removededClient={deleteClient}
						/>
					</>
				) : (
					<Form
						client={client}
						onCancel={() => showTable()}
						onSubmit={saveClient}
					/>
				)}
			</Layout>
		</div>
	)
}
