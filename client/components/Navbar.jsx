import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className="fixed z-50 w-full text-gray-900 bg-white bg-opacity-50 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50">
      <div className="fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white shadow-lg rounded-3xl top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
        <button
          className="absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <ul className="space-y-6">
          <li>
            <Link href="/" passHref>
              <span className="hover:text-teal-400 dark:hover:text-teal-500">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="hover:text-teal-400 dark:hover:text-teal-500">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              <span className="hover:text-teal-400 dark:hover:text-teal-500">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <span className="hover:text-teal-400 dark:hover:text-teal-500">
                Blog
              </span>
            </Link>
          </li>
          <li>
            <Link href="/community-wall" passHref>
              <span className="hover:text-teal-400 dark:hover:text-teal-500">
                Community wall
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar