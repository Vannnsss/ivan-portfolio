"use client";
import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram} from "react-icons/fa"

const social = [
  {icon: <FaLinkedinIn />,  path:'https://www.linkedin.com/in/ivan-septa-adi-pratama-a25b00271/' },
  {icon: <FaInstagram />, path:'https://www.instagram.com/1_vannn/' },
]

type SocialProps = {
  containerStyles: string;
  iconStyles?: string;
};

const Social = ({ containerStyles, iconStyles }: SocialProps) => {

  return (
    <div className={containerStyles}>
      {social.map((item, index)=> {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
