import React, { useState } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
	const [clients, setClients] = useState([
		new Client("ads", 23, "21"),
		new Client("ads2", 134, "21"),
		new Client("ads3", 12, "21"),
		new Client("ads4", 765, "21"),
	])

	const selectedClient = (client: Client) => {
		console.log(client)
	}

	const removededClient = (client: Client) => {
		console.log(client)
	}

	return (
		<div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
			<Layout title='Cadastro Simples'>
				<div className='w-full flex justify-end'>
					<Button className='mb-4' color='green'>
						Novo Cliente
					</Button>
				</div>
				<Table
					clients={clients}
					selectedClient={selectedClient}
					removededClient={removededClient}
				></Table>
			</Layout>
		</div>
	)
}
