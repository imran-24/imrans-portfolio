'use client'
import { IconType } from "react-icons";

interface SocialMediaLinkProps{
    icon?: IconType ;
    href?: string
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
    icon: Icon,
    href
}) => {

  return (
    <div className="py-4">
      <a href={href ? href : ""}>
      <div 
        className="
          text-neutral-300 
          opacity-60
          border-r-2 
          hover:opacity-90
          transition
          cursor-pointer
          border-neutral-600 
          pr-3
          ">
        {Icon &&
                <Icon size={24} />}
      </div>
      </a>
    </div>
  )
}

export default SocialMediaLink