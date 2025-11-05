import mentor from '../../assets/images/sir.jpg'
import sifat from '../../assets/images/sifat.jpg'
import mehedi from '../../assets/images/mehedi.jpg'
import adnan from '../../assets/images/adnan.jpg'
import rubel from '../../assets/images/rubel.jpg'
import marjan from '../../assets/images/marjan.jpg'
import nahid from '../../assets/images/nahid1.jpg'
import abubkr from '../../assets/images/abubkr.jpg'
import omor from '../../assets/images/omor.jpg'
import h3 from '../../assets/images/h3.jpg'
function Family() {
  return (
    <>
      <section id='students' className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">Our Members</h2>
  
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 ">
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70 ">
        <img src={mentor} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 1" />
        <p className="mt-2 text-white">Mahadi Tahsan</p>
        <p className=" text-white">Mentor</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={sifat} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 2" />
          <p className="mt-2 text-white">Sifat Ullah</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={mehedi} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 3" />
          <p className="mt-2 text-white">Mehedi Hasan</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={adnan} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 4" />
          <p className="mt-2 text-white">Adnan Sami</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={rubel} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 5" />
          <p className="mt-2 text-white">Rubel Ahmed</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={marjan} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 6" />
          <p className="mt-2 text-white">Ohabul Marjan</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={nahid} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 7" />
          <p className="mt-2 text-white">Nahid Khan</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={abubkr} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 8" />
          <p className="mt-2 text-white">Abu Bakr</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={omor} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 9" />
          <p className="mt-2 text-white">Omar Faruq</p>
          <p className=" text-white">Student</p>
      </div>
      <div className="flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/70">
        <img src={h3} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          alt="Member 10" />
          <p className="mt-2 text-white">Saker Ahmed Hridoy</p>
          <p className=" text-white">Student</p>
      </div>
    </div>
  </section>
    </>
  )
}
export default Family