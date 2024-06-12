import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Us
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here&apos;s where we share our journey through tech, highlighting the
            experiences and passions that drive our innovative pursuits.
          </p>
        </div>
        <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Welcome to Developelite, a collective of passionate freelance web
          developers dedicated to transforming your digital vision into reality.
          With diverse expertise in modern web technologies, we deliver
          customized, innovative, and responsive websites that elevate your
          online presence. Our team is committed to excellence, ensuring
          seamless user experiences and robust functionality. Partner with us
          for tailored web solutions that drive growth and success. Let's build
          something amazing together!
        </p>
      </div>
    </MotionWrap>
  );
}

export default About;
