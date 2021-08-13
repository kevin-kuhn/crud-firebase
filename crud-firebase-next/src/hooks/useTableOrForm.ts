import { useState } from "react"

const useTableOrForm = () => {
	const [visible, setVisible] = useState<"table" | "form">("table")

	const showTable = () => setVisible("table")

	const showForm = () => setVisible("form")

	return {
		isFormVisible: visible === "form",
		isTableVisible: visible === "table",
		showTable,
		showForm,
	}
}

export default useTableOrForm
