import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MyComponent = () => {
  const [nav, setNav] = useState(false)
  const handleNav = useCallback(() => {
    setNav(!nav)
  }, [nav])
  const router = useRouter()
  const currentScroll = useRef()
  useEffect(() => {
    let lastScrollTop = 0

    window.addEventListener(
      'scroll',
      () => {
        let scrollDirection = window.pageYOffset
        if (scrollDirection > lastScrollTop) {
          currentScroll.current.classList = 'hidden'
        } else {
          currentScroll.current.classList = ''
        }
        lastScrollTop = scrollDirection <= 0 ? 0 : scrollDirection
      },
      false
    )
  }, [])

  return (
    <header ref={currentScroll}>
      <div
        className="grid grid-cols-4 duration-500 ease-in-out m-auto gap-x-4 place-items-center bg-gray-200 top-0 fixed md:grid-cols-8 px-6 max-h-22 h-22 w-full md:px-8 lg:grid-cols-12 xl:gap-x-6 xl:px-36 2xl:lg:px-18 z-50"
        ref={currentScroll}
      >
        <div className="">
          <Link href="/">
            <Image
              src="/images/HeaderLogo.svg"
              width={72}
              height={72}
              alt="Logo"
              layout={'fixed'}
            />
          </Link>
        </div>
        <ul className="hidden md:block md:col-start-6 md:flex  md:col-span-3 md:justify-self-end md:items-center lg:col-start-10 z-10">
          <li
            className={`${
              router.asPath === '/blog' ? 'text-regal-green' : ''
            } hover:text-regal-green`}
          >
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li
            className={`${
              router.asPath === '/contact-us' ? 'text-regal-green' : ''
            } md:px-8  hover:text-regal-green`}
          >
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>
          </li>
          <li
            className={`${
              router.asPath === '/signIn' ? 'text-regal-green' : ''
            } hover:text-regal-green`}
          >
            <Link href="/signIn">
              <a>Sign In</a>
            </Link>
          </li>
        </ul>
        <div className="col-start-4 self-center md:hidden" onClick={handleNav}>
          <div
            className={`${
              !nav ? '' : 'rotate-45'
            } w-6 h-1 bg-black transition duration-500 ease-in-out`}
          ></div>
          <div
            className={`${
              !nav
                ? 'translate-y-2 translate-x-2'
                : '-translate-y-1  -rotate-45'
            } w-6 h-1 bg-black transition duration-500 ease-in-out`}
          ></div>
        </div>
      </div>
      <div
        className={`${
          !nav ? 'top-[-30%]' : 'top-18'
        } text-center ease-in-out duration-700 fixed w-[100%] z-0 flex flex-col justify-center bg-gray-200`}
      >
        <div
          className={`${
            router.asPath === '/blog' ? 'text-white bg-regal-green' : ''
          } py-4`}
        >
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div
          className={`${
            router.asPath === '/contact-us' ? 'text-white bg-regal-green' : ''
          } py-4`}
        >
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </div>
        <div
          className={`${
            router.asPath === '/signIn' ? 'text-white bg-regal-green' : ''
          } py-4`}
        >
          <Link href="/signIn">
            <a>Sign In</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default MyComponent
