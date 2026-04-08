import { useState } from "react";
import { Input } from "./Input";
import { SocialMediaLink } from "./Header/SocialMediaLink";
import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

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

    return(
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 p-4">
                    <form className="space-y-4" onSubmit={(event) => {event.preventDefault()}}>
                        <Input name = "Nome" id = "name" placeholder = "Ex: João" value={name} 
                        onChange={(event) => {setName(event.target.value);}}/>

                        <Input name = "Github" id = "Github" placeholder = "Ex: Jvc"
                        value={Github} 
                        onChange={(event) => {setGithub(event.target.value);}}/>

                        <div className="grid grid-cols-4 gap-4">

                        <Input name = "Linkedin" id = "Linkedin" placeholder = "Ex: Jvc"
                        value={Linkedin} 
                        onChange={(event) => {setLinkedin(event.target.value);}}/>
                        
                        <Input name = "Instagram" id = "Instagram" placeholder = "Ex: Jvc"
                        value={Instagram} 
                        onChange={(event) => {setInstagram(event.target.value);}}/>

                        <Input name = "TikTok" id = "Tiktok" placeholder = "Ex: Jvc"
                        value={Tiktok} 
                        onChange={(event) => {setTiktok(event.target.value);}}/>

                        <Input name = "Facebook" id = "Facebook" placeholder = "Ex: Jvc"
                        value={Facebook} 
                        onChange={(event) => {setFacebook(event.target.value);}}/>

                        </div>

                        <div className="space-y-4">
                            {
                                links.map((link, index) => {
                                    return(
                                        <div className="flex gap-4">
                                        <Input
                                        name={"Link " + (index +1)}
                                        id={"link-" + index}
                                        value={link.name}
                                        placeholder="Ex: Portfolio"
                                        onChange={(event) => {
                                            handleLinkChange(index, "name", event.target.value);
                                        }}
                                       />

                                       <Input
                                        name={"URL do Link"}
                                        id={"link-url-" + index}
                                        value={link.url}
                                        placeholder="Ex: http://meusite.com"
                                         onChange={(event) => {
                                            handleLinkChange(index, "url", event.target.value);
                                         }}
                                       />
                                        </div>
                                    
                                    )
                                })
                            }

                            <button className=" bg-white rounded cursor-pointer uppercase px-4
                            py-2 hover:opacity-80 transition-opacity duration-1000"
                             onClick={handleAddLink}>Adicionar Link</button>
                        </div>
                    </form>
                </main>

                <aside className="w-4/12 p-4">
                    <div className="rounded border-8 p-4 max-w-lg mx-auto">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="block w-16 h-16 rounded-full bg-blue-600"></span>
                            <h1 className="font-bold">{name}</h1>
                        </div>

                        <ul className="flex gap-2 justify-center">
                            {Github !== "" && (
                                <li>
                                    <SocialMediaLink
                                     link={"https://github.com/" + Github}>
                                        <SiGithub/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {Linkedin !== "" && (
                                <li>
                                    <SocialMediaLink
                                     link={"https://Linkedin.com/in" + Linkedin}>
                                        <GrLinkedin/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {Instagram !== "" && (
                                <li>
                                    <SocialMediaLink
                                     link={"https://Instagram.com" + Instagram}>
                                        <SiInstagram/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {Tiktok !== "" && (
                                <li>
                                    <SocialMediaLink
                                     link={"https://TikTok.com/" + Tiktok}>
                                        <SiTiktok/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {Facebook !== "" && (
                                <li>
                                    <SocialMediaLink
                                     link={"https://Facebook.com/" + Facebook}>
                                        <SiFacebook/>
                                    </SocialMediaLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    
                </aside>

            </div>
        </div>
    )


}