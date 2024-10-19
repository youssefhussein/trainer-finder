import { PageProps, User } from "@/types";
import { Head, Link } from "@inertiajs/react";

function LoginNav(auth: any) {
    return (
        <nav className="flex flex-row gap-3 bg-white text-center text-red-950">
            {auth.user ? (
                <Link href={route("dashboard")}>Dashboard</Link>
            ) : (
                <>
                    <Link href={route("login")}>Log in</Link>
                    <Link href={route("register")}>Register</Link>
                </>
            )}
        </nav>
    );
}

function Classes() {
    return (
        <section>
            <header className="font-bold">
                {" "}
                Our <span className="text-red-950">classes</span>
            </header>
        </section>
    );
}

export default function Welcome({ auth }: PageProps<{}>) {
    console.log(typeof auth);
    return (
        <>
            <Head title="Welcome" />

            <LoginNav auth={auth} />
            <Classes />
        </>
    );
}
