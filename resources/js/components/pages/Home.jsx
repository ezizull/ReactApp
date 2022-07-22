import profile from "../images/profile.png";

function Home() {
    return (
        <section className="flex-col relative font-sans items-center px-14 mt-28">
            <div className="w-full h-auto">
                <div className="home  tracking-tighter flex-col w-1/2 justify-center items-center text-gray-800">
                    <h1 className="font-black space-x-10 h-7 text-3xl">
                        WELCOME TO
                    </h1>
                    <h2 className="font-bold text-2xl">MY PORTOFOLIO WEB</h2>
                    <p className="flex justify-center w-4/5 mt-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis excepturi explicabo sit quisquam ipsam,
                        consequuntur, unde voluptatibus reiciendis magni dolor
                        soluta eum debitis? Dignissimos, ut? Laudantium sequi
                        quisquam consequatur! Voluptatem.
                    </p>
                </div>
                <div className="relative  w-1/2 items-center justify-center">
                    {/* kanan */}
                    <div className="absolute right-48 top-[-38px] shadow-rose-300 w-10 h-10 bg-rose-300 rounded shadow-xl-center"></div>
                    <div className="absolute right-[3.5rem] top-6 shadow-orange-300 w-12 h-12 bg-orange-300 rounded shadow-xl-center"></div>
                    <div className="absolute right-[5.5rem] top-14 shadow-sky-300 w-6 h-6 bg-sky-300 rounded shadow-xl-center"></div>
                    <div className="absolute right-5 top-36 shadow-blue-300 w-14 h-14 bg-blue-300 rounded shadow-xl-center"></div>
                    <div className="absolute right-[0rem] bottom-32 shadow-orange-300 w-4 h-4 bg-orange-300 rounded shadow-xl-center"></div>
                    <div className="absolute right-24 bottom-10 shadow-sky-300 w-12 h-12 bg-sky-300 rounded shadow-xl-center"></div>
                    <div className="absolute right-20 bottom-16 shadow-rose-300 w-8 h-8 bg-rose-300 rounded shadow-xl-center"></div>
                    {/* kiri */}
                    <div className="absolute left-16 top-5 shadow-sky-300 w-12 h-12 bg-sky-300 rounded shadow-xl-center"></div>
                    <div className="absolute left-24 top-12 shadow-orange-300 w-9 h-9 bg-orange-300 rounded shadow-xl-center"></div>
                    <div className="absolute left-[-1rem] top-36 shadow-blue-300 w-6 h-6 bg-blue-300 rounded shadow-xl-center"></div>
                    <div className="absolute left-[1.5rem] bottom-24 shadow-orange-300 w-14 h-14 bg-orange-300 rounded shadow-xl-center"></div>
                    <div className="absolute left-[8rem] bottom-[-1rem] shadow-sky-300 w-11 h-11 bg-sky-300 rounded shadow-xl-center"></div>
                    <div className="absolute left-[7rem] bottom-4 shadow-rose-300 w-8 h-8 bg-rose-300 rounded shadow-xl-center"></div>
                    {/* photo */}
                    <img className="z-20 w-96" src={profile} alt="profile" />
                    {/* wave */}
                    <div className="z-10 animation-delay-100 animate-ping-slow absolute h-80 w-80 rounded-full bg-blue-400 opacity-80"></div>
                    <div className="z-10 animate-ping-slow absolute h-96 w-96 rounded-full bg-blue-400 opacity-70"></div>
                </div>
            </div>
        </section>
    );
}

export default Home;
