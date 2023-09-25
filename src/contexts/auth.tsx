import React, { createContext, useContext, useState, useEffect } from 'react';
import { logInWithGoogle , registerWithGoogle, logOutService, loginService, registerService, getCurrentUser, updateAvatarImage, updateUserService, resetPasswordService, createWallet, getAsyncCurrentUser} from "@/services/parse/functions/auth";
import { deleteAccount as  deleteAccountService} from "@/services/parse/functions/cloud";
import { getCurrentUserAsJson } from "@/services/parse/functions/user";
import { IProfile } from "@/props/IProfile"

export type GlobalAuth = {
    isAuthenticated:boolean;
    user:IProfile | null,
    logIn:({ email, password } : { email:string, password:string }) => Promise<any>;
    register:( {email, password, firstName, lastName, birthDate} : { email:string, password:string, firstName:string, lastName:string, birthDate:Date}) => any;
    updateProfile:( {email, firstName, lastName} : { email:string, firstName:string, lastName:string}) => any;
    resetPassword:(email?:string) => Promise<any>;
    deleteAccount:() => Promise<string>;
    logOut:() => Promise<any>;
    getLoggedUser:() => IProfile;
    getLoggedAsyncUser:() => Promise<IProfile>;
    logInGoogle:(code:string) => Promise<any>;
    registerGoogle:(code:string) => Promise<any>;
    updateAvatar: (fileName:string, file: File) => any;
    isLoading:boolean;
  }

const AuthContext = createContext({} as GlobalAuth);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<IProfile | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const currentUserSigned = getCurrentUserAsJson();
        if (currentUserSigned) {
            setIsAuthenticated(true);
            setUser(currentUserSigned);
        }
        setIsLoading(false);
    }, []);

    const logInGoogle = async (code:string) => {
        setIsAuthenticated(true);
        let signeduser = await logInWithGoogle({ code });
        setUser(signeduser);
        return signeduser;
    }

    const registerGoogle = async (code:string) => {
        setIsAuthenticated(true);
        let signeduser = await registerWithGoogle({ code });
        createWallet();
        setUser(signeduser);
        return signeduser;
    }

    const updateProfile = async ({email, firstName, lastName} : { email:string, firstName:string, lastName:string}) => {
        let updatedUser = await updateUserService({email, firstName, lastName} );
        return updatedUser;
    }

    const updateAvatar = async (fileName: string, file: File) => {
        let signeduser = await updateAvatarImage(fileName, file);
        setUser(signeduser);
    }

    const register = async ( {email, password, firstName, lastName, birthDate} : { email:string, password:string, firstName:string, lastName:string, birthDate:Date}) => {
        setIsAuthenticated(true);
        let currentUserSigned = await registerService({email, password, firstName, lastName, birthDate} );

        if (currentUserSigned) {
            createWallet();
            setIsAuthenticated(true);
            setUser(currentUserSigned);
        }
        return currentUserSigned
    }

    const logOut = async () => {
        setIsAuthenticated(false);
        setUser(null);
        return logOutService()
    }

    const resetPassword = async (email?:string) => {
        let currentUserSigned = await resetPasswordService(email);
        return currentUserSigned;
    }

    const getLoggedUser = () => {
        const currentUser = getCurrentUser();
        return currentUser as unknown as IProfile;
    }

    const getLoggedAsyncUser = async () => {
        const currentUser = await getAsyncCurrentUser();
        return currentUser as unknown as IProfile;
    }

    const deleteAccount = async () => {
        const result = await deleteAccountService();
        return result;
    }

    const logIn = async ({ email, password } : { email:string, password:string }) => {
        setIsAuthenticated(true);
        let currentUserSigned = await loginService({ email, password });
        if (currentUserSigned) {
            setIsAuthenticated(true);
            setUser(currentUserSigned);
        }
        return currentUserSigned
    }
    
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                isLoading,
                logInGoogle,
                registerGoogle,
                register,
                logIn,
                logOut,
                updateProfile,
                getLoggedUser,
                resetPassword,
                deleteAccount,
                updateAvatar,
                getLoggedAsyncUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
