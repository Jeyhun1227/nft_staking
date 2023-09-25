import { IInterest } from "@/props/IInterest"
import { fetchQuery } from '../core/query'
import { IQuery } from "../../../props/IQuery"
import models from '../../models'


export const fetchInterests = async (params:IQuery) : Promise<IInterest[]> => {
    const interests = await fetchQuery(models.interest.className, params).findAll()
    const interestsResult:IInterest[] = []

    for (const interest of interests) {
        let interestAsJson = interest.toJSON()
        interestsResult.push( {  
            objectId:interestAsJson.objectId,
            name: interestAsJson.type,
            parseObject:interest
        })
    }
    return interestsResult
}