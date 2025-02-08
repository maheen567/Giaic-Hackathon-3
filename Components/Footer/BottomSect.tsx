import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";


export default function SocialIcons() {
  const icons = [
    { Icon: FaFacebookF, color: 'text-black' },
    { Icon: FaTwitter, color: 'text-black' },
    { Icon: FaInstagram, color: 'text-black' },
    { Icon: FaYoutube, color: 'text-black' },
    { Icon: FaPinterest, color: 'text-black' },
  ]

  return (
    <div className="flex space-x-4">
      {icons.map(({ Icon, color }, index) => (
        <Link
          key={index}
          href="#"
          className={`bg-white px-4 py-3 text-[20px] rounded ${color} hover:bg-csYellow hover:text-white transition duration-300`}
        >
          <Icon size={16}/>
        </Link>
      ))}
    </div>
  )
}