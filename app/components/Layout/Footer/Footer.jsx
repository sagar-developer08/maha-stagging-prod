import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { toast } from "react-toastify";
import { contactUs } from "../../../api/commonApi";
import "./styles.scss";
const logo = "https://d3gelo9cifr8ed.cloudfront.net/assets/Logo.png";
function Footer() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  // const location = useLocation();
  // let currenPath = location?.pathname?.split(/\/en|\//);
  let currenPath = pathname?.split(/\/en|\//);

  const [subsEmail, setSubsEmail] = useState("");
  const [isLoading, setIsLoaidng] = useState(false);
  let contentFooter = {
    default: ` <strong> Hot Air Balloon Ride: A Unique Aerial Adventure</strong>
                    <p>
                      As soon as your balloon rises gently into the air, you can
                      see just how exciting a hot air balloon ride is, being
                      sent off high above savannahs, metropolis vistas, and the
                      heralding of blues and pinks that are sunrises. How to
                      experience a hot air balloon ride is unmatched by any
                      other adventure, so you can soar high above Dubai’s
                      stunning landscapes. On this hot air balloon flight over
                      Dubai, enjoy the distinct view of the famous landmarks
                      from above without any hindrance.
                    </p>
                    <p>
                      A hot air balloon ride offers peace of mind in the morning
                      or the unforgettable adventure you always dreamed of. A
                      hot air balloon ride above Dubai’s earth gently glides to
                      allow travellers a serene way of seeing Dubai without the
                      buzz and remove you from the hustle and bustle. All hot
                      air balloon rides are taught by trained pilots who put
                      safety first and know that it is a safe activity, so
                      families, couples, and individuals alike can fly in every
                      hot air balloon ride.
                    </p>
                    <p>
                      The planning of the entire hot air balloon ride experience
                      is highly organized from the takeoff site to the landing
                      so that guests have the experience to remember everywhere.
                      A hot air balloon ride in Dubai lets Dubai’s vast desert
                      landscape be an enchanting sight from some truly amazing
                      heights at 360 degrees. Nothing compares to jumping into a
                      hot air balloon for the sheer thrill of clicking it, so a
                      hot air balloon ride in Dubai is a must on your bucket
                      list.
                    </p>
                    <strong>Hot Air Balloon Dubai: A Must-Do Adventure </strong>
                    <p>
                    If you’re looking for an unforgettable experience, a hot air balloon Dubai journey is the perfect choice. Take a hot air balloon Dubai adventure and soar over the desert, watching dunes meet the sun in the morning. A hot air balloon Dubai experience is a treat for the eyes, giving guests a bird's-eye view of Dubai that is a minimalist experience you simply will not find elsewhere.</p>
                    <p>
                    Most often a hot air balloon Dubai experience is at its best via sunrise, with the chance to capture the city’s particular charm as it welcomes sunny days. A hot air balloon Dubai trip is a great place to get away from the city and the noise, floating over a peaceful environment with just the occasional noise of the burner to keep you company. From your hot air balloon Dubai ride, however, as you rise above the vast sands, you can take in the landscapes from yet another angle, providing a much more refreshing diversion from your usual city activity.

                    </p>

                    <p>
                    Whether you’re a first-timer to Dubai or a regular visitor, it’s a unique opportunity to explore Dubai with its natural and architectural marvels from above in a hot air balloon Dubai experience. A hot air balloon Dubai adventure is ideal for all because it provides well-trained pilots and focuses on safety.
                    </p>

                    <strong>
                    Fly in a Hot Air Balloon: A Thrilling Way to See Dubai
                    </strong>

                    <p>
                    One thing that’s very different to experience is flying in a hot air balloon over Dubai and watching as you glide through the sky, gazing over some sights you simply won’t get to see any other way. Sitting in a hot air balloon in Dubai provides a unique take on a life away from here, where the massive desert and the horizon merge perfectly together. Exploring Dubai from the hot air balloon is exhilarating, though—a unique and memorable vantage point, of course.
                    </p>

                    <p>
                    Unless you’re super-equerry, booking a chance to fly in a hot air balloon usually involves catching the sunrise, and that provides plenty of views for awe. Travellers can relish in a once in a lifetime opportunity to escape the city below and be free to fly in a hot air balloon across the vast desert. So if you are up for it, the opportunity to fly in a hot air balloon is both a safe and exciting way to see Dubai from the sky with expert pilots responsible for each journey.
                    </p>

                    <p>
                    There’s a peace you only feel as you fly in a hot air balloon. It is a magical feeling of weightlessness, enormous views, and gentle ascent. If you are planning to visit Dubai, then hot air ballooning should be a great memorable activity you will not miss.
                    </p>

                    <strong>
                    The Dubai Balloon: Dubai's Premier Ballooning Experience</strong>

                    <p>
                    The Dubai Balloon takes you on a truly iconic journey high above the city and its skyline. The Dubai Balloon experience is a mix of getting excited and at peace as you fly above landmarks and sandy dunes in a thrilling controlled environment. Into the Dubai Balloon for an adventure from above and closer to the beauty of Dubai is one for anyone willing to do so, enticed.

                    </p>
                    <p>
                    The Dubai balloon offers a very carefully curated experience in terms of safety and satisfaction with professional pilots. It rises with the sun from Dubai, as passengers can see a glimpse of the Dubai few get to see, providing an experience for photographers, families, and adventurers of a lifetime. When it comes to a unique experience of the natural beauty of the UAE, the Dubai Balloon is often chosen by tourists and residents.</p>
                    <p>
                    If you choose the Dubai Balloon for your aerial adventure, you can rest assured you will have an enjoyable, safe trip from liftoff to landing. The Dubai Balloon journey starts with crafting every detail for the comfort and thrill of offering the guest an unparalleled view of Dubai from a new perspective.</p>

                    <strong>
                    Hot Air Balloon Ride Dubai: An Iconic Way to See the City
                    </strong>

                    <p>
                    One of the most iconic experiences you can have visiting any world-famous destination is embarking on a hot-air balloon ride Dubai. Take a hot air balloon ride Dubai adventure, and from a height you never thought you'd climb, there's a fantastic view of the desert, cityscapes... A hot air balloon ride in Dubai shows you the stunning sunrise, together with the beautiful contrasts between dunes and the city skyline.
Choosing a hot air balloon ride in Dubai is ideal for those looking for something different. Even though hot air balloon Dubai is quite costly, it depends on who you are with and the experience you want. Either way, the calm ascent, with experienced pilots in the pilot's seat, ensures a safe and comfortable experience, making a hot air balloon ride Dubai possible for everyone, from thrill seekers to those who are interested in going out and watching the sights with a calm mind. Thanks to strict safety protocols and trained pilots on duty with every hot air balloon ride Dubai, you’re assured of safety.
A hot air balloon ride Dubai is an excellent way to make unique memories and take fantastic pictures, whether this is your first time in Dubai or you are a regular here. Dubai’s natural and urban beauty can be experienced all at once from the sky in a must-try hot air balloon ride, which is something very few people get to see from the ground level.

                    </p>

                    <strong>Adventure Activities in Dubai: Adding Thrill to Your Trip</strong>

                    <p>The Dubai adventure activities are for those who look for excitement and adventure activities in the city and natural beauty. Dubai offers you adventure activities from thrilling skydiving over Palm Jumeirah to spine-chilling desert safaris, to name a few. All for the adventure lovers and adrenaline junkies. If you want a thrilling experience, a hot air balloon ride in Dubai is an adventure activity that is very, very popular but peaceful at the same time because you get to see the city from an aerial level.
Other adventure activities in Dubai besides hot air ballooning are sandboarding over golden dunes, dune bashing in the desert, and water sports at some of the best beaches in the world. Finally, ziplining over the city or indoor skydiving adventure activities in Dubai are for all levels and interests and can be for anyone visiting Dubai for a memorable day trip. However, these experiences allow a relatively novel mode of connection and exploring both Dubai’s modern landscape and desert terrain.
If you’re after a full-day itinerary of awesome adventure activities in Dubai or you’re only looking for a little bit of thrill to your trip, you’re spoilt for choice. These adventure activities in Dubai take each adventure with an emphasis on excitement and safety and enable locals and tourists alike to have a memorable experience.
</p>
                    
                  `,
    [`why-choose-us`]: ` <strong>Your Trusted Partner for Balloon Adventures</strong>
    <p>Why us for your next hot air balloon experience? Why Us, however, is one of the places that stands out in the adventure scene in Dubai: offering premium, safe, and expertly guided hot air balloon rides revealing Dubai’s beauty. It’s why we are the trusted choice for aerial adventures, with our commitment to top-quality service, so passengers arrive at our doorstep for a smooth and enjoyable experience.
Why we stand out as a leader in hot air balloon rides is because we put safety, customer satisfaction, and most importantly, that ultimate viewing experience. All the detail is looked after by our team of certified, experienced pilots who take care of your departure to arrival. Choosing us means you also get to pay less for well-maintained equipment, meticulous planning, and a memorable adventure that showcases just how stunning Dubai’s scenery is.
Best Hot Air Ballooning in Dubai’s competitive ballooning city, why do we consistently rate and be the provider of choice for its service excellence? Our customers at any time pick us because they know they are with the best, and we are proud of the good service we provide. The answer to why we are here is clear: We combine experience, quality, and dedication to making memories that you won't soon forget.
</p>

<strong>Best Hot Air Balloon in Dubai: Top Choice for Aerial Adventures</strong>
<p>
Our hot air balloon rides are one of the best in Dubai. The best hot air balloon in Dubai is known to provide an unparalleled experience and allow you to see the desert from the sky, as it will be an unforgettable experience. We treat guests to breathtaking views and have some of the best, most experienced pilots to fly you in the hot air balloon safely.
Enjoying the ride of the best hot air balloon in Dubai is not just about views; it’s about experiencing a curated journey with the best professionals guiding, the best memories starting with the best Dubai hot air balloon. The best hot air balloon ride Dubai will have guests ride in a truly comfortable basket at sunrise, so they can experience iconic sights as the scenery spreads out like a mantle before them, miles above the sands. The best hot air balloon experience in Dubai eases you to enjoy both relaxation and excitement from the moment the balloon gets off the ground to its gentle landing.
If you’re looking for the best hot air balloon in Dubai, you won’t find a better option than a hot air balloon in Dubai if you want to have drama with scenery. Choosing to fly with us means you’ll be working with a hot air balloon company that'll strive for excellence and safety and create experiences you’ll remember forever.

</p>

<strong>Why Choose Us for Balloon Rides: Making Memories in the Sky</strong>
<p>If you’re wondering why choose us for balloon rides, our commitment to excellence and creating the most memorable and safe experiences is upfront. There is no other reason to choose us for a balloon ride except our dedication to customer satisfaction with our skilled pilots. From takeoff to landing, we don't compromise safety, and every journey is effortless and enjoyable; this gives peace of mind to those who choose us for their balloon ride.
Why do we make a good choice for balloon rides? We recognise that this won’t just be a floating experience above the desert but rather a bonding with Dubai’s most iconic landscapes for life. The views from each flight are breathtaking views of Dubai’s desert expanse, and our dedication towards these views and our premium services makes you wonder why we should choose balloon rides.
</p>

<strong>Why choose us for balloon rides? </strong>

<p>Our priority is to make you feel safe, comfortable, and inspired. We take care of everything, so all you have to do is have fun. The answer to why you chose us for balloon rides is clear: your hot air balloon ride will be the highlight of your trip, so we provide the experience, safety, and expertise you need.</p>
    <strong>Safe Hot Air Balloon Rides Dubai: Prioritizing Safety and Comfort</strong>
    <p>If you are in for safe hot air balloon rides Dubai, then there is a lot to consider here. At our company, we provide our customers with the cheapest hot air balloon rides Dubai by making sure all equipped planes are checked for quality and any pilot is an expert in rendering excellent service to them. Safe hot air balloon rides Dubai provide passengers an opportunity to fully immerse in the experience, knowing that all the safety measures have been taken to ensure safe hot air balloon rides Dubai.
Safe hot air balloon rides Dubai will offer you peace of mind and let you enjoy magnificent views without a worry in the world, whether you are a first-time rider or an adventuring expert. It is painstakingly designed at every step of the process, from pre-flight briefing to the gentle landing, to make boarding and landing smooth and secure. Not only do safe hot air balloon rides Dubai guarantee an enjoyable journey, but they are a completely safe ride.
But if you are searching for the exhilarating feeling of floating above the Dubai desert without having much to fear, safe hot air balloon rides Dubai offer the ultimate experience. Alongside excitement, we as a team consider safety at the top of our ladder, making sure to give everyone a ride they will enjoy while also not being a worry.
</p>
<strong>
Experienced Air Balloon Pilots: Masters of the Sky
</strong>

<p>
When you fly with us, a process that takes place in our hot air balloon pilot team ensures that we always have a smooth and safe journey, each flight taking you with the expertise of our hot air balloon pilots over Dubai’s beautiful landscapes. Passengers can open their windows to the views, safe in the knowledge that they’re expert hot air balloon pilots at the wheel who know the art of navigating a hot air balloon. We understand that no matter how well our pilots are trained, they still come under the category of working with the unpredictable nature of the weather and the risks that go with it. All of our pilots are trained in hot air balloon handling, and safety is our number one priority.
By riding with experienced hot air balloon pilots, you get to see the city from a different perspective, and experts take care of a steady, smooth flight. But these pilots are also a combination of years and years of training, an incredible knowledge of Dubai’s desert and the cityscape, and an invaluable guide as you travel. Passengers are free to relax and enjoy the view of a landscape as experienced hot air balloon pilots assure you that they know what they’re doing.
By choosing us, you are choosing to fly with some of the most experienced hot-air balloon pilots within the industry. Every single part of the flight—takeoff to landing—is professionally reliable and unforgettable because they are people who know their professional skills and their knowledge.

</p>

<strong>
Safety Measures for Balloon Rides: Ensuring a Secure Experience
</strong>

<p>
One of the things that we are implementing for those balloon rides is that we have safety measures in place so everyone can be safe and enjoy. Our safety measures for balloon rides were checking parts of the equipment, considering proper weather, and doing a pre-flight briefing for passengers. Just before you take part in a balloon experience, we naturally make sure that we are taking all necessary safety precautions, the safety of our passengers in particular being our utmost priority.
Known for our safety measures for balloon rides way above industry standards, our company uses licensed pilots and quality equipment for every flight. On this journey, well-trained professionals guide you through every stage, following safety measures for balloon rides to the tooth at every stage. They include checking the wind, giving any safety tips to the passengers, and using certified, well-maintained balloons.
With our extensive safety precautions involved with balloon rides, passengers can rest assured that their ride will be safe, too. The detail you’d expect from a secure and magical adventure.
</p>

<strong>Premium Balloon Ride Services: The Ultimate Luxury Experience</strong>
<p>Our premium balloon ride services provide you with something to remember when it comes to both luxury and adventure. With our premium balloon ride services, we offer every journey, ensuring that every trip is the most comfortable, enjoyable service, and memorable few seconds that you can have! Passengers will arrive at premium balloon ride services that have everything from high-quality amenities to personalised service.
With transportation, refreshments, and access to some of the best pilots in the industry, we have premium balloon ride services that account for every detail. Our objective is to redefine the landscaping of the hot air balloon experience to make our premium balloon ride services the first choice of individuals who are seeking a taste of luxury while on the trip. Whether it’s the moment you book or the balloon landing, everything is service designed to be as comfortable and enjoyable as possible.
We are in the business of offering premium balloon rides to admire hot air balloon rides with guarantees of each passenger feeling valued and taken care of.
</p>
<strong>Top Balloon Adventures UAE: Unparalleled Experiences in the Sky</strong>

<p>If you are in search of the top balloon adventures in UAE, our rides have the best views of the desert’s sweeping landscapes as well as the features of cityscapes. A Top Balloon Adventure UAE experience means a flight and more than a flight, with the combination of stunning scenery and experienced pilot guidance. Choose Top Balloon Adventures UAE, and you’ll enjoy front-row seats on Dubai’s most breathtaking views, all from the cool calm of a hot air balloon.
On top of the thrill of soaring above the desert with Top Balloon Adventures UAE, you’re getting a premium experience from trained experts who know how to craft every second. Top Balloon Adventures UAE packages are available according to your preferences, for example, if you’re looking for a private, romantic ride or if you’re in a family. What we offer on our Top Balloon Adventures UAE is a great chance to see Dubai‘s incredible scales in a manner not many do.
When you choose to go with Top Balloon Adventures UAE, you know it’s a team you can trust to deliver the best of safety, quality, and memorable experience every time you fly.
</p>
    `,
    [`things-to-do-in-dubai`]: `<strong>Explore Dubai’s Unique Activities</strong>
    <p>There are so many things to do in Dubai, but very few things can beat a hot air balloon over a spectacular Dubai desert landscape. Dubai has a tonne of things to do, from luxury shopping and world-class dining to entertaining adventure activities, but a hot air balloon ride is meditative and exciting all in the same act. Undoubtedly one of the best things to do, it is a sunrise balloon ride over the vast dunes that makes a list of things to do, and the sunrise over the dunes, in such a breathtaking way, offers a peaceful beginning to the day and is something unbeatable.
Dubai has so much to do. You can visit the city’s stunning skyline or its soaring culture. A hot air balloon ride over Dubai's desert is one of the coolest things to do, as it affords travellers to escape the bustle of a city and witness the peaceful side of the UAE. Among the things to do in Dubai, this is a must-do activity and a favourite bucket list activity, bringing a new view of the natural and architectural wonders of Dubai.
Getting a hot air balloon ride is an adventure you will never forget and a good thing to put at the top of your things-to-do list. A perfect blend of thrill and tranquillity, it is one of the better options to choose from Dubai’s activities.
</p>

<strong>Dubai Activities: Unmatched Adventures Await</strong>

<p>Dubai activities are all about combining the wonderful and exciting with the luxurious. From sightseeing in Dubai’s bustling neighbourhoods to discovering the wild landscape surrounding the desert, there's so much Dubai activity to do, it’s endless. For many, the hot air balloon rides are the most sought-after Dubai activities, offering passengers a bird's-eye view of the Arabian Desert and Dubai’s famous skyline.
Dubai activities range from the things you can do with your kids to being an adrenaline junkie to even simply enjoying long walks or picnics outdoors. Dubai activities like dune bashing are available for adventurers to partake in, whereas those looking for a rest can enjoy a leisure experience floating over the desert at dawn. If you choose hot air ballooning as you get among Dubai activities, it is phenomenal, simply because it offers you an extraordinary chance to encounter the quiet desert from another angle.
Your Dubai activities will give you memories you won’t forget, even if you are a thrill-seeker or a sight-seeer. A flight over the dunes in a hot air balloon is the best of both worlds and a favourite Dubai activity for both those living here and those coming to visit.
</p>
    <strong>Fun Things to Do in Dubai: Embrace Adventure and Serenity</strong>

    <p>If you’re wondering what fun things to do in Dubai, I am also looking. If there is one thing you should try, it’s hot air ballooning for the time you get to swim in complete serenity in the desert. Dubai is full of fun things to do, and perhaps none more so than drifting high overhead over a desert landscape while watching the sun rise over the dunes. A balloon ride is a must if you want to have an unforgettable morning; this is the list of things to do in Dubai.
Although the city provides a lot of things to do in Dubai, from thrilling theme parks to cultural tours, a hot air balloon ride is the best way to tend to it away from the busy city. The thrill of exploring the desert from above is one of the fun things to do in Dubai. A hot air balloon adventure to Dubai allows the opportunity to see the city uniquely and beautifully, whether it’s with family, friends, or by yourself.
Hopping on a hot air balloon ride in Dubai is one of the most fun things to do in Dubai if you’re looking for both excitement and relaxation. Whether you are spectating such an event, combining breathtaking views with a tranquil experience, it is for anybody looking to make memories to last the ages.
</p>

<strong>Best Things to Do in Dubai: Create Lasting Memories</strong>
<p>A hot air balloon ride over the desert has truly got to be one of the best things to do in Dubai. The first thing you imagine is waking up to a horizon of dunes, all from the cosy comfort of your hot air balloon. This peaceful yet exhilarating adventure should be on the top list of things to do when you think of the best things to do in Dubai. Surrounded by so much beauty that is the desert, the ride allows you to see the city from above.
The best things to do in Dubai usually involve a bit of modern luxury and a lot of natural beauty. With both—an unparalleled view of the UAE’s incredible landscapes—there is no better way to experience the UAE’s hot air balloon ride. This adventure is one of the best things to do in Dubai, and it encompasses breathtaking views, expert guidance, and a fantastic way of beginning any day.
For that reason, it shouldn’t be excluded from a list of the best things to do in Dubai. Visitors can get a different point of view of one of the most dynamic cities in the world without giving up anything when they opt for it.
</p>

<strong>Desert Safari Dubai: Thrills Across the Sands</strong>
<p>However, travellers visiting the UAE want a Desert Safari Dubai to experience the UAE’s rugged beauty up close. Desert Safari Dubai is a must-do combination of dune bashing, camel riding, and cultural entertainment, which makes it one of the most popular ways to visit the vast Arabian Desert. Most guests take advantage of the fact that a desert safari in Dubai can easily be combined with a sunrise balloon ride, so they start the day with these breathtaking aerial views before experiencing anything that the day offers.
A desert safari in Dubai also involves the thrill of dune exploration and cultural immersion with traditional music, dance, and cuisine. Desert Safari Dubai is perfect for those looking to experience the natural beauty and traditional traditions of the UAE. This is when you combine one with a hot air balloon ride to create a day of adventure and talk to emerge out of the desert.
For travellers who want adventure and an understanding of Emirati culture, Desert Safari Dubai and a hot air balloon ride work in tandem to provide guests with an immersive desert experience from every angle.
</p>

<strong>Ferrari World: A High-Speed Adventure for All Ages</strong>
<p>Ferrari World is one of the most thrilling experiences in the UAE with its high-speed adventure and family-friendly fun. Ferrari World is an adrenaline-pumping rollercoaster that is located in Abu Dhabi, on Yas Island and is best known as the place to go for Formula Rossa, the fastest rollercoaster in the world. If you are looking for unforgettable adventure activities that combine the thrill of motorsports with the kind of amusement park experience no one has done before, then a must-visit is Ferrari World.
Faster than the speed, Ferrari World not only boasts of its speed but is home to an exciting series of Ferrari exhibitions, live shows, and simulators that anybody of any age can enjoy. Ferrari World has it all, from kid-friendly rides like the kid Ferrari F1 adventures to racing simulators that encompass the feeling of being a Formula 1 driver. In each attraction, Ferrari World has treated each attraction with care and excitement that only reflects Ferrari’s exclusive and exciting standard, ensuring that anyone with a passion for the brand receives the most authentic that it has to offer.
Ferrari World is an exciting destination for kids and fun for adults if you are exploring Abu Dhabi and want something more interesting than a city tour. Enjoy the speed of a groundbreaker and some serenity at the same time with a hot air balloon ride paired with this.
</p>

<strong>Abu Dhabi Mosque: A Stunning Architectural Marvel</strong>
<p>A landmark and a must-see for those visiting the UAE is the Abu Dhabi Mosque; another name for it is the Sheikh Zayed Grand Mosque. The Abu Dhabi Mosque, all its length with its vast white marble domes, crystal clear reflecting pools, and intricate carvings, is a masterpiece of Islamic architecture. The Abu Dhabi Mosque attracts visitors from around the world as they marvel at its beauty and take a few minutes to brush up from the tumult of life in its quiet halls.
The architectural marvel can be seen in every corner of the Abu Dhabi Mosque, with its grand, enormous chandeliers crammed with Swarovski crystals and the world’s largest handwoven carpet. Abu Dhabi Mosque is a sprawling courtyard, and tranquil reflecting pools are the tanks of tranquillity and reverence for the two, that is, worshippers and tourists. Visiting the Abu Dhabi Mosque at its first sunset is something magical, where the warm light reflects off its domes and the resulting ethereal glow.
The Abu Dhabi Mosque is a culturally rich and religious destination for travellers who want to dive deep into exploring the heritage of the UAE. The offering of its welcoming atmosphere makes it a must-visit destination in the UAE, and it is accessible to visitors from all backgrounds.
</p>

<strong>Why Us: Your Top Choice for Balloon Adventures</strong>
<p>Why Us becomes self-explanatory the very moment one takes off in terms of superlative hot air balloon experiences. Chancing upon us for the adventure of a lifetime will mean placing your trust in the unchallenged expertise of a team skilled in the business of proffering the best hot air balloon in Dubai. We do not compromise on an unforgettable experience, or the ultimate safety of your ride so that your ride is as comfortable as it is thrilling. Why Us? Our team is passionate about the delivery of a once-in-a-lifetime experience, from seamless bookings to breathtaking flights led by our experienced hot air balloon pilots.
The question of Why Us is best depicted by the range of unique services on offer: from early sunrise flights over the desert to exclusive private tours, we have designed premium balloon ride services for every type of traveller. We go above and beyond to offer personalized touches, making us the best hot air balloon in Dubai for those seeking a memorable adventure. By having safety-certified rides, experienced pilots, and topmost services, the question of why us is quite blunt: we draw the skies closer to you in the safest and most pleasurable way.
</p>

<strong>Best Hot Air Balloon in Dubai: An Unforgettable Sky Adventure</strong>
<p>If you want to have the best experience in a hot air balloon in Dubai, then this is for you. Our rides result in the most excellent aerial experiences where breathtaking panoramic views of Dubai's great desert combine with a luxurious, safe, and comfortable flight. We always strive, as the best hot air balloon experience in Dubai, to make all journeys over the desert a lifetime experience for any person who gets to witness the sun rising from an unmatched vantage point. Every flight is fully planned in detail, right from takeoff to landing, so that each instant is rendered magical.
Ensuring top hot air balloon flights in Dubai means that our team of highly experienced hot air balloon pilots, along with our dedicated staff, strives day after day for premium quality and safety. We are trying to provide premium services by making all passengers feel special, and most importantly, our hot air balloon flights will give you a perfect combination of fun and relaxation. Whether it is your first flight or you are a ballooning enthusiast, we present the best hot air balloon in Dubai with unmatched safety measures and breathtaking the memory of which will last forever.
</p>

<strong>Why Choose Us for Balloon Rides: Quality and Safety Combined</strong>

<p>Why are we your ideal choice for rides on a balloon? Our commitment to safety, professionalism, and consumer satisfaction sets us apart from everyone. At Silense, we have an established track record of excellence in providing the finest experiences, and this makes us the 'best hot air balloon in Dubai' which so many travellers consider when researching and making their choice of a Dubai hot air ballooning adventure. When you come aboard with us, you throw yourself into the capable hands of persons who will make sure your comfort, enjoyment, and safety come first and foremost. If your question is why choose us for balloon rides, the answer is very simple: our commitment to quality and attention to detail make every flight unforgettable.
What can you expect from us other than stunning views on our balloon rides? We have thoughtfully designed experiences that will fit every taste, from sunrise flights to private adventures. Our team consists only of highly experienced hot air balloon pilots who ensure that every ride is smooth, safe, and scenic. With safety as our cornerstone and luxury as our standard, why people choose us for balloon rides can easily be answered: we create memories in the sky that are to be cherished always.
</p>

<strong>Safe Hot Air Balloon Rides Dubai: Peace of Mind in the Sky</strong>

<p>We are a trusted service that Dubai can rely on for safe hot air balloon rides. Each of the flights is devised in a way to be able to make safety a key constituent so that your enjoyment is devoid of anxiety. Our safe hot air balloon rides in Dubai are led by expert pilots with very strict safety measures implemented in each flight. Choosing our safe hot air balloon rides Dubai simply means you get a thrill and reassuring adventure.
We strive to ensure that nothing is overlooked in the planning of safe hot air balloon rides Dubai, from equipment to the skill of the pilot. Because we also follow periodic maintenance checks and aviation standards, you're assured of an entertaining experience that's safe at the same time. For a memorable and yet safe hot air balloon ride, one has much to seek in Dubai. You'll find our commitment to safety is second to none, taking you over the desert with your mind at rest.
</p>

<strong>Experienced Hot Air Balloon Pilots: Trustworthy Experts in the Sky</strong>

<p>Skilled and experienced hot air balloon pilots form the backbone of any journey we offer, bringing expertise, knowledge, and professionalism to every flight. Our experienced hot air balloon pilots have become apt from years of experience in handling the skies for the safety and smooth adventure of every passenger. With highly experienced hot air balloon pilots at the helm, you can trust the professionalism that allows you to focus on the spectacular views while enjoying the thrill of ballooning.
Our hot air balloon pilots are well-experienced and go through a very challenging training and certification process, which maintains our rigid safety standards. Their experience allows them to manage various conditions in the air, making sure that every passenger has a stable and scenic ride. Our experienced hot air balloon pilots make sure that your safety and satisfaction are guaranteed, relaxing on every ride as you enjoy the joyous journey through Dubai's skies.
</p>

<strong>Safety Measures for Balloon Rides: Prioritizing Every Passenger’s Well-being</strong>
<p>Safety measures concerning balloon flights are put in place to ensure that the flight experience is enjoyed from preparation to take-off and through to landing. We observe all-inclusive safety measures for balloon flights starting from the preparation of the balloon for flight to its flight operations. This way, each passenger gets on board, knowing our safety measures regarding balloon flights and observing the strict standards set by the concerned industries, thereby guaranteeing a comfortable and safe flight.
These include routine maintenance of the equipment, the training of pilots, and adherence to weather protocols for the best conditions to fly. Additionally, our team is trained to handle any situation, making our rides among the safest in the region. With these safety measures for a balloon ride, one can now have memories of an adventure with peace of mind, being assured that value for their money is taken to the skies of Dubai.
</p>

<strong>Premium Balloon Ride Services: Luxury in the Skies</strong>

<p>Savour an unforgettable adventure with the elite services of a balloon ride. We have bespoke experiences tailor-made for your desires that guarantee every flight to be great. From sumptuous refreshments to personalized itineraries, high-end services of balloon rides are designed to please even the most demanding customer who demands an unforgettable adventure. Experience breathtaking views of Dubai's desert with unmatched facilities. Our premium services of balloon flights promise an unparalleled journey in comfort and style, warranting your journey to be remembered. Come to us for a flight that couples scenic beauty with luxury, making your hot air balloon adventure nothing less than extraordinary.
</p>

<strong>Top Balloon Adventures UAE: Unparalleled Experiences Await</strong>

<p>At the forefront of hot air balloon adventures UAE has to offer, look no further than our expertly curated flights. We pride ourselves on delivering those unforgettable experiences showcasing nothing but breathtaking desert beauty. Each one of our top balloon adventures UAE is designed to leave indelible marks in one's memory, be it for a first-time flyer or an experienced adventurer. Join us either in sunrise or sunset flights and capture those magical moments that define the region. We have a committed quest for excellence in ensuring you get only the ultimate hot air balloon adventures UAE can offer. That makes your journey through the skies truly unforgettable.</p>

<strong>Safety-Certified Balloon Rides Dubai: Assurance in the Skies</strong>

<p>When planning hot air balloon flights, ensure that you choose safety-certified balloon rides Dubai. Indeed, we value your safety and ensure the most stern rules and regulations are followed. Our safety-certified balloon rides Dubai have well-maintained equipment and qualified experienced pilots and crew members. Take a moment to enjoy the breathtaking view while you fly as safety is of utmost importance. It's just a commitment to safety-certified balloon rides that enable Dubai to let you enjoy the breathtaking views and real thrill of the adventure. Leave your trust in us for a safe and enjoyable experience, making our safety-certified balloon rides the best option for soaring above this stunning landscape.</p>

    `,
    [`experiences`]: `<strong>The Joy of Ballooning</strong>
    <p>Our hot air balloon experiences will take you on an unforgettable adventure. All our experiences guarantee breathtaking views of the desert landscape, which completes your Dubai experience. Just imagine floating high above the ground, feeling the light breeze-so delicate and nothing like it. Our dedicated team at Top Wing Airport Service makes sure that your time is spent in pure delight, filling every moment with adventure and quietness. Come and feel this amazing adventure that takes you to see Dubai's beauty from up above, framing memories that will stay in your heart forever. </p>
    <strong>Hot Air Balloon: A Unique Adventure Awaits</strong>
    <p>A hot air balloon ride will give you a special view of the fabulous landscapes of Dubai. From the very beginning of your flight, one can't but become charmed by the panorama opening before his sight across the dunes. This magical flight of a hot air balloon is not only about flying; it's about serenity and aesthetic surroundings. You will be able to snap stunning pictures that bring out the beauty of the UAE as you drift through the air in your hot air balloon. Do not be left behind in experiencing this wonderful hot air balloon adventure where every moment is a marvel.</p>
    <strong>Hot Air Balloon Ride: Unforgettable Memories in the Sky</strong>
    <p>A hot air balloon ride in Dubai is one of the most thrilling ways to enjoy a look at the sun rising over the great expanse of the desert after being lifted into the skies. The unforgettable hot air balloon ride will uniquely combine adventure and serenity to appreciate the surroundings. Our expert pilots will provide a safe and smooth ride, offering you myriad tidbits about the landscape below during your hot air balloon ride. Feel the excitement, the serenity of a hot air balloon ride-a memory to cherish always.</p>
    <strong>Hot Air Balloon Dubai: Discover the Beauty from Above</strong>
    <p>Hot Air Balloon Dubai promises magic in every view. Floating above the wild-spread icons, you are speechless but for the beauty of the desert and the silent surroundings. Our hot air balloon experiences in Dubai offer a unique method of exploring the area and having the feeling of flying in the air. Be rest assured that with professional pilots and the best equipment, your hot air balloon Dubai adventure will be safe and enjoyable. Ensure to make the most of this great opportunity to see Dubai in a different dimension; book for your hot air balloon Dubai experience today and leave with indelible memories.</p>
    <strong>Hot Air Balloon Ride Dubai: An Adventure of a Lifetime</strong>
    <p>This is a balloon ride Dubai for the ultimate adventure, leaving you with lifetime memories. It soars into the skies, unveiling breathtaking landscapes of the desert below. A hot air balloon ride in Dubai offers an unrivalled combination of adventure and panorama; hence, this should be an undertaking when in Dubai. With skilled pilots at the wheel of your hot air balloon ride in Dubai, it's going to be safe and enjoyable, letting you enjoy the overall scenery of the experience. Don't let such a great opportunity slip by and make sure to capture Dubai as never before!</p>
    
    `,
  };

  const handleSubmit = async () => {
    setIsLoaidng(true);

    if (!subsEmail) {
      toast.info("Please fill your email");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(subsEmail)) {
      toast.info("Please enter a valid email");
      return;
    }

    setIsLoaidng(true);
    const UpdatadData = {
      name: "",
      phone: "",
      email: subsEmail,
      message: "",
    };
    try {
      const response = await contactUs(UpdatadData);
      toast.success("Successfully Subscribed to Newsletter!");
      setSubsEmail("");
    } catch (err) {
      console.log("Fomr Error: ", err);
    } finally {
      setIsLoaidng(false);
    }
  };
  return (
    <>
      <div className={`footer py-60 ${locale === "ar" ? "r_dir" : "l_dir"}`}>
        <div className="container">
          <Row>
            <Col xs={12} md={4} lg={2}>
              <div className="logoWrapper">
                <img src={logo} alt="maha-logo" />
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="footerLinks">
                <div className="linksWrapper">
                  <div className="footerTitle mb-4">Quick Links</div>
                  <ul>
                    <Link href={`/${locale}/why-choose-us`}>
                      <li>About Us</li>
                    </Link>
                    <Link href={`/${locale}/experiences`}>
                      <li>Experiences</li>
                    </Link>
                    {/* <Link href={`/${locale}/merchandise`}>
                      <li>Merchandise</li>
                    </Link> */}
                    <Link href={`/${locale}/things-to-do-in-dubai`}>
                      <li>Things To Do</li>
                    </Link>
                  </ul>
                </div>
                <div className="linksWrapper">
                  <div className="footerTitle  mb-4">Company</div>
                  <ul>
                    <Link href={`/${locale}/contact-us`}>
                      <li>Contact Us</li>
                    </Link>
                    <Link href={`/${locale}/blogs`}>
                      <li>Blogs</li>
                    </Link>
                    <Link href={`/${locale}/faqs`}>
                      <li>Faqs</li>
                    </Link>
                    {/* <Link>
                      <li>Careers</li>
                    </Link> */}
                  </ul>
                </div>
                <div className="linksWrapper">
                  <div className="footerTitle  mb-4">Support</div>
                  <ul>
                    <li>
                      <a
                        className="info"
                        href="https://wa.me/971502600101"
                        target="__blank"
                      >
                        +971502600101
                      </a>
                    </li>
                    <a
                      className="info"
                      href="mailto:info@mahaballoonadventures.com"
                      target="__blank"
                    >
                      <li>info@mahaballoonadventures.com</li>
                    </a>
                    <a
                      className="info"
                      href="https://maps.app.goo.gl/j21TQhVPtsQsmN768"
                      target="__blank"
                    >
                      <li>Margham Dubai, UAE</li>
                    </a>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <div className="subscribeForm">
                <div className="footerTitle mb-2 mb-md-4">Subscribe</div>
                <p className="footerDetails pdb">
                  Join our newsletter to stay up to date on features and
                  releases.
                </p>
                <div className="form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={subsEmail}
                    onChange={(e) => setSubsEmail(e.target.value)}
                  />
                  <button
                    disabled={isLoading}
                    type="submit"
                    onClick={() => handleSubmit()}
                  >
                    {isLoading ? "Subscribing " : "Subscribe"}
                  </button>
                </div>
                <p className="details">
                  By subscribing you agree to with our{" "}
                  <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>{" "}
                  and provide consent to receive updates from our company.
                </p>
              </div>
            </Col>
          </Row>

          <div className={locale == "ar" ? "moreInfo arB" : "moreInfo"}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header as="p">More Information</Accordion.Header>
                <Accordion.Body>
                  {contentFooter[`${currenPath?.[currenPath?.length - 1]}`] ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          contentFooter[
                            `${currenPath?.[currenPath?.length - 1]}`
                          ],
                      }}
                    ></div>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: contentFooter?.["default"],
                      }}
                    ></div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="copyRight desktop">
            <div className="details">
              <p>
                © 2024 Designed with 💕in UAE by Prism Digital:{" "}
                <a href="https://www.prism-me.com/" target="__blank">
                  Digital Marketing Agency Dubai
                </a>
                .
              </p>
              <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
              <Link href={`/${locale}/terms-of-service`}>Terms of Service</Link>
            </div>

            <div className="social">
              <a href="https://www.facebook.com/mahaballoonadventures/">
                <FaFacebook className="icon" size={20} />
              </a>
              <a href="https://www.instagram.com/mahaballoonadventures/">
                <FaInstagram className="icon" size={20} />
              </a>
              <a href="https://www.tiktok.com/@mahaballoon_adventures">
                <FaTiktok className="icon" size={20} />
              </a>
              <a href="">
                <FaLinkedin className="icon" size={20} />
              </a>
              <a href="https://www.youtube.com/@mahahotairballoons">
                <FaYoutube className="icon" size={20} />
              </a>
            </div>
          </div>
          <div className="copyRight mobile">
            <div className="social">
              <a href="https://www.facebook.com/mahaballoonadventures/">
                <FaFacebook className="icon" size={20} />
              </a>
              <a href="https://www.instagram.com/mahaballoonadventures/">
                <FaInstagram className="icon" size={20} />
              </a>
              <a href="https://www.tiktok.com/@mahaballoon_adventures">
                <FaTiktok className="icon" size={20} />
              </a>
              <a href="">
                <FaLinkedin className="icon" size={20} />
              </a>
              <a href="https://www.youtube.com/@mahahotairballoons">
                <FaYoutube className="icon" size={20} />
              </a>
            </div>
            <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
            <Link href={`/${locale}/terms-of-service`}>Terms of Service</Link>
            <p>
              © 2024 Designed with 💕in UAE by Prism Digital:{" "}
              <a href="https://www.prism-me.com/" target="__blank">
                Digital Marketing Agency Dubai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
