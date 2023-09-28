import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type Props = {
  experience: {
    title: string;
    company_name: string;
    location: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain apsect-square'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-xl font-bold'>
          {experience.company_name}
        </h3>
        <p className='text-secondary font-semibold'>{experience.title}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}
