import Image from "next/image"

function Benefits(){
    return(
        <main className="md:px-20 pt-2 md:mt-28 mt-20 ">
        <section className="max-w-[1166px] h-auto flex flex-col md:flex-row ">
            <div className="md:flex-1 px-2 md:data-aos=zoom-in-right" data-aos="zoom-in-right">
                <h4 className="font-sans font-bold text-blue-700 text-xl">Benefits</h4>
                <h2 className="font-semibold font-sans text-4xl mt-11 ">Why choose us</h2>
                <p className="max-w-[580px] font-sans font-extralight mt-3">Lorem, adipisicing elit. Ipsum explicabo tenetur expedita culpa voluptatum beatae. Excepturi doloribus recusandae maiores inventore, amet assumenda? Voluptas eaque totam necessitatibus hic veritatis ea maxime!</p>
                <h5 className="md:mt-9 mt-7 font-mono text-blue-800">⭐ Trusted Developer</h5>
                <br />
                <h5 className="font-mono text-blue-800" >⭐ Outstanding properties</h5>
                <br />
                <h6 className="font-mono text-blue-800">⭐ A safe and trustworthy</h6>
                <br />
                <h6 className="font-mono text-blue-800">⭐ Buy with Confidence</h6>
                



            </div>

            <div>
                <Image width={480} height={400} src="/b1.png" alt="" />

            </div>
        </section>
        
    </main>
    )
}

export default Benefits