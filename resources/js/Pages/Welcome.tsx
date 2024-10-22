import VerticalTabs from "@/Components/_welcome/Tab_section";
import { PageProps, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Button, ButtonGroup } from "@mui/material";

function LoginNav(auth: any) {
    return (
        <nav className="relative flex flex-row">
            {auth.user ? (
                <>
                    <Button
                        color="primary"
                        variant="contained"
                        className="absolute right-4 top-4"
                        size="small"
                    >
                        <Link href={route("dashboard")}>Dashboard</Link>
                    </Button>
                </>
            ) : (
                <div className="absolute right-4 top-4 flex flex-row gap-3">
                    <Button color="primary" variant="contained" size="small">
                        <Link href={route("login")}>Log in</Link>
                    </Button>
                    <Button color="primary" variant="outlined" size="small">
                        <Link href={route("register")}>Register</Link>
                    </Button>
                </div>
            )}
        </nav>
    );
}

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <div className="h-screen w-screen">
            <Head title="Welcome" />

            <LoginNav auth={auth} />
            <div className="flex h-1/3 w-full flex-col items-center justify-center">
                <VerticalTabs />
                
            </div>
        </div>
    );
}
