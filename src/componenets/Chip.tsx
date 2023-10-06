type Props = {
  label: string;
  color?: string;
};

export default function Chip({ label, color }: Props) {
  return (
    <div className={`bg-slate-600 rounded-lg px-2 py-1 text-sm`}>{label}</div>
  );
}
