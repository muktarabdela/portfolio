import { styles } from "../styles"
const Hero = () => {
  return (
    <section className="relative w-full h- mx-auto">
      <div className={`${styles.paddingX} relative inset-0 top-[4em]  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className="text-[#915eff]"> Muktar</span> </h1>
      </div>

      <div className="mt-[12em] lg:mt-[19em]">
      </div>
      <div className="max-w-7xl ml-6 flex flex-row items-start gap-5">
        <h1 className="text-[#dfd9ff] font-bold lg:text-[46px] sm:text-[35px] xs:text-[35px] text-[26px] lg:leading-[40px] relative bottom-[4em] ">Full-stack MERN <span className="text-[#915eff]"> | Next.js Developer</span> </h1>
      </div>

      <div className="flex -8 lg:mt-10">
        <a href="/public/muktar.pdf"
          target="_blank" >
          <button className="
        max-w-7xl ml-5 flex flex-row items-start gap-5
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative bottom-[6em] lg:bottom-[12em]">
            Download CV
          </button>
        </a>
        <a href="https://www.evangadi.com/files/certificates/student/MuktarAbdela11_28_2023_0454/MuktarAbdela.jpg"
          target="_blank" rel="noreferrer"
        >
          <button className="
        max-w-7xl ml-2 flex flex-row items-start gap-5
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative bottom-[6em] lg:bottom-[12em]">
            Download certificate
          </button>
        </a>
      </div>


    </section>
  )
}

export default Hero