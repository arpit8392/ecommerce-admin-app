interface StoreIdPageProps {
	params: {
		storeId: string
	}
}

const StoreIdPage = ({ params }: StoreIdPageProps) => {
	return <div>{params.storeId}</div>
}
export default StoreIdPage
