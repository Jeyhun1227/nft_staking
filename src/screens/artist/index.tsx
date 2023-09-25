// import {useState} from "react"
import { FooterNav } from "@/layout/footer/nav";
import { Header } from "@/layout/header/header";
import { Meta } from "@/layout/meta";
import { Main } from "@/templates/main";
import { Box } from "@mui/material";
import { ArtistCurrent } from "./components/current";
import { IArtist } from "@/props/IArtist";
import { IProject } from "@/props/IProject";

// import {
//   fetchArtist
// } from "@/services/parse/functions/artists";

import { ArtistHero } from "./components/hero";
import { ArtistPastRelase } from "./components/past-release";
import { ArtistUpcoming } from "./components/upcoming";
import { Artistvideo } from "./components/video";

const ArtistScreen = ({artist, projects}:{artist:IArtist, projects:IProject[]}) => {

  // const [currentProject, setCurrentProject] = useState(false);

  // useEffect(() => {
  //   let isSubscribed = true;
  
  //   // declare the async data fetching function
  //   const fetchData = async () => {

  //     const projectsQuery =  artist.get('Projects').query().equalTo('isActive', true);

  //     const activeProject = await projectsQuery.first()

  //     if (isSubscribed) {
  //       setCurrentProject(activeProject);
  //     }
  //   }
  
  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);;
  
  //   // cancel any future `setData`
  //   return () => isSubscribed = false;
  // }, [currentProject])


  // const toot = projects.filter(projects => projects.isActive);
  return  !artist ? <Main meta={<Meta title={"Artist project"} description={"Artist page"} />}>...isLoading</Main> :
  

    <Main meta={<Meta title={"Artist project"} description={"Artist page"} />}>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(180deg, rgba(25, 18, 37, 0.06) 0%, #191225 97.74%),url(/images/bg-artist.jpg)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <ArtistHero 
          avatarImageUrl={artist?.imgSrc} 
          name={artist?.name} 
          description={artist.description}
          socials={artist?.socials || []}
          musicCategory={artist?.musicCategory.type}/>
      </Box>
      <Artistvideo url={artist?.featuredVideoUrl} title={artist?.featuredVideoTitle}/>
      <ArtistCurrent project={projects.find(p => p.isActive) as IProject}/>
      <ArtistUpcoming projects={projects.filter(p => p.status === "scheduled")} />
      <ArtistPastRelase />
      <FooterNav />
    </Main>
};

export default ArtistScreen;
