import React from 'react';
import CardFull  from './cardfull';
import CardHalf from './cardhalf';
import ShareStoryCard from './sharestorycard';
import CardWithText from './cardwithtext';

function Cards() {
  return (
      <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-6">
        <CardFull />
        <div className="flex flex-wrap justify-between pt-12 mx-2">
         <CardHalf 
          videoUrl= "https://www.youtube.com/embed/R7DwiuU6Wwg" 
          name="Nikko Pascua"
          tagLine = "Step up your stay-home-story with Food Photography"
          text="Nikko Pascua is a Filipino Photographer based in Sunny Singapore 
                specialising in food &amp; beverage photography. He is an Art Director 
                at Food News Agency where he has worked on brands like Asia's 50 Best
                 Restaurants, the Singapore Cocktail Festival, JW Marriott South Beach 
                 Singapore, Westholme, the Jigger &amp; Pony Group, among others." 
          />
          <CardHalf 
          videoUrl="https://www.youtube.com/embed/VRKXFlfmWac" 
          name="Claudia and Kaan"
          tagLine = "Travel and Lifestyle Content Creation with The Lost Two"
          text="Claudia and Kaan also know as “The Lost Two” are travel and 
          lifestyle content creators who have traded in their 9-5 for a life
           full of adventure. They are conscious travelers who encourage
            sustainable tourism and aim to leave lasting, positive impacts 
            on the places and people they visit." 
          />
        </div>
        <ShareStoryCard />
        <CardWithText
          title="QuaranTEDS" 
          text="The Covid-19 pandemic is real and most of us are
          staying at home. While we are stuck in our own crib, why
           not make good use of this time by learning something new?"
        />
        <CardWithText
         title="About Us" 
         text="We are a community of curious cats and creatives. 
              We aim to connect like-minded people where we can learn,
              inspire and be inspired by one another as we share and
               hone our individual talents and passions."
         />
      </div>
  );
}

export default Cards;
