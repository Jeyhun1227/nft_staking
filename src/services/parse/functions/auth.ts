import { Cloud, User } from 'parse'
import cloud from '../cloud'

export const getAuthLink = async (action:string) => {
    try {
      const res = await Parse.Cloud.run( cloud.api.getAuthLink.name , { action:action });
      return res
    } catch (error) {
      
    }
  };
  
export const registerWithGoogle = async (params:any) => {
  try {
    const res = await Cloud.run('googleToken', {...params, action: 'register'});
    const user = new User();
      
      const authData = {
      'id': res.id,
      'access_token': res.access_token,
      'id_token':res.id_token
      };

      await user.linkWith('google', { authData });

      let signeduser =  await user.save();

      let userAsJson = signeduser?.toJSON();

      return {email:userAsJson?.email};;

  } catch (error:any) {
    throw new Error(error.message);
  }
};

export const logInWithGoogle = async (params:any) => {
  try {
      const res = await Cloud.run('googleToken', {...params, action: 'login'});

      const authData = {
      'id': res.id,
      'access_token': res.access_token,
      'id_token':res.id_token
      };

      let signeduser = await Parse.User.logInWith('google', { authData });
      
      let userAsJson = signeduser?.toJSON();

      return {email:userAsJson?.email};;

  } catch (error : any ) {
    throw new Error(error.message);
  }
};

export const logOutService = async () => {
  return User.logOut()
}

export const loginService = async ({email, password } : { email:string, password:string }) => {
   
  let signeduser = await User.logIn(email, password);
      
  let userAsJson = signeduser?.toJSON();

  return {email:userAsJson?.email};

}

export const registerService = async ({email, password, firstName, lastName, birthDate} : { email:string, password:string, firstName:string, lastName:string, birthDate:Date}) => {
  let signeduser = await User.signUp(email, password, {email, firstName, lastName, birthDate});
      
  let userAsJson = signeduser?.toJSON();

  return {email:userAsJson?.email};
}

export const updateUserService = async ({email, firstName, lastName} : { email:string, firstName:string, lastName:string}) => {
        
  let currentUser = User.current()
  
  currentUser?.set({username:email, email, firstName, lastName} )

  let savedUser = await currentUser?.save();

  let userAsJson =  savedUser?.toJSON();

  return {email:userAsJson?.email};
}

export const resetPasswordService = async (email?:string) => {
  if(email) { 
    return await User.requestPasswordReset(email)
  }else{
    const currentUser = User.current();
    return await User.requestPasswordReset(currentUser?.get('email'))
  }
}

export const getCurrentUser = () => {
  return User.current()?.toJSON();
} 

export const getAsyncCurrentUser = async () => {
  const currentUser =  User.current();
  await currentUser?.fetch();
  return currentUser?.toJSON();
} 

export const updateAvatarImage = async (fileName: string, avatarImage: File) => {

  var parseFile = new Parse.File(fileName, avatarImage);
  let savedFiled = await parseFile.save();
  
  let currentUser = User.current();

  currentUser?.set('avatarImage', savedFiled);
  let savedUser = await currentUser?.save();
  
  if(savedUser){
    await User.current()?.fetch();
  }
  let userAsJson =  savedUser?.toJSON();

  return {email:userAsJson?.email, avatarImage:userAsJson?.avatarImage};
}

export const createWallet = async () => {
  try {
    const res = await Parse.Cloud.run(cloud.api.createWallet.name);
    await User.current()?.fetch();
    return res
  } catch (error) {
    
  }
};
