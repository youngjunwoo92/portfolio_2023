import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type Props = {
  experience: {
    title: string;
    companyName: string;
    location: string;
    icon: React.ReactNode;
    iconBg: string;
    date: string;
    points: string[];
  };
};

export default function ExperienceCard({ experience }: Props) {
  const { title, companyName, location, icon, iconBg, date, points } =
    experience;

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
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li key={`experience-point-${index}`}>
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}
