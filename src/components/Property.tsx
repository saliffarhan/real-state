import Image from "next/image"

export default function Property(){
    return(
        <main className="md:px-20 pt-2 px-7 flex gap-11 md:mt-20 flex-col md:flex-row mt-14">
            
          
            <div className="border rounded-lg md:max-w-[350px] md:h-[430px] max-w-[450px] h-auto relative border-b-4">
            <Image  width={350} height={300} src="/p-1.png" alt="" />

             <div className="px-5 mt-4">
            <h4 className="font-sans font-semibold mb-2">🚩 New york, USA</h4>
            <small className="font-sans font-semibold text-base"> 🛏️ 8 beds</small>
            <small className="md:ml-10 ml-4 font-sans font-semibold text-base">↔ 10*10</small>
            <small className="md:ml-10 ml-4 font-sans font-semibold text-base">🏚️ 7 rooms</small>
             <br />
            <button className="mt-7 border  rounded-lg border-blue-700 text-blue-600 px-4 py-1 ">Book Now</button>
            <small className="md:ml-24 font-sans font-bold text-lg ml-6 ">💲5,200,00</small>
            </div>
            
            </div>

            {/* p2 */}
            <div className="border rounded-lg md:max-w-[350px] md:h-[430px] max-w-[450px] h-auto relative border-b-4 ">
            <Image width={350} height={300} src="/p-2.png" alt="" />

             <div className="px-5 mt-4">
            <h4 className="font-sans font-semibold mb-2">🚩 Dubai, UAE</h4>
            <small className="font-sans font-semibold text-base"> 🛏️ 10 beds</small>
            <small className="md:ml-10 ml-4 font-sans font-semibold text-base">↔ 15*15</small>
            <small className="md:ml-10 ml-4 font-sans font-semibold text-base">🏚️ 9 rooms</small>
             <br />
            <button className="mt-7 border  rounded-lg border-blue-700 text-blue-600 px-4 py-1">Book Now</button>
            <small className="md:ml-24 ml-3 font-sans font-bold text-lg">💲10,200,00</small>
            </div>
            
            </div>

            {/* p3 */}
            <div className="border rounded-lg md:max-w-[350px] md:h-[430px] max-w-[450px] h-auto relative border-b-4">
            <Image width={350} height={300} src="/p-3.png" alt="" />

             <div className="px-5 mt-4">
            <h4 className="font-sans font-semibold mb-2">🚩 Istanbul, Turkey</h4>
            <small className="font-sans font-semibold text-base"> 🛏️ 7 beds</small>
            <small className="md:ml-10 ml-3 font-sans font-semibold text-base">↔ 9*10</small>
            <small className="md:ml-10 ml-3 font-sans font-semibold text-base">🏚️ 8 rooms</small>
             <br />
            <button className="mt-7 border  rounded-lg border-blue-700 text-blue-600 px-4 py-1">Book Now</button>
            <small className="md:ml-24 ml-4 font-sans font-bold text-lg">💲8,200,00</small>
            </div>
            
            </div>
    

            

        </main>
    )
}

