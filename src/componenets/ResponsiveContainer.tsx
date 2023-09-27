type Props = {
    style?: string;
    children: React.ReactNode;
}

export default function ResponsiveContainer({style, children}: Props) {
  return (
    <div className={`mx-auto max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl h-full ${style}`}>{children}</div>
  )
}
