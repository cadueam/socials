import React, { useState, useEffect, useRef } from "react";

const MyButton = ({ link, id, img, description, altdescription }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(description);
  const [isScrambling, setIsScrambling] = useState(false);
  const scrambleTimerRef = useRef(null);
  const scrambleCountRef = useRef(0);
  const maxScrambles = 5;

  const getScrambledText = (text) => {
    const characters = text.split("");
    const scrambled = [...characters].sort(() => Math.random() - 0.5).join("");
    return scrambled;
  };

  useEffect(() => {
    if (isScrambling) {
      scrambleTimerRef.current = setInterval(() => {
        scrambleCountRef.current += 1;

        if (scrambleCountRef.current >= maxScrambles) {
          clearInterval(scrambleTimerRef.current);
          setDisplayText(isHovered ? altdescription : description);
          setIsScrambling(false);
          scrambleCountRef.current = 0;
        } else {
          setDisplayText(
            getScrambledText(isHovered ? description : altdescription),
          );
        }
      }, 50);
    }

    return () => {
      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }
    };
  }, [isScrambling, isHovered, description, altdescription]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsScrambling(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsScrambling(true);
  };

  return (
    <a href={link}>
      <div
        className="flex bg-[#D0ED57] m-2 text-white font-bold py-2 px-4 cursor-pointer transition-all duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={img}
          alt={id}
          className="mr-2 h-8 border border-[#383838] border-2"
        />
        <p className="text-[#383838] text-xl">{displayText}</p>
      </div>
    </a>
  );
};

const MySocials = () => {
  let arrOfSocials = [
    {
      link: "https://www.behance.net/caduvid0ac9",
      id: "Behance",
      img: "../public/behance-svgrepo-com.svg",
      description: "Behance",
      altdescription: "</ Check my artWork>",
    },

    {
      link: "https://github.com/cadueam",
      id: "Github",
      img: "../public/github-svgrepo-com.svg",
      description: "Github",
      altdescription: "</ Check my code>",
    },

    {
      link: "https://www.linkedin.com/in/cadueam/",
      id: "LinkedIn",
      img: "../public/linkedin-svgrepo-com.svg",
      description: "LinkedIn",
      altdescription: "</ My path..>",
    },

    {
      link: "google.com.br",
      id: "Contact",
      img: "../public/whatsapp-svgrepo-com.svg",
      description: "Contact",
      altdescription: "</ Let's work together>",
    },
  ];

  return (
    <div>
      {arrOfSocials.map((social) => {
        return (
          <div key={social.id}>
            <MyButton
              link={social.link}
              img={social.img}
              id={social.id}
              description={social.description}
              altdescription={social.altdescription}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MySocials;
