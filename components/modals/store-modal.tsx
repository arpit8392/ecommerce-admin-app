'use client'

import Modal from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const StoreModal = () => {
	const { isOpen, onClose, onOpen } = useStoreModal()

	const router = useRouter()

	const [loading, setLoading] = useState(false)

	return (
		<Modal
			title='Create Store'
			description='Add a new store to manage products and categories'
			isOpen={isOpen}
			onClose={onClose}>
			<div>
				<div className='space-y-4 pt-2 pb-4'>
					<div className='space-y-2'>
						<p>Form to create the store</p>
					</div>
				</div>
			</div>
		</Modal>
	)
}
export default StoreModal
