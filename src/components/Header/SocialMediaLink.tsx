interface SocialMediaLinkProps {
    link: string
    children: React.ReactNode
}

export const SocialMediaLink = ({link, children}: SocialMediaLinkProps) => {
    return(
         <a className="size-10 bg-gray-100 flex-items-center
            justify-center rounded hover:bg-gray-200"
            href={"{link}"}
            >
            {children}
            </a>
    )
}