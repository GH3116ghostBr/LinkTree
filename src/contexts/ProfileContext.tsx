import { Children, createContext, useContext, useState } from "react"
import type { Link } from "../interfaces/Link"


interface ProfileContextType{
    name: string
    github: string
    linkedin: string
    instagram: string
    tiktok: string
    facebook: string
    links: Link[]
    setName: (name: string) => void
    setGithub: (github: string) => void
    setLinkedin: (linkedin: string) => void
    setInstagram: (instagram: string) => void
    setTiktok: (tiktok: string) => void
    setFacebook: (facebook: string) => void
    handleAddLink: () => void
    handleLinkChange: (index: number, field: string, value: string) => void
    
}

interface ProfileProviderProps{
    children: React.ReactNode;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({children} : ProfileProviderProps) => {
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

        return {
            <ProfileContext.Provider value={{
                name,
                github,
                linkedin,
                instagram,
                tiktok,
                facebook,
                links,
                setName,
                setGithub,
                setLinkedin,
                setInstagram,
                setTiktok,
                setFacebook,
                handleAddLink,
                handleLinkChange,
            }}>
                {children}
            </ProfileContext.Provider>
        };
};

export const useProfile = () =>{
    return useContext(ProfileContext);
}