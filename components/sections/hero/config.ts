import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'Welcome to DevelopElite , Our passionate team of developers, entrepreneurs, and problem solvers are dedicated to crafting cutting-edge solutions. We excel in Software Development, Web Application Development, UI/UX Design, Digital Marketing, and Testing & QA. As your technology partner, we’re here to take your business to the next level.'
};

export { hero };
