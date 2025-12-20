"use client";

import { DASHBOARD_PAGES } from "@/config/page-url.config";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardHeader,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AuthSchema } from "@/schemas/loginSchema";
import { authService } from "@/services/auth.service";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

export const Auth = () => {
    const router = useRouter();

    const [type, setType] = useState("password");
    const [isLoginForm, setIsLoginForm] = useState(true);

    const form = useForm<z.infer<typeof AuthSchema>>({
        resolver: zodResolver(AuthSchema),
    });

    const handleToggle = () => {
        if (type === "password") {
            setType("text");
        } else {
            setType("password");
        }
    };

    const mutation = useMutation({
        mutationKey: ["auth"],
        mutationFn: (data: z.infer<typeof AuthSchema>) =>
            authService.main(isLoginForm ? "login" : "register", data),
        onSuccess: () => {
            toast.success("Вход в систему!");
            form.reset();
            router.push("/i");
        },
        onError: (error: any) => {
            toast.error(error.response.data.message);
        },
    });

    const onSubmit: SubmitHandler<z.infer<typeof AuthSchema>> = (data) => {
        mutation.mutate(data);
    };

    return (
        <div className="flex min-h-screen">
            <Card className="w-1/4 m-auto shadow bg-zinc-800 rounded-xl border-black">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle>
                                <Heading title="Auth" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="grid gap-1 mb-3 border-border">
                                        <FormLabel className="text-lg leading-6 text-white">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                autoComplete="new-password"
                                                disabled={mutation.isPending}
                                                className="w-full text-white"
                                                placeholder="ivanivanovivanovich"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="grid gap-1 mb-3 border-border">
                                        <FormLabel className="text-lg leading-6 text-white">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <div className="relative inline-block w-full">
                                                <Input
                                                    {...field}
                                                    autoComplete="off"
                                                    disabled={
                                                        mutation.isPending
                                                    }
                                                    type={type}
                                                    placeholder="******"
                                                    className="w-full text-white"
                                                />
                                                <span
                                                    onClick={handleToggle}
                                                    className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                                                >
                                                    {type === "text" ? (
                                                        <Eye size={25} />
                                                    ) : (
                                                        <EyeOff size={25} />
                                                    )}
                                                </span>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="grid grid-cols-2 grid-flow-col gap-2 justify-center">
                            <Button onClick={() => setIsLoginForm(true)}>
                                Login
                            </Button>
                            <Button onClick={() => setIsLoginForm(false)}>
                                Register
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
};
