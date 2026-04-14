import { useState } from "react";
import { Aside } from "./Header/Aside";
import { MainEdit } from "./Header/MainEdit";


interface Link {
    name : string,
    url : string
}

export const EditPage = () => {
    const [name, setName] = useState("Julia")
    const [links, setLinks] = useState<Link[]>([])

    const [Linkedin, setLinkedin] = useState("");
    const [Instagram, setInstagram] = useState("");
    const [Tiktok, setTiktok] = useState("");
    const [Facebook, setFacebook] = useState("");
    const [Github, setGithub] = useState("");

    const handleAddLink = () => {
        setLinks([...links, {name: "", url: ""}])
    }

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks =  [...links]
        updatedLinks[index] = {
            ...updatedLinks[index],
            [field]: value,
        }

        setLinks(updatedLinks)

    }

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