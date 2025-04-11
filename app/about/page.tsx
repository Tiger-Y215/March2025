"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  let facts: string[] = [
    "Bats are the only flying mammals",
    "Snakes smell with their tongue",
    "While hibernating, bears do not urinate; their bodies convert waste into protein",
    "A chicken once lived for 18 months without its head",
    "Buzz Lightyears original name was Lunar Larry",
    "The real name for a hashtag is an octothorpe",
    "The longest English word is 189,819 letters long",
    "In Switzerland, it is illegal to own just one guinea pig",
    "Banging your head against a wall for one hour burns 150 calories",
    "Snakes can predict earthquakes",
  ];
  const [fact, setFact] = useState("");

  return (
    <>
      <>
        <div className="flex flex-wrap justify-start">
          <h1 className={title()}>About Me</h1>
          <br />

          <Button
            className="bg-purple-950 text-2x1"
            onPress={() => {
              setFact(facts[Math.floor(Math.random() * facts.length)]);
            }}
          >
            Press 4 Random Fact 🎲{" "}
          </Button>
          <p>{fact}</p>
        </div>
      </>
      <div className="flex flex-wrap justify-center bg-blue-950">
        <p className="flex flex-wrap font-bold">
          My name is Tiger Yan, and I&apos;m currently a freshman at Skyline
          High School.
        </p>
        <img
          alt="tennis"
          height="500"
          src="https://tse2.mm.bing.net/th/id/OIP.1UZie5JvTCoITSI_zUB_awHaEK?rs=1&pid=ImgDetMain"
          width="500"
        />
        <p className="flex flex-wrap font-bold">
          {" "}
          Tennis is one of my favorite hobbies, and my main sport.{" "}
        </p>
        <img
          alt="sushi"
          height="500"
          src="https://tse4.mm.bing.net/th/id/OIP.zoTWoTGFWz4T77wp9Ff-eAHaE8?rs=1&pid=ImgDetMain"
          width="500"
        />
        <p className="flex flex-wrap font-bold">My favorite food is sushi.</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">CLICK ME!</a>
        <img
          alt="math/science"
          height="500"
          src="https://www.yu.edu/sites/default/files/math-515606506.jpg"
          width="500"
        />
        <p className="flex flex-wrap font-bold">
          {" "}
          My favorite courses are usually math or science courses.{" "}
        </p>
      </div>
    </>
  );
}
