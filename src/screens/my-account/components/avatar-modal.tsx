import React, {useCallback, useRef, useState} from "react";
import { Dialog, IconButton, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close"
import { useTranslation } from "next-i18next";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { ButtonGradient } from "@/components/buttons/button-gradient";
import { theme } from "@/config/theme";
import { useAuth } from "@/contexts/auth";

interface Props {
  imgSrc: string,
  open: boolean,
  onClose: () => void,
  onAvatarUpdated: () => void
}

export const AvatarModal = ({imgSrc, open, onClose, onAvatarUpdated}: Props) => {
  const { t } = useTranslation("common");
  const auth = useAuth();
  const mediumViewport = useMediaQuery(theme.breakpoints.down("md"));
  const [fileName, setFileName] = useState("default.png");
  const [image, setImage] = useState(imgSrc);
  const [loading, setIsLoading] = useState(false);
  const [cropper, setCropper] = useState<Cropper>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectFile = useCallback(() => {
    inputRef?.current?.click();
  }, [inputRef]);

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    let files = event.target!.files;
    if (files === null || files[0] === undefined) {
      return;
    }
    setFileName(files[0].name);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    
    reader.readAsDataURL(files[0]!);
  };

  const dataUrlToFile = (url: string, fileName: string) => {
    const [mediaType, data] = url.split(",");
    const mime = mediaType?.match(/:(.*?);/)?.[1];
  
    let bstr = atob(data || '')
    var n = bstr.length;


    if (n !== undefined) {
      const arr = new Uint8Array(n);
    
      while (n--) {
        arr[n] = bstr.charCodeAt(n);
      }
      return new File([arr], fileName, { type: mime });
    }
    return null;
  };

  const onSave = async () => {
    if (cropper !== undefined) {
      const file = dataUrlToFile(cropper.getCroppedCanvas().toDataURL(), fileName);
      if (file) {
        try {
          setIsLoading(true);
          await auth.updateAvatar(fileName, file);
          onAvatarUpdated();
          cropper.clear();
          cropper.reset();
        } catch (e: any) {
          console.log(e.message);
        }
        setIsLoading(false);
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableScrollLock={ true }
      PaperProps={{
        sx: {
          margin: "0 12px",
          borderRadius: "8px"
        },
      }}>
      <Stack
        padding={{xs: 2, md: 3}}
        sx={{
          background: "#1A1C20",
        }}  
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontSize={22} fontWeight="700">{t("account.editAvatar")}</Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Stack>
        <Cropper
          src={image}
          style={{ marginTop: 16, height: mediumViewport ? 300 : 400, width: mediumViewport ? "100%": 600 }}
          initialAspectRatio={1}
          background={false}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          guides={true}
          onInitialized={(instance: Cropper) => {
            setCropper(instance);
          }}
        />
         <Stack marginTop={3} direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
          <input type='file' id='file' ref={inputRef} style={{display: 'none'}} onChange={onChangeFile} />
          <Typography color="#2F98FB" fontWeight="900" sx={{cursor: "pointer"}} onClick={handleSelectFile}>{t("common.change")}</Typography>
          <ButtonGradient label={t("account.saveAvatar")} loading={loading} onClick={onSave}/>
         </Stack>
      </Stack>
    </Dialog>
  );
};
