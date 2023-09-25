import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ArtistScreen from "@/screens/artist";
import { fetchArtist } from "@/services/parse/functions/srr/artists";
import { IArtist } from "@/props/IArtist";
import { IProject } from "@/props/IProject";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const artistFetched = await fetchArtist(id as string);
  const projects = await artistFetched?.get("projects").query().find({json:true});
  let artist = null;

  if (artistFetched) {
    const artistAsJSON = artistFetched.toJSON();
    artist = {
      id: artistAsJSON.objectId,
      name: artistAsJSON.name,
      imgSrc: artistAsJSON.avatarImage.url,
      musicCategory: artistAsJSON.musicCategory,
      description: artistAsJSON.description,
      socials: artistAsJSON.socials,
      featuredVideoUrl:artistAsJSON.featuredVideoUrl,
      featuredVideoTitle:artistAsJSON.featuredVideoTitle
    };
  }

  return {
    props: {
      artist: artist,
      projects: projects,
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    },
  };
};

const ArtistPage = ({ artist, projects }: { artist: IArtist, projects: IProject[]}) => (
  <ArtistScreen artist={artist} projects={projects}/>
);

export default ArtistPage;
