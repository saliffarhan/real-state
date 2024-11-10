import Image from "next/image"

function Blog(){
    return(
         <main>
            <h1 className="md:px-24 mt-24 text-4xl font-sans font-bold">See our latest news & read blog</h1>

            <section className="flex flex-col md:flex-row md:px-20 pt-2 md:mt-8 mt-20">
            <div className="max-w-[400] h-[530px] hover:opacity-85">
                <Image width={400} height={500} src="/blog1.png" alt="" />
                
            </div>
            <div >
                <Image width={380} height={300} src="/blog2.png" alt="" />
                <div className="hover:opacity-85">
                <Image width={385} height={300} src="/blog3.png" alt="" />
            </div>
            </div>
            <div className="max-w-[400] h-[530px] hover:opacity-85">
                <Image width={400} height={500} src="/blog4.png" alt="" />
                
            </div>
            </section>
            
        </main>
    )
}

export default Blog