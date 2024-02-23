import { Services } from "@/components/Home/Services";
import { TitlePage, BannerStatic } from "@/components/Layout";
import { BasicLayout } from "@/layouts";


export default function services() {
  return (
    
    <BasicLayout relative>

      <BannerStatic />

      <TitlePage titlePage='servicios' />

      <Services description/>

    </BasicLayout>

  )
}
