interface Props {
	text: string
	value: any
	readOnly?: boolean
	type?: "text" | "number"
	className?: string
	onChange?: (value: any) => void
}

const Input: React.FC<Props> = props => {
	return (
		<div className={`flex flex-col ${props.className ?? ''}`}>
			<label htmlFor='' className='mb-2'>
				{props.text}
			</label>
			<input
				className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 ${
					props.readOnly ? "" : "focus:bg-white"
				}`}
				type={props.type ?? "text"}
				value={props.value}
				readOnly={props.readOnly}
				onChange={e => props.onChange?.(e.target.value)}
			/>
		</div>
	)
}

export default Input
