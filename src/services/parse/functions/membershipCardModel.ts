import models from '../../models'
export const fetchMembershipCardModels = async ( musicCategory?:string, sortingType?:string ) : Promise<any[]> => {
    const obj = Parse.Object.extend(models.membershipCardModel.className);
  
    const query = new Parse.Query(obj);
    
    if(musicCategory){
      query.equalTo('musicCategory', { "__type": "Pointer", "className": models.musicCategory.className, "objectId": musicCategory });
    }
  
    if(sortingType){
      query.ascending(sortingType)
    }
  
    query.include('musicCategory.type')
    // @ts-ignore
    const membershipCardModels = await query.find({json:true})  
    return membershipCardModels
  }