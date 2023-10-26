import prisma from '@/lib/prismadb'
import BillboardClient from './components/client'

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
	// const billboards = await prisma.billboard.findMany({
	// 	where: {
	// 		storeId: params.storeId,
	// 	},
	// 	orderBy: {
	// 		createdAt: 'desc',
	// 	},
	// })

	return (
		<div className='flex flex-col'>
			<div className='flex-1 space-y-4 p-8 pt-6'>
				<BillboardClient data={[]} />
			</div>
		</div>
	)
}
export default BillboardsPage
