import prisma from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

interface DashboardLayoutProps {
	children: React.ReactNode
	params: {
		storeId: string
	}
}

const DashboardLayout = async ({ children, params }: DashboardLayoutProps) => {
	const { userId } = auth()

	if (!userId) {
		redirect('/sign-in')
	}

	const store = await prisma.store.findFirst({
		where: {
			id: params.storeId,
			userId,
		},
	})

	if (!store) {
		redirect('/')
	}

	return <>{children}</>
}
export default DashboardLayout
