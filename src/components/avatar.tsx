import { styled } from "@mui/material/styles";
import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

interface Props extends MuiAvatarProps {
  size?: number;
}

const CustomAvatar = styled(MuiAvatar)<Props>(({ size = 36 }) => ({
  width: size,
  height: size,
}));

export const Avatar = ({ size = 36, src, ...props }: Props) => {
  return (
    <CustomAvatar {...props} src={src || "/images/avatar-user-default.svg"} />
  );
};
