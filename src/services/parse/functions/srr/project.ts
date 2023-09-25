import { Relation } from "parse"
import { IProject } from "@/props/IProject"
import models from '../../../models'

const initializeParse = () => {
        Parse.initialize(process.env.NEXT_PUBLIC_PARSE_ID || '' , process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY);
        Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL || '';
}

export const fetchProject = async (projectId:string) : Promise<Parse.Object<Parse.Attributes> | undefined> => {
    const Project = Parse.Object.extend(models.project.className);

    const queryProject = new Parse.Query(Project);

    queryProject.equalTo("objectId", projectId);
    queryProject.include('artistOwner.name')
    queryProject.include('artistOwner.avatarImage')
    // @ts-ignore
    return queryProject.first({json:true})
}

export const fetchProjectObject = async (projectId:string) : Promise<Parse.Object<Parse.Attributes> | undefined> => {
    const Project = Parse.Object.extend(models.project.className);

    const queryProject = new Parse.Query(Project);

    queryProject.equalTo("objectId", projectId);
    queryProject.include('artistOwner.name')
    queryProject.include('artistOwner.avatarImage')

    return queryProject.first()
}

export const getRelatedProjectsByArtistIdAndStatus = async (aristId:string, status:string) : Promise<IProject[]> => {

    const ArtistObject = Parse.Object.extend(models.artist.className);

    const artist = ArtistObject.createWithoutData(aristId)

    const relation = new Relation(artist, "projects");

    var queryProject = relation.query();
    queryProject.equalTo('status', status)

    // @ts-ignore
    const projects = await queryProject.find({json: true})

    return projects as unknown as IProject[]

}

export const fetchProjects = async ( limit:number = 3, sortReleaseDate:boolean = false) : Promise<IProject[]> => {
  
    initializeParse()
    const obj = Parse.Object.extend(models.project.className);
    const queryProject = new Parse.Query(obj);
    
    queryProject.limit(limit);
    queryProject.exists("status");
    queryProject.include("artistOwner");    
    if(sortReleaseDate){
        queryProject.ascending("releaseDate");
    }

    // @ts-ignore
    const projects = await queryProject.find({json: true});
    debugger
    return projects as unknown as IProject[]
  }


  export const fetchProjectsbyInterests = async ( musicCategoryIds:string[], limit:number=2) : Promise<any[]> => {
    const obj = Parse.Object.extend(models.project.className);
  
    const query = new Parse.Query(obj);

    let projects:IProject[] = [];

    musicCategoryIds.forEach(musicCategoryId => {
      query.equalTo('musicCategory', { "__type": "Pointer", "className": models.musicCategory.className, "objectId": musicCategoryId });
    });
  
    query.ascending("releaseDate");
    query.include('musicCategory.type');
    query.include('artistOwner');
    query.limit(limit);
    // @ts-ignore
    projects = await query.find({json:true});
    if(projects.length < 2){
        const projectWithoutInterests = await fetchProjects();
        projects.concat(projectWithoutInterests)
    }
    return projects
  }

  
