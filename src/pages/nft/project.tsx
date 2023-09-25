import { GetServerSideProps } from 'next'
import { NftProjectScreen } from "@/screens/nft";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps : GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  return { props:{
    id:id,
    ...(await serverSideTranslations(ctx.locale!, ["common"]))},
  }
}

const NftProjectPage = ({id}: { id: string}) => <NftProjectScreen id={id}/>;
export default NftProjectPage;
