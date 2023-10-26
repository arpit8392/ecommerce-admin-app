import ModalProvider from '@/providers/modal-provider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'E-Commerce Dashboard',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<ModalProvider />
					<Toaster />
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
