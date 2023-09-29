type Props = {
  icon: string;
  name: string;
};

export default function MarqueeIItem({ name, icon }: Props) {
  return (
    <div
      key={name}
      className='pointer-events-none ml-8 bg-white aspect-square rounded-full w-[120px] lg:w-[160px] flex flex-col items-center justify-center gap-2 items-center text-center'
    >
      <img
        src={icon}
        alt={name}
        className='w-[64px] lg:w-[80px] aspect-square object-contain'
      />
      <p className='text-primary text-xs lg:text-lg'>{name}</p>
    </div>
  );
}
