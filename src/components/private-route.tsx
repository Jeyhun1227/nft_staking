import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUserAsJson } from "@/services/parse/functions/user";

import {FullPageLoader} from '@/components/full-page-loader';

export function PrivateRoute({ protectedRoutes, children }:{protectedRoutes:string[], children:JSX.Element}) {
    const router = useRouter();
    const currentUserSigned = getCurrentUserAsJson()

    const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        if (!currentUserSigned && pathIsProtected) {
            // Redirect route, you can point this to /login
            router.push('/sign-in');
        }
    }, [currentUserSigned, pathIsProtected]);

    if (!currentUserSigned && pathIsProtected) {
        return <FullPageLoader />;
    }

    return children;
}
