import CircleAnimation from './CircleAnimation';

import { Skill } from './About';

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCard({ title, skills }: Props) {
  return (
    <div className='bg-[#1f1b24] rounded-xl flex flex-col'>
      <div className='p-4'>
        <h2 className='font-medium text-center text-2xl'>{title}</h2>
      </div>
      <div className='flex items-center justify-center p-4'>
        <CircleAnimation items={skills} />
      </div>
    </div>
  );
}
