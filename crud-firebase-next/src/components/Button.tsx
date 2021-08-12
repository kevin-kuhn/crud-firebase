interface Props {
	color?: 'green' | 'blue' | 'gray'
	className?: string
}

const Button: React.FC<Props> = ({ color = 'gray', className, ...props }) => {
	return (
		<button className={`bg-gradient-to-r from-${color}-400 to-${color}-700 text-white px-4 py-2 rounded-md ${className}`}>{props.children}</button>
	)
}

export default Button