import { useState } from "react";
import { Aside } from "./Header/Aside";
import { MainEdit } from "./Header/MainEdit";


export const EditPage = () => {
   

    const [variant, setVariant] = useState<"default">("default");


    return(
        <div>
            <div className="container mx-auto flex">

                <MainEdit
                    name={name}
                    setName={setName}
                    Github={Github}
                    setGithub={setGithub}
                    Linkedin={Linkedin}
                    setLinkedin={setLinkedin}
                    Instagram={Instagram}
                    setInstagram={setInstagram}
                    Tiktok={Tiktok}
                    setTiktok={setTiktok}
                    Facebook={Facebook}
                    setFacebook={setFacebook}
                    links={links}
                    handleAddLink={handleAddLink}
                    handleLinkChange={handleLinkChange}
/>
                

                <Aside name={name}
                       Github={Github}
                       Linkedin={Linkedin}
                       Instagram={Instagram}
                       Tiktok={Tiktok}
                       Facebook={Facebook}
                       links={links}
                       variant={variant}
/>


            </div>
        </div>
    )


}