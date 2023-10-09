type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: Props) {
  console.log({ isOpen, onClose });
  return <div className='bg-slate-500 fixed inset-0'>Modal</div>;
}
