"use client";

import Image from "next/image";
import { blogPosts } from "../page";
import { notFound } from "next/navigation";
import { useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};

type ContentSection = {
  type: "paragraph" | "heading" | "list";
  content?: string;
  items?: string[];
};

type BlogContent = {
  title: string;
  date: string;
  content: ContentSection[];
};

// This would typically come from a CMS or API
const getBlogContent = (slug: string): BlogContent | null => {
  switch (slug) {
    case "bangkok-travel-guide":
      return {
        title: "Issue #1: Bangkok - Golden Traveler vs. Travel Shoestringer",
        date: "December 03, 2024",
        content: [
          {
            type: "paragraph",
            content: "Experience the best of Bangkok on any budget!",
          },
          {
            type: "paragraph",
            content:
              "Welcome Golden Shoestringers! In this addition, we're going to explore one of my favorite cities in the world. It's a place that truly has something for everyone, and even after several visits, you may not have begun to scratch the surface of seeing all that is has to offer.",
          },
          {
            type: "paragraph",
            content:
              "So here's a big cheers to checking out Bangkok, Thailand! 🥂",
          },
          {
            type: "heading",
            content: "TL;DR (Time is money, and shoelaces aren't free!)",
          },
          {
            type: "list",
            items: [
              "Golden Travelers - Stay: Mandarin Oriental | Eat: Gaa | Activity: Spa day at The Banyan Tree Hotel",
              "Shoestringers - Stay: Sindhorn Midtown Hotel | Eat: Krua Khun Puk | Activity: Longtail Canal Boat",
              "Hidden Gem - Firefly Bar @ Sindhorn Kempinski Hotel",
              "Travel Hack - Location, location, location! | BTS from the airport | Watch that spicy! 🌶️🌶️🌶️🌶️🌶️",
              "More Food & Drink - Food Court @ Terminal 21",
            ],
          },
          {
            type: "paragraph",
            content:
              "As you know, here at Golden Shoestrings, we're all about living a beautiful life, whether our money is long or perhaps a little 'arithmetically challenged.' Or maybe you're someone like me, who is just as happy to put on your fancy digs, and do fancy shhh shtuff, as you are to head off the beaten path, crack open a cold brew, and relax while the world goes by.",
          },
          {
            type: "paragraph",
            content:
              "To that end, we begin every issue with our featured section, providing you some inspiration of a few different ways to have a rich experience in these fantastic destinations, whether you're prepared to drop some serious gold coin, keep it a little more shoestring-y, or perhaps mixing and matching a little of both to create your next dream getaway. So if that sounds good to you, let's see what we'll see in Bangkok! 🌟✨🌟✨🌟✨",
          },
          {
            type: "heading",
            content: "FEATURED: Golden vs. Shoestring - Bangkok Edition",
          },
          {
            type: "heading",
            content: "The Golden Traveler",
          },
          {
            type: "paragraph",
            content:
              "Much of Southeast Asia is commonly know as a 'low-cost' option for holidaying. And while that can certainly be true, the bustling and expansive metropolis that is Bangkok offers every creature comfort and high-end experience you could ever imagine, and then some!",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "No matter where you are in the world, most everyone recognizes the name Mandarin Oriental. And the Bangkok edition definitely lives up to that billing. It has all of the luxury that you would expect, and an amazing view of the Chao Phraya River. Certainly a wonderful place to call your temporary home.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: If a stay here is a bit out of reach, visiting The Mandarin's Verandah Restaurant for a riverside coffee and pastry is still a lovely way to start the day. Just make sure that you have the right attire on for their dress code.",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "You want Michelin-stars? Here you go! Gaa is a restaurant in Bangkok that offers a truly unique dining experience. The restaurant blends bold Indian flavors with modern techniques, creating an innovative and memorable menu. The tasting menu will take your breath away with both flavor and artful appearance. The ambiance is sleek but warm, with a focus on understated elegance. Gaa is a high-end dining experience that is truly unforgettable.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "So you've been loving your world class holiday so much that you need a mini-vacation from your vacation. Well, the Banyan Tree Spa is Forbes Five-Star rated destination known for its luxurious Thai-inspired treatments. The spa offers signature massages, body wraps, and facials, all designed to rejuvenate both body and mind. The spa's design infused with elements of Thai culture, creating a restful escape from the city's hustle and bustle.",
          },
          {
            type: "heading",
            content: "The Shoestringer",
          },
          {
            type: "paragraph",
            content:
              "On the other hand, if you're looking to have amazing experiences, eat incredible food, and generally live your best life without really needing to spend a ton of cash, I would be hard pressed to find very many cities that can offer the sheer number of quality options that you can find in Bangkok.",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "The Sindhorn Midtown Hotel Bangkok has a sleek design and sophisticated atmosphere, wrapped in a chic elevated skin. Is offers spacious rooms, and modern amenities. But the real draw is its location, location, location! In the heart of Sukhumvit it's a fantastic base to experience the city's energy!",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Need to escape the heat/rain? Stroll over to nearby Open House, an expansive and often quiet bookstore-foodhall-coffee shop on the top floor of the Central Embassy Mall. (Yes, a quiet mall. True story.)",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "So you want some delicious, authentic Thai food? But how do you know if it's a good place or not? Go where the Thai people go! Krua Khun Puk is a cozy little indoor/outdoor space, that's almost always packed, and for good reason. The food is delicious. A casual welcoming atmosphere, quirky decor, and tons of local charm, mixed with this restaurant's great menu of classic dishes and regional specialties, make it a definite pick at the end of your day.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "In my opinion, discovering things to do in Bangkok that don't break the bank, is really where this city shines. But one of the truly unique and all-time favorite things I've done is hopping on a Longtail Canal Boat for a couple of hours. You can invite just about as many or few people as you want, to tour through the canals of the city. You'll spot some giant lizards, feed the fish bread, and of course the temples. A longtail ride is an experience that you wont regret!",
          },
          {
            type: "heading",
            content:
              "HIDDEN GEM: Firefly Bar (So Hidden, Even Locals Don't Know About It.)",
          },
          {
            type: "paragraph",
            content:
              "I feel like a proud Papa sharing this place with you. The Firefly Bar at the Sindhorn Kempinski Hotel Bangkok was a venue that actually gave me the goose-pimples the first time I saw it. First of all, you would be forgiven if you didn't even make it to the bar, because LOOK AT THAT LOBBY! Sheesh! 😍 I ended up here on a fluke, due to my original plan being closed for a special event. But it was kismet, because it was love at first sight with this place, and I kept going back.",
          },
          {
            type: "paragraph",
            content:
              "The vibe is chic and stylish, but the bartenders are warm and friendly. The mix makes you feel like you're in your rich friend's living room. Or if you are the rich friend, then maybe just your own living room—if you lived in a spectacular hotel in Bangkok, baby! So Firefly Bar serves beautifully crafted cocktails, wines, and spirits. And a couple of days per week they have a live jazz band. The reason it's a hidden gem is because remarkably, it's often not that busy. The hotel is away from the main drag, and the venue is smallish, so I think that's what keeps the crowd size down. But do note, that I on the weekends it can get full, if you're a late arriver better to make a table reservation. The best part of it all is that there is a range of prices for the drinks, so you can go big, or just keep in mellow for a couple, and go home satisfied. Either way, this place gets all the stars!",
          },
          {
            type: "heading",
            content:
              "MORE FOOD & DRINK: Food Court @ Terminal 21 Mall (Tasty is as Tasty Does)",
          },
          {
            type: "paragraph",
            content:
              "I know what you're thinking, 'Dinar, I didn't fly halfway around the world to go to a food court!' Truuuuust me. I could've put this place in the hidden gem, or travel hack sections. That's how versatile it is. A local friend of mine told me that the vendors here are actually some of the renowned street food vendors that people DO travel halfway around the world for, but they got invited to open shop at the food court. Are you with me now!? So yeah, the food court has some of the best Thai food you'll find in the city, and prices are mostly around 60-150THB. FOR-REAL. And it's inside! That's a theme. You'll be running to get inside. 🌞 Definitely get one of these smoothies! The banana-berry is my favorite. :P",
          },
          {
            type: "heading",
            content: "TRAVEL HACKS: The true secrets to enjoying Bangkok",
          },
          {
            type: "list",
            items: [
              "Did I already say LOCATION!?: Bangkok is huge. Think Los Angeles, London, Tokyo-type big. So if you've been to those places you know that it's important to really pick your home base wisely. This can make or break your trip. If you're far away from the things you want to go out and do—well, after a long day of heat and humidity (or torrential downpours), it ain't happening. Choose wisely, my friends.",
              "Escaping the airport: Listen, big money or small, traffic conquers all! And Bangkok's got some of the nastiest traffic I've ever seen. So whether you're in the car service or the taxi crowd, I will always swear by taking the train from the airport. It's cheap, it's fast, it's air conditioned. Get as close as you can to your hotel on the train, and then taxi it the rest of the way. Golden! 🚅",
              "Thai people are not playing when they say spicy: Hey look, this is a judgement free zone. So if you're a masochist or whatever, do you boo-boo. But me, I would prefer not to incinerate my insides on the first day of my vacation. So yeah, play at your own risk.",
            ],
          },
          {
            type: "paragraph",
            content:
              "Next Issue: Someone once said 'Paris is not a city; it's a world.' In that case, tune in next week, as I invite you to explore the world with me.",
          },
          {
            type: "paragraph",
            content: "Catch you on the flip side! 🌟✨🌟",
          },
        ],
      };
    case "paris-travel-guide":
      return {
        title: "Issue #2: Paris - Golden Traveler vs. Travel Shoestringer",
        date: "December 10, 2024",
        content: [
          {
            type: "paragraph",
            content: "Experience the magic of Paris, from budget to luxe! 🗼",
          },
          {
            type: "paragraph",
            content:
              "Welcome back, Golden Shoestringers! This week, we're exploring what many consider to be the most romantic city in the world. A place where art, history, and culture blend seamlessly with modern luxury and timeless charm.",
          },
          {
            type: "paragraph",
            content:
              "Let's dive into the enchanting world of Paris, France! 🥂",
          },
          {
            type: "heading",
            content: "TL;DR (Time is money, and shoelaces aren't free!)",
          },
          {
            type: "list",
            items: [
              "Golden Travelers - Stay: Ritz Paris | Eat: L'Abeille | Activity: Private Versailles Tour",
              "Shoestringers - Stay: Citizen M Gare de Lyon | Eat: Bouillon Chartier | Activity: Luxembourg Gardens",
              "Hidden Gem - Le Petit Belloy Saint-Germain's Secret Rooftop",
              "Travel Hack - Museum Pass | Metro vs. Taxi | Early Bird Eiffel 🗼",
              "More Food & Drink - Marché des Enfants Rouges",
            ],
          },
          {
            type: "paragraph",
            content:
              "Paris has long held a reputation as a city that caters exclusively to luxury travelers, but I'm here to tell you that this beautiful metropolis has something for everyone. Whether you're ready to splash out on a room with an Eiffel Tower view or you're hunting for the perfect street crêpe, Paris delivers! 🌟✨",
          },
          {
            type: "heading",
            content: "FEATURED: Golden vs. Shoestring - Paris Edition",
          },
          {
            type: "heading",
            content: "The Golden Traveler",
          },
          {
            type: "paragraph",
            content:
              "Paris practically invented luxury travel, and it continues to set the standard for high-end experiences. From palace hotels to three-star Michelin restaurants, the city offers countless ways to indulge in the finer things in life.",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "The Ritz Paris is more than just a hotel; it's a piece of history. Located in the prestigious Place Vendôme, this palace hotel has hosted everyone from Coco Chanel to Ernest Hemingway. The rooms are pure Parisian opulence, the service is impeccable, and the Bar Hemingway makes what many consider to be the best martinis in Europe.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Even if you're not staying here, treat yourself to afternoon tea in the Salon Proust. The experience is pure magic, and the people-watching is unmatched! Just remember to dress the part.",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "L'Abeille at the Shangri-La Hotel Paris is a two-Michelin-starred testament to French gastronomy. Chef Christophe Moret creates dishes that are both technically brilliant and emotionally moving. The restaurant's garden view setting is intimate and romantic, perfect for special occasions or when you simply want to experience the pinnacle of Parisian dining.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "Book a private after-hours tour of Versailles. This exclusive experience lets you explore the Palace of Versailles without the crowds. Your expert guide will share fascinating stories about the Sun King and Marie Antoinette while you wander through the Hall of Mirrors in peaceful solitude. End the evening with champagne in the gardens. Pure magic! ✨",
          },
          {
            type: "heading",
            content: "The Shoestringer",
          },
          {
            type: "paragraph",
            content:
              "Here's where Paris really surprises people - you can have an absolutely magical time in this city without breaking the bank. Some of my favorite Parisian memories cost little to nothing at all!",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "The CitizenM Paris Gare de Lyon is a perfect example of smart, modern budget travel. The rooms are small but efficiently designed, with huge windows and super-comfortable beds. The location next to Gare de Lyon makes it perfect for exploring the city, and the rooftop bar offers stunning views of Paris.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Book directly through their website and join their loyalty program - you'll often find rates 10-15% lower than other booking sites, plus perks like late checkout!",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "Bouillon Chartier has been serving classic French cuisine at reasonable prices since 1896. The belle époque dining room is stunning, the service is charmingly brusque (in the best Parisian way), and the food is delicious. Don't miss the beef bourguignon or the crème caramel. The best part? A full meal with wine will cost you less than 25€!",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "The Luxembourg Gardens are pure Paris magic, and they're completely free! Grab some cheese and a baguette from a local market, find a chair near the central fountain, and watch the world go by. You'll see children sailing toy boats, old men playing chess, and couples stealing kisses - it's like a French movie come to life! 🌳",
          },
          {
            type: "heading",
            content:
              "HIDDEN GEM: Le Petit Belloy Saint-Germain's Secret Rooftop",
          },
          {
            type: "paragraph",
            content:
              "This is one of those spots that makes me feel like I'm letting you in on a real secret. Le Petit Belloy Saint-Germain is a modest hotel in the Latin Quarter, but here's the thing - they have an unmarked rooftop terrace that's open to the public! 🤫",
          },
          {
            type: "paragraph",
            content:
              "Take the elevator to the top floor, then follow the stairs up one more level. You'll find yourself on a small terrace with one of the most spectacular views of Paris, including Notre-Dame and the Panthéon. It's perfect for sunset, and unlike the rooftop bars at luxury hotels, you can bring your own bottle of wine and snacks. Just remember to be respectful and keep the secret special! The best part? It costs absolutely nothing except the price of whatever treats you bring along.",
          },
          {
            type: "heading",
            content:
              "MORE FOOD & DRINK: Marché des Enfants Rouges (Paris' Oldest Market)",
          },
          {
            type: "paragraph",
            content:
              "You might be thinking, 'Another market recommendation?' But trust your boy on this one! The Marché des Enfants Rouges, dating back to 1628, is the oldest covered market in Paris, and it's an absolute VIBE. This isn't just a market - it's a food lover's paradise where you can sample everything from traditional French to Moroccan, Japanese, and Italian cuisine. The vendors here have been perfecting their craft for generations, and the prices are surprisingly reasonable. My go-to move? The Lebanese stand's falafel plate (crispy, perfectly spiced) followed by the French cheese stall's selection of the day. Heaven! 🧀✨",
          },
          {
            type: "heading",
            content: "TRAVEL HACKS: The true secrets to enjoying Paris",
          },
          {
            type: "list",
            items: [
              "Museum Pass Magic: If you're planning to hit multiple museums, get the Paris Museum Pass. Not only does it save you money, but it also lets you skip the ticket lines (though not security). Pro move: Start early at the Louvre, when tour groups are still at breakfast.",
              "Metro > Taxi: Paris traffic is notorious, and surge pricing on ride-shares can be painful. The Metro is clean, efficient, and runs like clockwork. Get a Navigo Easy card and load it with a weekly pass - you'll save a fortune and probably get places faster!",
              "Early Bird Gets the Tower: Want that perfect Eiffel Tower shot? Be at Trocadéro by sunrise. You'll have the place almost to yourself, the light is magical, and you won't waste hours in queues. Bonus: most cafes open early, so you can reward yourself with fresh croissants after! 🌅",
            ],
          },
          {
            type: "paragraph",
            content:
              "Next Issue: Pack your sunscreen and shades as we head to the City of Angels! Los Angeles is calling, and we're going to explore everything from Venice Beach to Beverly Hills.",
          },
          {
            type: "paragraph",
            content: "À bientôt, mes amis! 🌟✨🌟",
          },
        ],
      };
    case "los-angeles-travel-guide":
      return {
        title:
          "Issue #3: Los Angeles - Golden Traveler vs. Travel Shoestringer",
        date: "December 17, 2024",
        content: [
          {
            type: "paragraph",
            content: "Experience the glitz and grit of LA, your way! 🌴",
          },
          {
            type: "paragraph",
            content:
              "Welcome back, Golden Shoestringers! This week, we're diving into a city that's as diverse as its population - a sprawling metropolis where dreams are made and broken daily, where you can surf in the morning and ski in the afternoon (if you're ambitious enough).",
          },
          {
            type: "paragraph",
            content:
              "Let's explore the many faces of Los Angeles, California! 🌟",
          },
          {
            type: "heading",
            content: "TL;DR (Time is money, and shoelaces aren't free!)",
          },
          {
            type: "list",
            items: [
              "Golden Travelers - Stay: Pendry West Hollywood | Eat: n/naka | Activity: Private Warner Bros. Studio Tour",
              "Shoestringers - Stay: Mama Shelter | Eat: Grand Central Market | Activity: Griffith Observatory",
              "Hidden Gem - The Japanese Garden in Van Nuys",
              "Travel Hack - Car Rental Tips | Metro Expo Line | Taco Truck Treasures 🌮",
              "More Food & Drink - Smorgasburg LA",
            ],
          },
          {
            type: "paragraph",
            content:
              "LA might be known for its movie stars and million-dollar mansions, but this city has something for everyone. Whether you're sipping champagne in Beverly Hills or hunting down the best $1 tacos in East LA, you're in for an adventure! 🌟✨",
          },
          {
            type: "heading",
            content: "FEATURED: Golden vs. Shoestring - Los Angeles Edition",
          },
          {
            type: "heading",
            content: "The Golden Traveler",
          },
          {
            type: "paragraph",
            content:
              "Los Angeles knows how to do luxury. From exclusive rooftop pools to private celebrity home tours, the city offers endless ways to live out your Hollywood dreams.",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "The Pendry West Hollywood is the epitome of modern California luxury. Perched on the Sunset Strip, this hotel offers stunning views of the city, a rooftop pool that's an Instagram dream, and a Wolfgang Puck restaurant that will make you never want to eat anywhere else. The rooms are a perfect blend of Hollywood glamour and contemporary comfort.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Book a cabana at the pool for the afternoon - it's the perfect spot to watch the sunset while spotting celebrities trying to be incognito (spoiler: they're not).",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "n/naka is not just a meal, it's a transcendent culinary experience. Chef Niki Nakayama's modern kaiseki restaurant is one of the most sought-after reservations in the city (plan ahead, way ahead). Each course is a work of art that tells a story about Los Angeles' incredible ingredients and Japanese culinary traditions. Yes, it's expensive. Yes, it's worth every penny.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "Skip the regular studio tours and book a private VIP experience at Warner Bros. Studio. You'll get a customized tour focused on your interests, whether that's Friends, Harry Potter, or DC Comics. The best part? You can actually step onto active sets (when they're not filming) and get a real behind-the-scenes look at how Hollywood magic is made. 🎬",
          },
          {
            type: "heading",
            content: "The Shoestringer",
          },
          {
            type: "paragraph",
            content:
              "Here's where LA really shines - you can have an incredible time in this city without spending a fortune. Some of the best experiences are completely free!",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "Mama Shelter in Hollywood is a perfect example of style meeting value. This boutique hotel has funky, colorful rooms, a gorgeous rooftop with 360-degree views of LA (including the Hollywood Sign!), and a location that can't be beat. The vibe is young and fun, and the prices are surprisingly reasonable for what you get.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: The rooftop bar is open to the public and has some of the best views in Hollywood. Go for happy hour to save even more!",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "Grand Central Market is a feast for all your senses. This historic downtown food hall has been feeding LA since 1917, and it keeps getting better. From the iconic Eggslut to the heavenly tacos at Villa Moreliana, you can eat like royalty for less than $15. My move? Get the pastrami at Wexler's Deli, then cool off with a cold brew from G&B Coffee.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "The Griffith Observatory is one of LA's most iconic landmarks, and guess what? It's FREE! Hike up from Los Feliz (also free), explore the exhibits (still free), and catch one of the best views of the city and the Hollywood Sign (you guessed it - free!). Time it right and you can watch the sunset over the city, then stay for some stargazing. Pure magic that doesn't cost a dime! ⭐",
          },
          {
            type: "heading",
            content:
              "HIDDEN GEM: The Japanese Garden (The Valley's Best Secret)",
          },
          {
            type: "paragraph",
            content:
              "Okay, I'm about to put you onto something special. While everyone's fighting the crowds at the Huntington Gardens, there's a stunning 6.5-acre Japanese garden hiding in Van Nuys. I know what you're thinking - Van Nuys? Trust me! 🌿",
          },
          {
            type: "paragraph",
            content:
              "The Japanese Garden, or 'Suiho-en' (Garden of Water and Fragrance), is one of the most authentic Japanese gardens outside of Japan. It was designed by Dr. Koichi Kawana and uses reclaimed water to create its stunning ponds and waterfalls. The best part? It's only $5 to enter, and you'll often have the place almost to yourself. It's the perfect escape from the LA chaos, and the photos you'll get here will make your Instagram followers think you've found some secret corner of Kyoto.",
          },
          {
            type: "heading",
            content:
              "MORE FOOD & DRINK: Smorgasburg LA (Sunday Funday Done Right)",
          },
          {
            type: "paragraph",
            content:
              "Every Sunday, the Alameda Produce Market transforms into a food lover's paradise. Smorgasburg LA is where you'll find everything from Filipino fusion to artisanal ice cream, craft beer to vegan ramen. But here's the real tea - this is where LA's next food trends are born. Remember the ramen burger? Started here. That viral Japanese soufflé pancake? Yep, here too. My move? Show up hungry around 11am (beat the crowds), grab a Lobsterdamus lobster tail ($$$$ but worth it for a splurge) and whatever catches your eye from at least 2-3 other vendors. Then find a spot in the shade and feast like royalty! 🦞✨",
          },
          {
            type: "heading",
            content: "TRAVEL HACKS: The true secrets to enjoying LA",
          },
          {
            type: "list",
            items: [
              "Rental Car Reality: Everyone says you need a car in LA, but be strategic! If you're staying in one area (like Santa Monica), use ride shares and rent a car just for day trips. Parking fees at hotels can be brutal ($40-50/day!). For longer stays, try Turo instead of traditional rentals - often cheaper and more interesting cars!",
              "Metro Expo Line Magic: The Metro gets a bad rap, but the Expo Line from Downtown to Santa Monica is a game changer. It's cheap, avoids traffic, and the Santa Monica station puts you blocks from the beach. Perfect for beach days when parking would be a nightmare!",
              "Taco Truck Tactics: The best tacos are found in trucks, not restaurants. Look for trucks with lines of locals and construction workers. If you see a truck with a long line at lunch - that's your spot! And never, ever pay more than $2.50 for a taco unless it's made with gold leaf! 🌮",
            ],
          },
          {
            type: "paragraph",
            content:
              "Next Issue: Get ready for some serious humidity and even more serious flavors as we head to Ho Chi Minh City! Vietnam's largest city is calling, and we're going to eat our way through all of it.",
          },
          {
            type: "paragraph",
            content: "Catch you on the flip side! 🌟✨🌟",
          },
        ],
      };
    case "ho-chi-minh-city-guide":
      return {
        title:
          "Issue #4: Ho Chi Minh City - Golden Traveler vs. Travel Shoestringer",
        date: "December 24, 2024",
        content: [
          {
            type: "paragraph",
            content: "Experience the energy of Saigon, from luxe to local! 🏍️",
          },
          {
            type: "paragraph",
            content:
              "Welcome back, Golden Shoestringers! This week, we're diving into a city that never seems to sleep - a place where tradition meets modernity at every corner, where the smell of phở mingles with the aroma of fresh French pastries, and where the energy is absolutely infectious.",
          },
          {
            type: "paragraph",
            content:
              "Let's explore the vibrant streets of Ho Chi Minh City, Vietnam! 🌟",
          },
          {
            type: "heading",
            content: "TL;DR (Time is money, and shoelaces aren't free!)",
          },
          {
            type: "list",
            items: [
              "Golden Travelers - Stay: Park Hyatt Saigon | Eat: Uu Dam | Activity: Private Mekong Delta Tour",
              "Shoestringers - Stay: Tam Tam Saigon | Eat: Lunch Lady | Activity: Back of the Bike Tours",
              "Hidden Gem - The Cafe Apartment Building",
              "Travel Hack - Grab App | Street Food Safety | Coffee Culture ☕",
              "More Food & Drink - Secret Craft Beer Scene",
            ],
          },
          {
            type: "paragraph",
            content:
              "HCMC might be known for its budget-friendly options, but this dynamic metropolis can deliver five-star experiences that rival any major city. Whether you're sipping sundowners at a rooftop bar or slurping phở on a plastic stool, you're in for an unforgettable ride! 🌟✨",
          },
          {
            type: "heading",
            content:
              "FEATURED: Golden vs. Shoestring - Ho Chi Minh City Edition",
          },
          {
            type: "heading",
            content: "The Golden Traveler",
          },
          {
            type: "paragraph",
            content:
              "While HCMC is often celebrated for its affordability, the city has been quietly developing a luxury scene that would impress even the most discerning travelers. From colonial-era hotels to contemporary fine dining, Saigon knows how to do luxury with a unique Vietnamese twist.",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "The Park Hyatt Saigon is the grand dame of HCMC hotels. This colonial-style masterpiece sits right on Opera Square, combining old-world charm with modern luxury. The rooms are spacious and elegant, the pool is an oasis in the urban jungle, and the service is absolutely impeccable. Plus, you're steps away from all the major attractions.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Book a room with Opera House views, and don't miss the afternoon tea in the Park Lounge - it's a beautiful blend of Vietnamese and European traditions.",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "Uu Dam is changing the game for upscale Vietnamese cuisine. Located in a beautifully restored French villa, the restaurant offers innovative takes on traditional dishes. The tasting menu is a journey through Vietnam's culinary heritage, elevated with modern techniques and premium ingredients. The wine pairing, featuring both international and surprising local selections, is worth the splurge.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "Skip the crowded group tours and book a private luxury Mekong Delta experience. You'll be whisked away in a comfortable car to My Tho, where a private wooden boat awaits. Explore small canals, visit local orchards, and enjoy a gourmet lunch prepared by a local family. The day ends with sunset cocktails on the river. Pure magic! 🌅",
          },
          {
            type: "heading",
            content: "The Shoestringer",
          },
          {
            type: "paragraph",
            content:
              "This is where HCMC truly shines - the city offers some of the best budget experiences in the world, and often these are the most authentic and memorable moments of your trip!",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "Tam Tam Saigon in District 1 is the perfect example of Vietnamese hospitality meeting modern comfort. The rooms are clean and stylish, with all the essentials you need. The real star is the location - you're right in the heart of the backpacker district, but on a quieter street so you can actually sleep!",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Book a room on the higher floors for better views and less street noise. The rooftop common area is perfect for meeting other travelers and getting local tips!",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "The Lunch Lady became famous after Anthony Bourdain's visit, but don't let that scare you away - she's still serving up some of the best noodles in the city. Each day brings a different soup, and they're all incredible. For about $3, you get a bowl of pure joy. Go early (around 11am) to beat the crowds and the heat.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "Back of the Bike Tours is hands-down the best way to experience Saigon's street food scene. For about $45, you'll spend 4-5 hours on the back of a scooter, driven by a local guide, eating your way through hidden alleys and local favorites that you'd never find on your own. It's exhilarating, delicious, and an absolute bargain! 🏍️",
          },
          {
            type: "heading",
            content:
              "HIDDEN GEM: The Cafe Apartment Building (Coffee Heaven in Plain Sight)",
          },
          {
            type: "paragraph",
            content:
              "This one's hiding in plain sight at 42 Nguyen Hue Street. From the outside, it looks like any other aging apartment building, but inside? Pure magic! Each floor houses different independent cafes, boutiques, and creative spaces. 🏢",
          },
          {
            type: "paragraph",
            content:
              "My move? Start at The Letter Coffee on the top floor for amazing city views and their signature coconut coffee. Then work your way down, exploring each floor's unique offerings. Some spaces are super sleek and modern, others charmingly rustic. It's like a vertical village of creativity, and most drinks will set you back less than $3. Just remember - the elevator is tiny and slow, but that's part of the charm!",
          },
          {
            type: "heading",
            content: "MORE FOOD & DRINK: Saigon's Secret Craft Beer Scene",
          },
          {
            type: "paragraph",
            content:
              "Plot twist - HCMC has a booming craft beer scene! While everyone knows about bia hơi (fresh beer), the city's craft brewing scene is one of Asia's most exciting. Heart of Darkness Brewery leads the pack with their experimental brews, but don't sleep on Pasteur Street Brewing Co. - their Jasmine IPA is legendary. Want the inside scoop? Head to BiaCraft in District 3. It's where local brewers hang out, and they often test their newest creations here first. The best part? Even these fancy craft beers will cost you way less than a basic draft back home! 🍺✨",
          },
          {
            type: "heading",
            content: "TRAVEL HACKS: The true secrets to enjoying HCMC",
          },
          {
            type: "list",
            items: [
              "Grab is Your Best Friend: Forget traditional taxis - download the Grab app. It works like Uber but also lets you book motorbike taxis (much faster in traffic), and you can pay in cash. Plus, the prices are fixed, so no haggling needed!",
              "Street Food Safety: That fear of street food? Drop it. Look for busy spots with high turnover and lots of locals. And here's the real pro tip - many street vendors specialize in just ONE dish. If they've been making the same thing for 20 years, you know it's good!",
              "Coffee Culture Decoded: Vietnamese coffee is a way of life here. Skip the chains and look for places with the words 'cà phê' out front. Order 'cà phê sữa đá' for the classic iced coffee with condensed milk. Want to level up? Try 'cà phê trứng' (egg coffee) - it's like dessert in a cup! ☕",
            ],
          },
          {
            type: "paragraph",
            content:
              "Next Issue: We're wrapping up our first series with a trip to the City of Seven Hills! Get ready to explore Lisbon, where old-world charm meets modern cool.",
          },
          {
            type: "paragraph",
            content: "Catch you on the flip side! 🌟✨🌟",
          },
        ],
      };
    case "lisbon-travel-guide":
      return {
        title: "Issue #5: Lisbon - Golden Traveler vs. Travel Shoestringer",
        date: "December 31, 2024",
        content: [
          {
            type: "paragraph",
            content:
              "Experience the soul of Portugal, from palatial to practical! 🇵🇹",
          },
          {
            type: "paragraph",
            content:
              "Welcome back, Golden Shoestringers! For our final issue of the year, we're exploring a city that's captured my heart like few others. A place where ancient trams climb steep hills, where the smell of grilled sardines wafts through narrow cobblestone streets, and where the light is so beautiful that it's inspired countless artists.",
          },
          {
            type: "paragraph",
            content: "Let's discover the magic of Lisbon, Portugal! 🌟",
          },
          {
            type: "heading",
            content: "TL;DR (Time is money, and shoelaces aren't free!)",
          },
          {
            type: "list",
            items: [
              "Golden Travelers - Stay: Bairro Alto Hotel | Eat: Belcanto | Activity: Private Sintra Tour",
              "Shoestringers - Stay: Selina Secret Garden | Eat: Time Out Market | Activity: Free Walking Tour",
              "Hidden Gem - LX Factory's Secret Spots",
              "Travel Hack - Lisboa Card | Tram 28 Tips | Pastel de Nata 🥮",
              "More Food & Drink - Pink Street After Dark",
            ],
          },
          {
            type: "paragraph",
            content:
              "While Lisbon has long been Europe's best-value capital, it's also developed a sophisticated luxury scene that would impress any seasoned traveler. Whether you're dining at Michelin-starred restaurants or grabbing a €1 espresso at a corner cafe, this city knows how to deliver the goods! 🌟✨",
          },
          {
            type: "heading",
            content: "FEATURED: Golden vs. Shoestring - Lisbon Edition",
          },
          {
            type: "heading",
            content: "The Golden Traveler",
          },
          {
            type: "paragraph",
            content:
              "Lisbon's luxury scene is unique - it's not about flashy displays of wealth, but rather about exclusive experiences, historic properties, and impeccable service with that famous Portuguese warmth.",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "The Bairro Alto Hotel is the perfect blend of old and new Lisbon. This 19th-century building has been transformed into a five-star boutique hotel that oozes sophistication. The rooftop bar offers panoramic views over the city and the Tagus River, while the rooms combine Portuguese heritage with contemporary comfort.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Book a river-view room on the upper floors. The sunsets are absolutely spectacular, and you can watch the city lights come alive while sipping a glass of vintage port.",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "Belcanto, with its two Michelin stars, is Chef José Avillez's love letter to Portuguese cuisine. The 'Evolution of Portuguese Flavors' tasting menu is a mind-blowing journey through traditional dishes reimagined in spectacular new ways. The famous 'garden of the goose that laid the golden eggs' dish alone is worth the visit.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "Take a private tour to Sintra, but make it extra special. Your driver will pick you up in a vintage convertible, and you'll explore the palaces without the crowds. Include a stop at Cabo da Roca (Europe's westernmost point) and finish with a sunset dinner in Cascais. Pure magic! ✨",
          },
          {
            type: "heading",
            content: "The Shoestringer",
          },
          {
            type: "paragraph",
            content:
              "Here's where Lisbon really shines - you can have an incredible time in this city on a modest budget. Some of the best experiences cost little to nothing!",
          },
          {
            type: "heading",
            content: "Where To Stay:",
          },
          {
            type: "paragraph",
            content:
              "Selina Secret Garden in Cais do Sodré is a perfect example of Lisbon's new wave of hostels/hotels. The vibe is young and creative, with a beautiful garden, co-working space, and regular events. Private rooms are stylish and affordable, and the location puts you right in the heart of the action.",
          },
          {
            type: "paragraph",
            content:
              "Pro Tip: Book their Sunday brunch in advance - it's popular with locals and visitors alike, and the garden setting is Instagram gold!",
          },
          {
            type: "heading",
            content: "Where To Eat:",
          },
          {
            type: "paragraph",
            content:
              "Time Out Market is foodie heaven! This gourmet food hall brings together some of Lisbon's best restaurants under one roof. You can sample dishes from top chefs at a fraction of their restaurant prices. My move? Get the black pork from Alentejo at O Balcão, followed by the famous chocolate cake from Landeau.",
          },
          {
            type: "heading",
            content: "Activity Time:",
          },
          {
            type: "paragraph",
            content:
              "Join one of the free walking tours that start in Rossio Square. These 3-hour walks are led by passionate local guides who'll show you hidden corners of Alfama, tell you stories about the 1755 earthquake, and share their favorite viewpoints. Just tip what you think it's worth at the end! 🚶‍♂️",
          },
          {
            type: "heading",
            content: "HIDDEN GEM: LX Factory's Secret Spots",
          },
          {
            type: "paragraph",
            content:
              "Everyone knows about LX Factory, the cool industrial complex turned creative hub, but few venture beyond the main street. Let me put you onto something special! 🏭",
          },
          {
            type: "paragraph",
            content:
              "Head to the back of the complex and look for the yellow stairs leading to Village Underground. This creative space made from shipping containers hosts some of the city's best underground events. But the real secret? On weekday afternoons, you can usually walk right in and climb to the top container for one of the best views of the 25 de Abril Bridge. Grab a coffee from Wish (they roast their own beans) and watch the trains pass underneath while the sun sets behind the Cristo Rei statue. Pure magic, and it costs basically nothing!",
          },
          {
            type: "heading",
            content: "MORE FOOD & DRINK: Pink Street After Dark",
          },
          {
            type: "paragraph",
            content:
              "Rua Nova do Carvalho (aka Pink Street) is famous for its, well, pink pavement, but most tourists only see it during the day. Here's the real scoop - this former red-light district comes alive after 10pm! Start at Pensão Amor, a former brothel turned cocktail bar that kept all its vintage charm (and some risqué artwork 😉). Then hit up Menina e Moça, a bar/bookshop where you can browse Portuguese literature while sipping natural wines. End the night at Viking Bar, where local fado singers often drop in for impromptu performances after their main shows. The best part? Most drinks are €5-7, and the people-watching is priceless! 🎭✨",
          },
          {
            type: "heading",
            content: "TRAVEL HACKS: The true secrets to enjoying Lisbon",
          },
          {
            type: "list",
            items: [
              "Lisboa Card Magic: If you're planning to hit multiple attractions, get the Lisboa Card. It includes all public transport (including trains to Sintra and Cascais) plus free entry to major sites. The 72-hour card pays for itself with just a few uses!",
              "Tram 28 Tactics: Everyone wants to ride the famous yellow tram, but the lines are brutal. Pro move: Start at Martim Moniz square at 8am sharp, or ride it backwards from Campo Ourique around 7pm - same views, no crowds!",
              "Pastel de Nata Know-How: Skip the famous place in Belém (unless you love 1-hour queues). Instead, head to Manteigaria in Chiado. They have a bell they ring every time fresh pastéis come out of the oven. When you hear that bell, drop everything and go! Still warm, they're pure heaven! 🥮",
            ],
          },
          {
            type: "paragraph",
            content:
              "Next Issue: We're kicking off the new year with a journey to the Land of the Rising Sun! Get ready to explore Tokyo, where ancient traditions meet the future.",
          },
          {
            type: "paragraph",
            content: "Até logo, amigos! 🌟✨🌟",
          },
        ],
      };
    default:
      return null;
  }
};

export default function BlogPost({ params }: Props) {
  const [imageError, setImageError] = useState(false);
  const post = blogPosts.find((p) => p.slug === params.slug);
  const content = getBlogContent(params.slug);

  if (!post || !content) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        {!imageError && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#DBA858] hover:text-[#30B8B2] transition-colors">
          {content.title}
        </h1>
      </header>
      <div className="prose prose-lg max-w-none">
        {content.content.map((section: ContentSection, index: number) => {
          switch (section.type) {
            case "paragraph":
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              );
            case "heading":
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold mt-8 mb-4 text-[#30B8B2]"
                >
                  {section.content}
                </h2>
              );
            case "list":
              return (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                  {section.items?.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}
