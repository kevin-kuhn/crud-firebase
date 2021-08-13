import { useEffect, useMemo, useState } from "react"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import ClientCollection from "../firebase/db/ClientCollection"
import useTableOrForm from "./useTableOrForm"

const useClients = () => {
	const { isTableVisible, showTable, showForm } = useTableOrForm()

	const [clients, setClients] = useState([])
	const [client, setClient] = useState<Client>(Client.empty())

	const repo: ClientRepository = useMemo(() => new ClientCollection(), [])

	const getAll = () => {
		repo.getAll().then(clients => {
			setClients(clients)
			showTable()
		})
	}

	useEffect(getAll, [repo])

	const selectClient = (client: Client) => {
		setClient(client)
		showForm()
	}

	const deleteClient = async (client: Client) => {
		await repo.delete(client)
		getAll()
	}

	const saveClient = async (client: Client) => {
		await repo.save(client)
		getAll()
	}

	const newClient = () => {
		setClient(Client.empty())
		showForm()
	}

	return {
		client,
		clients,
		isTableVisible,
		showTable,
		saveClient,
		selectClient,
		deleteClient,
		newClient,
		getAll,
	}
}

export default useClients
