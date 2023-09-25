import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

export const LayoutAuthCaroussel = () => {
  const router = useRouter();

  const imgContent = {
    "/sign-in/": {
      title: "Our story together continues here",
      content:
        "Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.",
      author: "Charlie Parker",
      src: "url(/images/bg/sign-in.jpg)",
    },
    "/sign-up/1/": {
      title: "Join the fight club of music",
      content:
        "Be part of exclusive community with your favorite artists and share meaningful and unique moments.",
      author: "Charlie Parker",
      src: "url(/images/bg/sign-up-info.jpg)",
    },
    "/sign-up/2/": {
      title: "Tell me more about you",
      content:
        "By providing us your interests we will be able to keep you updated with launched you might like.",
      author: "Charlie Parker",
      src: "url(/images/bg/sign-up-interest.jpg)",
    },
    "/forgot-password/": {
      title: "Our story together continues here",
      content:
        "Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.",
      author: "Charlie Parker",
      src: "url(/images/bg/sign-in.jpg)",
    }
  }[router?.asPath];

  return (
    <Stack
      minHeight={{ xs: 333, md: "100vh" }}
      gridRow={{ xs: "1", md: undefined }}
      width="100%"
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-end" }}
      sx={{
        display: {xs: "none", md: "flex"},
        backgroundImage: `${imgContent?.src}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Stack
        padding={2}
        alignItems="center"
        paddingBottom={{ xs: 0, md: "180px" }}
        maxWidth={"500px"}
        textAlign="center"
      >
        <Typography variant="title2" marginBottom={1}>
          {imgContent?.title}
        </Typography>
        <Typography variant="p1" marginBottom={3}>
          {imgContent?.content}
        </Typography>
        <Typography variant="p1">{imgContent?.author}</Typography>
      </Stack>
    </Stack>
  );
};
