import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import SkillCard from './skill-card';

import { skills } from '../config';

function Skills() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              Our Skills
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of our skills where We&apos;ve turned knowledge into
              expertise, making things happen.
            </p>
          </div>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                description={skill.description}
                Icon={skill.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
