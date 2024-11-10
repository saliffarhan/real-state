import Image from "next/image"

function Services(){
    return(
        <main className="md:px-20 pt-16 max-w-screen-2xl mx-auto" >
            <section className="max-w-[1166px] h-auto flex flex-col md:flex-row ">
                <div className="md:flex-1 px-2"data-aos="zoom-in-right">
                    <h4 className="font-sans font-bold text-blue-700 text-xl">Our Services</h4>
                    <h2 className="font-semibold font-sans text-4xl mt-11 ">We’re Here To Help You To Find Your Dream House.</h2>
                    <p className="max-w-[580px] font-sans font-extralight mt-8">Lorem, adipisicing elit. Ipsum explicabo tenetur expedita culpa voluptatum beatae. Excepturi doloribus recusandae maiores inventore, amet assumenda? Voluptas eaque totam necessitatibus hic veritatis ea maxime!</p>
                    <h5 className="md:mt-20 mt-7 font-mono text-blue-800">⭐ Property management</h5>
                    <br />
                    <h5 className="font-mono text-blue-800" >⭐ Services</h5>
                    <br />
                    <h6 className="font-mono text-blue-800">⭐ Online Services</h6>
                </div>

                <div data-aos="zoom-in-left">
                    <Image width={480} height={400} src="/service.png" alt="" />

                </div>
            </section>
            
        </main>
    )
}

export default Services