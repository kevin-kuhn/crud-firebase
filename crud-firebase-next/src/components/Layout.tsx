import Title from "./Title"

interface Props {
	title: string;
}

const Layout: React.FC<Props> = props => {
	return (
		<div className='flex flex-col w-2/3 bg-white text-gray-800 rounded-md'>
			<Title>
				<span>{props.title}</span>
			</Title>
			<div className="p-6">{props.children}</div>
		</div>
	)
}

export default Layout
