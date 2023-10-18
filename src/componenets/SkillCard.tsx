import CircleAnimation from './CircleAnimation';

import { Skill } from './About';

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCard({ title, skills }: Props) {
  return (
    <div className='bg-[#1f1b24] rounded-xl flex flex-col'>
      <CircleAnimation title={title} items={skills} />
    </div>
  );
}
