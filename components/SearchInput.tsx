"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	input: z.string().min(2).max(50),
});

const SearchInput = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			input: "",
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		router.push(`/search/${values.input}`);
		// console.log(values);
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 w-[130px]'>
				<FormField
					control={form.control}
					name='input'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Search...'
									{...field}
									className='placeholder:text-xs md:placeholder:text-sm'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type='submit' className='hidden'>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default SearchInput;
