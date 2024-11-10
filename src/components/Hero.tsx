import Image from "next/image"

export default function Hero() {
    return (
        <main className="px-0  flex flex-col md:flex-row max-w-screen-2xl mx-auto ">
                 <div className="flex-1 bg-gray-900 text-teal-50 mx-0 "  >
                {/* left-side */}
                <h1 className="md:mt-8 px-4 mt-5  md:px-20 md:pt-10 text-3xl md:text-4xl font-bold font-sans" data-aos="zoom-in-right">Find your next <span className="text-yellow-600 text-5xl">Dream</span> home</h1>
                <p className=" px-4 pt-5 md:px-20 md:pt-10  font-sans mb-11 font-extralight" data-aos="zoom-in-right">Lorem ipsum adipisicing elit. Enim accusamus autem nulla incidunt dolore in, doloremque debitis? Optio nostrum, rem minima atque adipisci delectus, repellendus, quaerat eius eos eum!</p>
                <small className=" px-4 md:pl-20 md:pt-10  " data-aos="zoom-in-right">✮ Only Properties in exclusive representation</small>
                <br />
                <small className="px-4 md:pl-20 md:pt-10  " data-aos="zoom-in-right">✮ Only new development</small>
                <br />
                <button className="md:mt-16 my-4 ml-4 border md:ml-20  rounded-lg border-blue-700 text-blue-600 px-4 py-1 " data-aos="zoom-in-right">Buy Now</button>

        
                
                </div>

                {/* right-side */}
                <div>
                    <Image width={650} height={685} src="/Rectangle 3.png" alt="" />
                </div>

        </main>
    )
}

