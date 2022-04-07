import React from 'react'
import { Link, useParams } from 'react-router-dom';


export default function Header() {
  const paramHeaders = [
  "pizza,burgers,pasta,sushi",
  "vanilla,chocolate,mint,strawberry",
  "classic,barbecue,salt and vinegar,dill pickle",
  "star wars,lotr,harry potter,twilight",
  "red,green,blue,yellow",
  "arch,gentoo,manjaro,artix",
  "alaska,hawaii,new orleans,chicago",
  "netflix,escape room,mini putt,arcade",
  "1,2,3,4,5,6",
  "stay,go",
  "d6",
  "the office,seinfeld,mad men,friends",
  "subway,mcdonalds,chipotle,wendys",
  "horror,comedy,documentary,romcom",
  "sparky,pluto,charlie,buddy",
  "malwarebytes,mcafee,sophos,avira",
  "mario party,fall guys,amogus,civilization",
  "1984,dune,cinder,highrise",
  "rust,dayz,tarkov,pubg",
  "mexico,cuba,hawaii,jamaica,bahamas",
  "to be,not to be",
  "xbox,playstation,switch,pc",
  "white and gold,black and blue",
  "coinflip",
  "eggs,toast,cereal",
  "pepperoni,pinapple,meatlovers,vegetarian",
  "apples,pears,oranges,bananas,watermelons",
  "penne,rigatoni,bucatini,macaroni,linguine",
  "red,white,rose,sparkling",
  "vodka,whiskey,brandy,gin",
  "margarita,old fashioned,manhattan,daiquiri"
]
  
  //Initial random set
  let randomEx = paramHeaders[Math.floor(Math.random()*(paramHeaders.length))]

  setInterval(function () {
    document.querySelector(".paramHeader").style.opacity = 0;

    setTimeout(function(){
      document.querySelector(".paramHeader").style.opacity = 100;
      let randomEx = paramHeaders[Math.floor(Math.random()*(paramHeaders.length))]
      document.querySelector(".paramHeader").textContent = "/" + randomEx
    },200)

  }, 8000);
  
  return (
    <header>
      <h2 className="mainHeader"><Link to="/">spiin.me</Link></h2>  
      <h3 className="paramHeader">/{randomEx}</h3>
    </header>
  )
}
