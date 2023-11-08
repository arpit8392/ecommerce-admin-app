'use client'

import { DataTable } from '@/components/ui/data-table'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { useParams, useRouter } from 'next/navigation'
import { OrderColumn, columns } from './columns'

interface OrderClientProps {
	data: OrderColumn[]
}

const OrderClient = ({ data }: OrderClientProps) => {
	const params = useParams()
	const router = useRouter()

	return (
		<>
			<Heading
				title={`Orders (${data.length})`}
				description='Manage orders for your store'
			/>
			<Separator />
			<DataTable columns={columns} data={data} filterKey='products' />
		</>
	)
}
export default OrderClient
