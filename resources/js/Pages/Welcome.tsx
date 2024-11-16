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

function LoginNav({ auth }: any) {
    return (
        <NavigationMenu className="fixed flex flex-row top-3   bg-inherit justify-around">
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

            <LoginNav auth={auth}/>
            <div className="flex h-1/3 w-full flex-col items-center justify-center">
               hello
            </div>
        </div>
    );
}
