import Image from 'next/image'

export const Landing = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 max-w-screen-2xl h-lvh place-items-center">
                <div className="flex flex-col col-span-1 w-full text-right pr-10">
                    <h1 style={{ textShadow: '0 0 1.75rem #FCEAAC' }} className="text-[4rem] font-mono text-7xl text-[#FCEAAC] saturate-[175%] font-medium antialiased tracking-tight hover:text-[#FDA802] transition delay-300 duration-300 ease-in-out cursor-pointer">Nishant</h1>
                    <h1 style={{ textShadow: '0 0 1.75rem #FCEAAC' }} className="text-[4rem] font-mono text-7xl text-[#FCEAAC] saturate-[175%] font-medium antialiased tracking-tight hover:text-[#FDA802] transition delay-300 duration-300 ease-in-out cursor-pointer">Guvvada</h1>
                    <div>
                        <p className="text-[#FCEAAC] pt-4">Based in New Delhi, India</p>
                        <div className="text-[#FCEAAC] flex flex-row justify-end items-center">
                            <div className="w-2 h-2 text-5xl font-thin bg-[#98fe7f] rounded-full mx-2 align-middle transform -translate-y-[0.1em] animate-[pulse-animation_2s_infinite] hover:bg-[#E555C7] cursor-pointer"></div>
                            <div>Available for a full-time position</div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="p-4 rounded-full border-[#FCEAAC] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.15),0_0_0_2px_rgba(0,0,0,0.15),inset_0_0_14px_#FCEAAC,0_0_14px_#FCEAAC] saturate-[175%]">
                        <h1 className="text-white animate-[marquee_5s_linear_infinite]">Full Stack Developer</h1>
                        <Image
                            src="/images/headshot-main-no-bg.png"
                            width={700}
                            height={700}
                            alt="Nishant Guvvada Profile Picture"
                            className='rounded-full'
                        />
                    </div>  
                </div>
                <div className="flex flex-col gap-4 col-span-1 w-full text-center">
                    <h1 style={{ textShadow: '0 0 1.75rem #FCEAAC' }} className="underline decoration-[#FCEAAC] decoration-2 underline-offset-8 text-[#C4C4C6] text-6xl font-mono font-medium antialiased tracking-tight hover:text-[#FDA802] hover:decoration-[#FDA802] transition delay-100 duration-300 ease-in-out cursor-pointer">Machine Learning</h1>
                    <h1 style={{ textShadow: '0 0 1.75rem #FCEAAC' }} className="underline decoration-[#FCEAAC] decoration-2 underline-offset-8 text-[#C4C4C6] text-6xl font-mono font-medium antialiased tracking-tight hover:text-[#FDA802] hover:decoration-[#FDA802] transition delay-100 duration-300 ease-in-out cursor-pointer">Web3</h1>
                    <h1 style={{ textShadow: '0 0 1.75rem #FCEAAC' }} className="underline decoration-[#FCEAAC] decoration-2 underline-offset-8 text-[#C4C4C6] text-6xl font-mono font-medium antialiased tracking-tight hover:text-[#FDA802] hover:decoration-[#FDA802] transition delay-100 duration-300 ease-in-out cursor-pointer">Full Stack</h1>
                </div>
            </div>
        </div>
    )
}