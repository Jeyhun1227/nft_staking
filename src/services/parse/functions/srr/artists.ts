import { IArtist } from "@/props/IArtist"
import models from '../../../models'


const initializeParse = () => {
        Parse.initialize(process.env.NEXT_PUBLIC_PARSE_ID || '' , process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY);
        Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL || '';
}

export const fetchArtists = async ( musicCategory?:string, sortingType?:string ) : Promise<IArtist[]> => {
  
  initializeParse()
  const obj = Parse.Object.extend(models.artist.className);

  const query = new Parse.Query(obj);
  
  if(musicCategory){
    query.equalTo('musicCategory', { "__type": "Pointer", "className": models.musicCategory.className, "objectId": musicCategory });
  }

  if(sortingType){
    query.ascending(sortingType)
  }

  query.include('musicCategory.type')
  query.equalTo('status', "onboarded");
  // @ts-ignore
  const artists = await query.find({json: true});
  return artists as unknown as IArtist[]
}

export const fetchArtist = async (artistId:string) : Promise<Parse.Object<Parse.Attributes> | undefined> => {
    const Artist = Parse.Object.extend(models.artist.className);

    const queryArtist = new Parse.Query(Artist);

    queryArtist.equalTo("objectId", artistId);

    return queryArtist.first()
}

