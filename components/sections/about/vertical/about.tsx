import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to Developelite, a collective of passionate freelance web
              developers dedicated to transforming your digital vision into
              reality. With diverse expertise in modern web technologies, we
              deliver customized, innovative, and responsive websites that
              elevate your online presence. Our team is committed to excellence,
              ensuring seamless user experiences and robust functionality.
              Partner with us for tailored web solutions that drive growth and
              success. Let's build something amazing together!
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
