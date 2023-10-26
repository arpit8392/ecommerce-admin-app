'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Modal from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'

const formSchema = z.object({
	name: z.string().min(1),
})

const StoreModal = () => {
	const { isOpen, onClose } = useStoreModal()
	const router = useRouter()

	const [loading, setLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true)
			const response = await axios.post('/api/stores', values)

			// TODO: this isn't closing the modal:: need to analyze, why?
			// router.push(`/${response.data.id}`)
			// onClose()

			window.location.assign(`/${response.data.id}`)
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong!')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Modal
			title='Create Store'
			description='Add a new store to manage products and categories'
			isOpen={isOpen}
			onClose={onClose}>
			<div>
				<div className='space-y-4 pt-2 pb-4'>
					<div className='space-y-2'>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													placeholder='E-Commerce'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className='pt-6 space-x-2 flex items-center justify-end w-full'>
									<Button
										disabled={loading}
										type='button'
										variant='outline'
										onClick={onClose}>
										Cancel
									</Button>
									<Button disabled={loading} type='submit'>
										Continue
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</Modal>
	)
}
export default StoreModal
