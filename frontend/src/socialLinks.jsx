import MySocials from "./mysocials.jsx";

const SocialLinks = () => {
  return (
    <div className=" max-w-[600px] min-w-[300px] max-h-auto bg-[#h-5000000] border-5 border-[#D0ED57] shadow-[6px_15px_650px_0px_#D0ED57,0px_0px_7px_1px_#D0ED57]">
      <p className="font-bold text-xl bg-[#D0ED57] text-[#383838]">
        Cadu Andrade\<span className="text-base">Designer - FrontEnd Dev</span>
      </p>
      <div className="flex justify-center m-4 ">
        <img
          src="../public/MeGood.png"
          alt="Cadu"
          className="w-full h-50 object-cover"
        ></img>
      </div>
      <MySocials />
    </div>
  );
};

export default SocialLinks;
