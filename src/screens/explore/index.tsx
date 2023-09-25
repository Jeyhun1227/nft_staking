import React, { useState, useEffect } from "react";
import { FollowUsWithSocial } from "@/layout/follow-us/with-social";
import { LayoutDefault } from "@/layout/pages/layout-default";
import { fetchInterests } from "@/services/parse/functions/interests";
import { Box, Container } from "@mui/material";
import { ListArtist } from "../../components/lists/artist";
import { ExploreFestivalList } from "./components/festival-list";
import { ExploreNftList } from "./components/nft-list";
import { ExploreOffer } from "./components/offer";
import { ExploreOptions } from "./components/options";
import { ExploreTitle } from "./components/title";
import { IArtist } from "@/props/IArtist";
import {
  fetchArtists
} from "@/services/parse/functions/srr/artists";
import {
  fetchMembershipCardModels
} from "@/services/parse/functions/membershipCardModel";

export const ExploreScreen = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [membershipCardModels, setMembershipCardModels] = useState<any[]>([]);
  const [optionCartegories, setOptionCartegories] = useState<{ label: string, value: string }[]>([]);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = async (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    debugger
    if(index === 0){
      let artists = await fetchArtists();
      setArtists(artists)
    }else if(index === 1){
      let membershipCardModels = await fetchMembershipCardModels();
      setMembershipCardModels(membershipCardModels)
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleArtist = async (category:string, sortingType:string) => {
    if(selectedIndex === 0){
      if(category === 'default'){
        const artists = await fetchArtists(undefined, sortingType);
        setArtists(artists);
        return
      }
      const artists = await fetchArtists(category, sortingType);
      setArtists(artists);
    } else if(selectedIndex === 1){} {
      if(category === 'default'){
        const membershipCardModels = await fetchMembershipCardModels(undefined, sortingType);
        setMembershipCardModels(membershipCardModels);
        return
      }
      const membershipCardModels = await fetchMembershipCardModels(category, sortingType);
      setMembershipCardModels(membershipCardModels);
    }
  }

  useEffect(() => {
    (async () => {
      const interests = await fetchInterests({});
      const innerInterrests = []

      for (const interest of interests) {
        innerInterrests.push({
          label: interest.name,
          value: interest.objectId,
        })
      }
      setOptionCartegories(innerInterrests)
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let artists = await fetchArtists();
      setArtists(artists);
      fetchMembershipCardModels().then((results)=> {setMembershipCardModels(results)});
    }
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, []);

  return (
    <LayoutDefault title="Explore" description="explore artists and nft's">
      <ExploreOffer />
      <Container sx={{ marginTop: 7 }}>
        <ExploreTitle
          anchorEl={anchorEl}
          selectedIndex={selectedIndex}
          handleClickListItem={handleClickListItem}
          handleClose={handleClose}
          handleMenuItemClick={handleMenuItemClick}
        />
        <ExploreOptions selectedIndex={selectedIndex} options={optionCartegories} onOptionSelected={handleArtist}/>
        <Box marginTop={{ xs: 4, sm: 11 }} marginBottom={{ xs: 10, sm: 15 }}>
          {selectedIndex === 0 && <ListArtist data={artists} explore />}
          {selectedIndex === 1 && <ExploreNftList data={membershipCardModels}/>}
          {selectedIndex === 2 && <ExploreFestivalList />}
        </Box>
      </Container>
      <FollowUsWithSocial subject="NFT'S" />
    </LayoutDefault>
  );
};
