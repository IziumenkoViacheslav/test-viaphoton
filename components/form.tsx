"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { maxKgNutsCanTranspoted } from "@/lib/utils"

//TODO add validation for each line and check if input of each line is a number
const FormSchema = z.object({
    bio: z
        .string()
    // .min(10, {
    //     message: "Bio must be at least 10 characters.",
    // })
    // .max(160, {
    //     message: "Bio must not be longer than 30 characters.",
    // }),
})

export function TextareaForm() {
    const [result, setResult] = useState<string>("");
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const values = data.bio.split('\n');

        const [D, N, F, C] = values.map((value) => parseInt(value));
        const result = maxKgNutsCanTranspoted(D, N, F, C);

        setResult(result.toString());
    }

    return (
        <div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mt-52">
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Each line is of the
                                    form: D,N,F,C where D,N,F, C are integers in decimal notation.</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                {/* <FormDescription>
                                You can <span>@mention</span> other users and organizations.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            <span>{result}</span>
        </div>
    )
}
