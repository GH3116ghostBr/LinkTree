import { SocialMediaLink } from "./SocialMediaLink";
import { SiFacebook, SiGithub, SiInstagram, SiLinktree, SiTiktok } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

type AsideProps = {
  name: string;
  Github: string;
  Linkedin: string;
  Instagram: string;
  Tiktok: string;
  Facebook: string;
  links: { url: string }[];
  variant?: "default";
};

export function Aside({
  name,
  Github,
  Linkedin,
  Instagram,
  Tiktok,
  Facebook,
  links,
  variant = "default"
}: AsideProps) {

    const styles = {
    default: "w-full bg-white shadow-md rounded-2xl p-50 flex flex-col gap-4",
  };

return(
    <aside className="w-5/12 p-6">
                    <div className={`${styles[variant]} max-h screen`}>
                        <div className="flex flex-col gap-2 items-center">
                            <span className="block w-16 h-16 rounded-full bg-blue-600"></span>
                            <h1 className="font-bold">{name}</h1>
                        </div>

                        <ul className="flex gap-4 justify-center flex-nowrap">
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

                        <ul className="flex gap-2 justify-center">
                            {links.map((link, index) => {
                                    return(
                                <li key={index}>
                                    <SocialMediaLink
                                     link={link.url}>
                                        <SiLinktree/>
                                    </SocialMediaLink>
                                </li>)
                            })}
                            </ul>
                    </div>
                    
                </aside>
                )}
