"use client"
import { HeartFilledIcon } from '@sanity/icons'
import Link from 'next/link'
import MyComponent from './MyComponent'
import TiltComponent from './TiltComponent'
import Animated from './Animated'
export default function Footer() {
  return (
    <footer className="site-footer py-10">
        <p className="footer__text flex flex-row items-center gap-[0.7ch] group prose dark:prose-invert text-sm text-uppercase">
        Made with <HeartFilledIcon className="text-2xl group-hover:scale-125 group-hover:text-red-400 fill-current transition" />by 
        <Link href="/about" className="">
          Chase Cee
        </Link>
        </p>
        <MyComponent />
        <Animated />
        <TiltComponent />
    </footer>
  )
}