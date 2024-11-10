import Image from "next/image"

export default function Custumer(){
    return(
        <main className="md:px-20 mt-10 pt-2 px-7 ">
            <h1 className="font-sans font-bold text-3xl">See what our customers said about us</h1>
            <section className=" flex flex-col md:flex-row text-center items-center mt-16 gap-14">
                {/* box1 */}
                <div className="border rounded-lg relative md:max-w-[350px] md:h-[330px] px-5 py-5 bg-gray-300 hover:border-cyan-950 cursor-pointer">
                    <Image className="ml-[7rem]" width={90} height={90} src="/c-1.png" alt="" />
                    <div className="mt-5">
                        <h2 className="font-sans font-bold text-lg">Ariyana aly</h2>
                        <h4 className="font-sans font-semibold mt-2">⭐ Top Customer</h4>
                        <p className="font-sans font-light my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora recusandae iusto saepe a unde eaque?</p>
                        <h6 className="font-sans font-semibold mt-4">12-5-2024</h6>
                    </div>
                </div>
                {/* box2 */}
                <div className="border rounded-lg relative md:max-w-[350px] md:h-[330px] px-5 py-5 bg-gray-300 hover:border-cyan-950 cursor-pointer">
                    <Image className="ml-[7rem]" width={90} height={90} src="/c-1.png" alt="" />
                    <div className="mt-5">
                        <h2 className="font-sans font-bold text-lg">Ariyana aly</h2>
                        <h4 className="font-sans font-semibold mt-2">⭐ Top Customer</h4>
                        <p className="font-sans font-light my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora recusandae iusto saepe a unde eaque?</p>
                        <h6 className="font-sans font-semibold mt-4">12-5-2024</h6>
                    </div>
                </div>
                {/* box3 */}
                <div className="border rounded-lg relative md:max-w-[350px] md:h-[330px] px-5 py-5 bg-gray-300 hover:border-cyan-950 cursor-pointer">
                    <Image className="ml-[7rem]" width={90} height={90} src="/c-1.png" alt="" />
                    <div className="mt-5">
                        <h2 className="font-sans font-bold text-lg">Ariyana aly</h2>
                        <h4 className="font-sans font-semibold mt-2">⭐ Top Customer</h4>
                        <p className="font-sans font-light my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora recusandae iusto saepe a unde eaque?</p>
                        <h6 className="font-sans font-semibold mt-4">12-5-2024</h6>
                    </div>
                </div>

                
            </section>
        </main>
    )
}
