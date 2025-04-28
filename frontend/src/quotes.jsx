import { useRef, useEffect } from "react";

const QuoteBtn = ({ quote, id }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-[#48BFC3] font-bold ">{quote}</p>
      <p className="text-[#48BFC3] italic">{id}</p>
    </div>
  );
};

const Quotes = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  let quotesArr = [
    { quote: "The best!", id: "-My Wife" },
    { quote: "He is amazing!", id: "-My Friends" },
    { quote: "Pure talent, never seen anything like it!", id: "-My Brother" },
    { quote: "Proud doesn't even begin to cover it.", id: "-My Mom" },
    { quote: "He turns everything he touches into gold!", id: "-My Mentor" },
    { quote: "Committed and creative — a rare combo!", id: "-My Boss" },
    { quote: "Always surprises. Always delivers!", id: "-My Client" },
    { quote: "A true modern genius.", id: "-My Teacher" },
    { quote: "Flawless work, as always.", id: "-My Best Friend" },
    { quote: "An inspiration to all of us.", id: "-My Cousin" },

    { quote: "Does he ever sleep?!", id: "-My Friends" },
    { quote: "Honestly, I'm jealous.", id: "-My Co-worker" },
    { quote: "How is he even real?", id: "-My Grandma" },
    { quote: "He's basically a wizard.", id: "-My Little Brother" },
    { quote: "Probably from another planet.", id: "-My Neighbor" },
    {
      quote: "If perfection had a face, it would be his.",
      id: "-My Best Friend",
    },
    {
      quote: "I taught him everything he knows. (Not really.)",
      id: "-My Uncle",
    },
    { quote: "10/10 would recommend.", id: "-Random Guy on the Street" },
    { quote: "Legend in the making.", id: "-Old Teacher" },
    { quote: "Even Google asks him for help.", id: "-My Dad" },

    { quote: "Built different. Like, *literally*.", id: "-My Gym Buddy" },
    { quote: "Fixed my Wi-Fi by just looking at it.", id: "-My Neighbor" },
    {
      quote: "Probably sold his soul for these skills.",
      id: "-Conspiracy Friend",
    },
    { quote: "Makes coffee nervous.", id: "-My Sleep-Deprived Friend" },
    {
      quote: "Might be three raccoons in a trench coat. Still impressive.",
      id: "-My Crazy Aunt",
    },
    { quote: "Could beat Batman with just a laptop.", id: "-My Nerd Friend" },
    { quote: "Once coded so fast the keyboard caught fire.", id: "-Witness" },
    { quote: "Certified vibe technician.", id: "-Party Friend" },
    { quote: "Speedrun life. WR holder.", id: "-My Gamer Cousin" },
    {
      quote: "Legend says he debugged a website by yelling at it.",
      id: "-Anonymous",
    },
  ];
  return (
    <div
      ref={scrollRef}
      className="flex flex-row overflow-x-scroll h-32 snap-x snap-mandatory scroll-smooth"
    >
      {quotesArr.map((quote) => (
        <div
          key={quote.id}
          className="min-w-full flex items-center justify-center snap-center"
        >
          <QuoteBtn quote={quote.quote} id={quote.id} />
        </div>
      ))}
    </div>
  );
};

export default Quotes;
