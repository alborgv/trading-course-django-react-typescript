export default function LearnToTrade() {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-screen bg-gradient-to-t from-bgSecondaryColor to-bgPrimaryColor"
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-white text-center p-4 mt-[-80px]">
          <span className="text-xl font-bold text-primaryColor">LEARN. TRADE. EARN.</span>
          <h1 className="text-5xl font-bold mt-4 font-lato">LEARN TO TRADE</h1>
          <p className="mt-6 text-lg">Lorem ipsum dolor elementum felis <br />
          </p>
          <button className='mt-12 bg-primaryColor text-stone-800 font-poppins font-semibold px-8 py-4 rounded-lg hover:bg-primaryColorHover'>
            Get started now ➜
          </button>
        </div>
      </div>
    </>
  )
}