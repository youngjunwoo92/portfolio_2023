import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Chip from './Chip';

type Props = {
  experience: {
    title: string;
    companyName: string;
    location: string;
    icon: React.ReactNode;
    iconBg: string;
    date: string;
    description: string;
    technologies: string[];
  };
};

export default function ExperienceCard({ experience }: Props) {
  const {
    title,
    companyName,
    location,
    icon,
    iconBg,
    date,
    description,
    technologies,
  } = experience;

  return (
    <VerticalTimelineElement
      date={date}
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }}
      iconStyle={{
        background: iconBg,
        color: '#fff',
      }}
      icon={icon}
    >
      <h3 className='text-white text-xl font-bold'>{companyName}</h3>
      <div className='flex justify-between text-secondary font-semibold'>
        <p>{title}</p>
        <p>{location}</p>
      </div>
      {technologies.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2'>
          {technologies.map((technology) => (
            <Chip key={technology} label={technology} />
          ))}
        </div>
      )}
      {description && (
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          <li>
            <p>{description}</p>
          </li>
        </ul>
      )}
    </VerticalTimelineElement>
  );
}
