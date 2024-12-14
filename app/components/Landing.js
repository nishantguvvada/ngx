import Image from 'next/image'

export const Landing = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 w-screen h-screen place-items-center">
                <div className="col-span-1 w-full text-center">
                    <h1 className="text-[#f5eee6] hover:text-amber-500 cursor-pointer">nishant guvvada.</h1>
                </div>
                <div className="col-span-1">
                    <div className="bg-gradient-to-r from-[#f5eee6] to-amber-500 p-4 rounded-full">
                        <Image
                            src="/images/headshot-main.jpg"
                            width={700}
                            height={700}
                            alt="Nishant Guvvada Profile Picture"
                            className='rounded-full'
                        />
                    </div>  
                </div>
                <div className="col-span-1 w-full text-center">
                    <h1 className="text-[#f5eee6] hover:text-amber-500 cursor-pointer">Machine Learning, Web3 and Analytics</h1>
                </div>
            </div>
        </div>
    )
}