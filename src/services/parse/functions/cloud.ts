import { Cloud } from 'parse'
import cloud from '../cloud'
export const addUserOnWaitList = ( userId:string, projectId:string) => {
    return Cloud.run(cloud.api.addUserOnProjectWaitList.name, {userId, projectId})
}
export const addEmailOnGlobaltWaitList = ( email:string) => {
    return Cloud.run(cloud.api.addEmailOnGlobaltWaitList.name, {email})
}

export const deleteAccount = () => {
    return Cloud.run(cloud.api.deleteAccount.name)
}
