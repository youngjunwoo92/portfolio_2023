import ResponsiveContainer from "./ResponsiveContainer";
import profileImage from '../assets/profile.jpg';

export default function Banner() {
  return (
    <section className="h-screen pt-16">
        <ResponsiveContainer>
            <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
                <div className="text-center md:text-left w-full text-xl md:w-1/2 p-4">
                    <h1 className="font-medium">Hi, my name is</h1>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 md:mt-4">Youngjun Woo</h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-2 md:mt-4">Passionate Front-End Developer based in California, United States</p>
                </div>
                <div className="w-full md:w-1/2 p-4 order-first md:order-last">
                    <div className="rounded-full overflow-hidden">
                    <img src={profileImage}/>
                    </div>
                </div>
            </div>
        </ResponsiveContainer>
    </section>
  )
}
