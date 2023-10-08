import SectionWrapper from './../hoc/SectionWrapper';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { slideIn } from '../utilities/motion';
import { useRef, useState } from 'react';
import EarthCanvas from './canvas/Earth';

import { IoSend } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import LoadingSpinner from './LoadingSpinner';

const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

type Form = {
  name: string;
  email: string;
  message: string;
};

const initialValue = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState<Form>(initialValue);
  const [loading, setLoaidng] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoaidng(true);
    await emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoaidng(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm(initialValue);
        },
        (error) => {
          setLoaidng(false);
          console.log(error);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <>
      <div className='flex flex-col flex-col-reverse lg:flex-row gap-10 overflow-hidden mt-12'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.66] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>LET'S CONNECT</p>
          <h2 className={styles.sectionHeadText}>Contact</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            <textarea
              name='message'
              value={form.message}
              rows={7}
              onChange={handleChange}
              placeholder='Message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            <button
              disabled={loading}
              type='submit'
              className='flex items-center justify-center gap-4 bg-black py-4 rounded-lg font-semibold '
            >
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <IoSend size={24} />
                  SEND
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='flex-1 h-[350px] md:h-[550px] lg:h-auto'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
