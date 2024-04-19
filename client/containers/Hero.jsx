import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
        <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
          I'm{' '}
          <span className="text-teal-500 dark:text-teal-400">Braydon</span>.
          I'm a developer, blogger and speaker working at LogicGate.
        </h1>
        <div className="order-1 md:order-2">
          <Image
            alt="Braydon Coyer"
            height={160}
            width={160}
            src=""
            blurDataURL=""
            className="col-span-1 rounded-full"
            layout="fixed"
          />
        </div>
      </div>
      <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
        <button type="button">Read the blog</button>
        <button type="button">More about me</button>
      </div>
    </div>
  )
}

export default Hero