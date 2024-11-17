import { Button } from "@/Components/ui/button";
import { PageProps, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/Components/ui/navigation-menu";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";


function LoginNav({ auth }: any) {
    return (
        <NavigationMenu className=" flex flex-row py-3  bg-inherit justify-around">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={route("welcome")}>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={route("trainers")}>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Trainers
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={route("about")}>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {auth.user ? (
                    //  logged in
                    <NavigationMenuItem>
                        <Button variant={"default"} asChild>
                            <Link
                                href={route("dashboard")}
                                className="absolute right-4 top-4"
                            >
                                Dashboard
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                ) : (
                    //  not logged in

                    <>
                        <NavigationMenuItem className="ps-10 pe-3">
                            <Button variant={"default"} asChild>
                                <Link href={route("login")}>Log in</Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant={"default"} asChild>
                                <Link href={route("register")}>Register</Link>
                            </Button>
                        </NavigationMenuItem>
                    </>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <div className="h-screen w-screen">
            <Head title="Welcome" />

            <LoginNav auth={auth} />
            <main className="text-center pb-5">
                <h1 className="text-6xl font-bold py-3">
                    Welcome to Trainer Finder
                </h1>
                <h3 className="text-3xl font-bold">
                    Your ultimate destination for all things sports!
                </h3>
            </main>
            <section>
                <h2 className="py-7 text-center text-4xl font-bold">
                    {" "}
                    Featured Sports
                </h2>
                <div className="flex h-1/3 w-full flex-row items-center justify-center gap-x-7">
                    <Card className="flex min-w-72 flex-col gap-9 px-4">
                        <CardTitle className="pt-3 text-center">
                            Basketball
                        </CardTitle>
                        <CardContent className="max-w-prose pb-3">
                            Join us for the latest news, scores, and events.
                        </CardContent>
                    </Card>
                    <Card className="flex min-w-72 flex-col gap-9 px-4">
                        <CardTitle className="py-3 text-center">
                            Soccer
                        </CardTitle>
                        <CardContent className="max-w-prose pb-3">
                            Get updates on your favorite teams and matches.
                        </CardContent>
                    </Card>
                    <Card className="flex min-w-72 flex-col gap-9 px-4">
                        <CardTitle className="py-3 text-center">
                            Fitness
                        </CardTitle>
                        <CardContent className="max-w-prose pb-3">
                            Find workout tips, routines, and personal trainers,
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
