export interface CityData {
  name: string;
  state: string;
  slug: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  stats: {
    totalMembers: number;
    couples: number;
    singles: number;
    activeWeekly: number;
    newThisMonth: number;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  description: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  content: {
    overview: {
      title: string;
      paragraphs: string[];
    };
    neighborhoods: {
      title: string;
      intro: string;
      areas: Array<{
        name: string;
        description: string;
      }>;
    };
    whyCity: {
      title: string;
      reasons: string[];
    };
    localScene: {
      title: string;
      paragraphs: string[];
    };
    safetyTips: {
      title: string;
      intro: string;
      tips: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  successStory?: {
    quote: string;
    author: string;
    location: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedCities: string[];
}

export const cityData: Record<string, CityData> = {
  "new-york-ny": {
    name: "New York City",
    state: "NY",
    slug: "new-york-ny",
    coordinates: {
      lat: "40.7128",
      lng: "-74.0060"
    },
    stats: {
      totalMembers: 10500,
      couples: 4200,
      singles: 6300,
      activeWeekly: 850,
      newThisMonth: 320
    },
    hero: {
      title: "Swingers, BDSM & ENM Dating in New York City",
      subtitle: "Connect with 10,500+ verified lifestyle members across all five boroughs. NYC's most vibrant community for swingers, kink, polyamory, and ethical non-monogamy."
    },
    description: "SPICE connects you with New York City's thriving lifestyle community of 10,500+ swingers, BDSM enthusiasts, and ENM practitioners.",
    seo: {
      title: "Swingers & BDSM Dating NYC | 10,500+ Lifestyle Members | SPICE App",
      description: "Join NYC's largest lifestyle dating community. 10,500+ verified swingers, BDSM, ENM & polyamory members in Manhattan, Brooklyn, Queens. Download SPICE free today.",
      keywords: "swingers NYC, BDSM dating New York, ENM dating NYC, polyamory New York City, kink dating Manhattan, lifestyle dating Brooklyn, swingers near me NYC, couples dating New York"
    },
    content: {
      overview: {
        title: "Welcome to NYC's Premier Lifestyle Dating Community",
        paragraphs: [
          "New York City has one of the most active and diverse lifestyle communities in the world. With over 10,500 verified SPICE members across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, you'll find couples and singles exploring swinging, BDSM, polyamory, and ethical non-monogamy in every neighborhood.",
          "Whether you're new to the lifestyle or experienced, NYC offers endless opportunities for connection. From intimate play parties in Brooklyn lofts to upscale events in Manhattan, the city's open-minded culture creates a welcoming environment for alternative relationships and sexual exploration.",
          "SPICE members in NYC range from young professionals in their 20s and 30s to experienced lifestyle veterans in their 40s, 50s, and beyond. You'll find artistic couples in Williamsburg, corporate professionals in the Financial District, and everything in between. The diversity of NYC is reflected in its lifestyle community."
        ]
      },
      neighborhoods: {
        title: "Popular NYC Neighborhoods for Lifestyle Dating",
        intro: "SPICE members are active throughout all five boroughs, with particularly vibrant communities in these areas:",
        areas: [
          {
            name: "Manhattan - West Village, Chelsea & East Village",
            description: "Historic center of NYC's sex-positive culture. Home to many lifestyle-friendly venues, kink clubs, and open-minded residents. High concentration of LGBTQ+ and ENM-friendly spaces. Easy access to events and meetups."
          },
          {
            name: "Brooklyn - Williamsburg, Park Slope & Bushwick",
            description: "Brooklyn's artistic and progressive neighborhoods attract younger lifestyle couples and singles. Known for private play parties, creative events, and a laid-back approach to alternative relationships. Strong polyamory and kink communities."
          },
          {
            name: "Queens - Astoria, Long Island City & Forest Hills",
            description: "Diverse, growing lifestyle community with a mix of cultures and backgrounds. More affordable than Manhattan with great restaurants for first meetings. Active couples scene with regular local meetups."
          },
          {
            name: "Manhattan - Upper West Side & Upper East Side",
            description: "Established, professional lifestyle community. Upscale events and experienced couples. Emphasis on discretion, sophistication, and long-term connections. Popular for 35+ crowd."
          }
        ]
      },
      whyCity: {
        title: "Why NYC is Perfect for Lifestyle Dating",
        reasons: [
          "🌆 Largest lifestyle community in the US - Over 10,500 active SPICE members means you'll always have new connections to explore",
          "🎭 Sex-positive culture - NYC's open-minded atmosphere makes it easy to explore alternative relationships without judgment",
          "📅 Weekly events - Multiple lifestyle parties, meetups, and kink events happening every week across all boroughs",
          "🏙️ Diverse community - People from all backgrounds, ages, and relationship styles. Find exactly what you're looking for",
          "🚇 Excellent public transit - Easy to meet people anywhere in the city without needing a car",
          "🔒 Privacy & discretion - In a city of 8+ million, you can explore the lifestyle with confidence and anonymity",
          "🎨 Creative scene - Artistic, sex-positive events that go beyond traditional swinging. Performance art, immersive experiences, and more",
          "🏆 Established venues - Long-running lifestyle clubs and spaces with excellent reputations for safety and quality"
        ]
      },
      localScene: {
        title: "The NYC Lifestyle Scene",
        paragraphs: [
          "New York City has been at the forefront of sexual liberation and alternative relationships for decades. The city's lifestyle scene is incredibly diverse, ranging from exclusive, high-end events in Manhattan penthouses to underground Brooklyn warehouse parties. Whatever your style, budget, or interests, you'll find your people here.",
          "The BDSM and kink community in NYC is particularly strong, with multiple dungeons, workshops, and educational events happening regularly. The city hosts some of the country's largest kink conventions and pride events. SPICE members frequently organize skill-shares, rope bondage workshops, and educational meetups.",
          "For polyamorous individuals and ENM couples, NYC offers numerous support groups, discussion meetups, and social events. The city's progressive culture means you can be open about your relationship style without fear of judgment. Many restaurants, bars, and cafes in Brooklyn and Manhattan are explicitly poly-friendly.",
          "Swinging in NYC ranges from hotel takeover parties with hundreds of attendees to intimate house parties for 10-20 people. SPICE makes it easy to find events that match your comfort level, whether you prefer getting to know people over dinner first or diving into the action at a play party.",
          "First-time lifestyle explorers will find NYC welcoming and educational. Many experienced SPICE members in the city love mentoring newcomers, and there are regular \"newbie-friendly\" events designed to help you ease into the scene comfortably."
        ]
      },
      safetyTips: {
        title: "Safety Tips for NYC Lifestyle Meetups",
        intro: "NYC is generally safe for lifestyle dating, but always follow these guidelines:",
        tips: [
          {
            title: "Meet in Public First",
            description: "NYC has countless great spots for first meetings - coffee shops in the Village, wine bars in Brooklyn, restaurants in Queens. Always meet potential connections in public before any private encounters. Popular spots: Union Square area, Brooklyn Heights Promenade, Astoria cafes."
          },
          {
            title: "Use SPICE Verification",
            description: "Check that profiles are photo and ID verified. NYC has a large population, which unfortunately means more fake profiles. SPICE's verification system ensures you're meeting real people. Look for the blue verification badge."
          },
          {
            title: "Share Your Location",
            description: "Tell a friend where you're going and when you expect to be back. Use Find My Friends or similar apps. NYC is safe, but it's a big city - always have a safety plan."
          },
          {
            title: "Trust Your Instincts",
            description: "If something feels off, it probably is. NYC has plenty of amazing lifestyle people - don't settle for anyone who makes you uncomfortable. It's okay to leave or say no at any time."
          },
          {
            title: "Verify Event Information",
            description: "Before attending lifestyle parties or events, verify the host's reputation through SPICE's event feature or community reviews. Established NYC venues are generally very safe, but always check first."
          },
          {
            title: "Plan Your Transportation",
            description: "Know how you'll get home safely. NYC's subway runs 24/7, but late-night travel requires awareness. Have Uber/Lyft as backup. Never leave your drink unattended at events."
          }
        ]
      }
    },
    successStory: {
      quote: "We moved to NYC from the Midwest and had no idea how to meet other lifestyle couples. Within two weeks on SPICE, we connected with three amazing couples in Brooklyn and attended our first play party in Manhattan. The community here is incredible - welcoming, diverse, and respectful. We've made genuine friendships and had unforgettable experiences. SPICE made navigating NYC's scene so much easier!",
      author: "Sarah & Mike",
      location: "Brooklyn"
    },
    faqs: [
      {
        question: "How many SPICE members are in NYC?",
        answer: "Over 10,500 active members across all five boroughs! This includes 4,200+ couples profiles and 6,300+ singles. Manhattan has the highest concentration, followed by Brooklyn and Queens. We have 850+ members active every week, so you'll always find new connections."
      },
      {
        question: "Can I search for members in specific NYC neighborhoods?",
        answer: "Yes! Download the SPICE app and use our location filters to find members in specific neighborhoods like Williamsburg, West Village, Astoria, Park Slope, or any other NYC area. You can set your search radius from 1-50 miles and filter by relationship style (swinging, BDSM, ENM, polyamory)."
      },
      {
        question: "What's the age range of NYC SPICE members?",
        answer: "NYC members range from 21 to 65+, with the largest groups being 28-35 (35%), 36-45 (30%), and 46-55 (20%). The lifestyle community in NYC is multi-generational, and you'll find people at every stage of life exploring alternative relationships."
      },
      {
        question: "Are there lifestyle events in NYC I can attend?",
        answer: "Absolutely! NYC has lifestyle events happening almost every night of the week. SPICE members organize meetups, play parties, educational workshops, and social gatherings throughout the city. Download the app to access our events calendar and RSVP to members-only NYC events."
      },
      {
        question: "Is NYC good for lifestyle beginners?",
        answer: "YES! NYC is one of the best cities for lifestyle beginners. The community is welcoming, there are tons of educational resources and newbie-friendly events, and the large population means you can take your time finding the right connections. Many experienced SPICE members in NYC enjoy mentoring newcomers."
      },
      {
        question: "What's the difference between Manhattan and Brooklyn lifestyle scenes?",
        answer: "Manhattan tends to be more upscale and established - think hotel parties, exclusive clubs, and professional crowds. Brooklyn is more artistic and laid-back - warehouse parties, creative events, and younger crowds. Both are amazing! Queens and the other boroughs offer more intimate, community-focused scenes. SPICE connects you to all of them."
      }
    ],
    relatedCities: ["los-angeles-ca", "las-vegas-nv", "miami-fl"]
  },

  "las-vegas-nv": {
    name: "Las Vegas",
    state: "NV",
    slug: "las-vegas-nv",
    coordinates: {
      lat: "36.1699",
      lng: "-115.1398"
    },
    stats: {
      totalMembers: 8200,
      couples: 3800,
      singles: 4400,
      activeWeekly: 680,
      newThisMonth: 280
    },
    hero: {
      title: "Swingers, BDSM & ENM Dating in Las Vegas",
      subtitle: "Join 8,200+ verified lifestyle members in the Entertainment Capital. Vegas's premier community for swingers, kink, and ethical non-monogamy."
    },
    description: "SPICE connects you with Las Vegas's thriving lifestyle community of 8,200+ swingers, BDSM enthusiasts, and ENM practitioners.",
    seo: {
      title: "Swingers & BDSM Dating Las Vegas | 8,200+ Members | SPICE App",
      description: "Join Las Vegas's hottest lifestyle dating community. 8,200+ verified swingers, BDSM, ENM & polyamory members. The best lifestyle app for Vegas. Download SPICE free.",
      keywords: "swingers Las Vegas, BDSM dating Vegas, ENM dating Las Vegas, polyamory Vegas, kink dating Las Vegas, lifestyle dating Nevada, swingers near me Vegas, couples dating Las Vegas"
    },
    content: {
      overview: {
        title: "Vegas: The Ultimate Playground for Lifestyle Dating",
        paragraphs: [
          "Las Vegas isn't just a tourist destination - it's home to one of the most active and adventurous lifestyle communities in the country. With 8,200+ verified SPICE members, Vegas offers a unique blend of world-class entertainment, adult playgrounds, and a culture that celebrates sexual freedom.",
          "What happens in Vegas might stay in Vegas, but the connections you make on SPICE last a lifetime. From hotel takeover parties on the Strip to intimate gatherings in Summerlin, the lifestyle scene here is unmatched. Vegas locals know how to party, and the city's 24/7 energy extends to its thriving swinger, BDSM, and ENM communities.",
          "Unlike other cities where the lifestyle is underground, Vegas embraces it openly. Major lifestyle conventions, massive pool parties, and exclusive clubs operate year-round. Whether you're a local or visiting for the weekend, SPICE connects you with the city's most exciting lifestyle members."
        ]
      },
      neighborhoods: {
        title: "Top Las Vegas Areas for Lifestyle Dating",
        intro: "SPICE members are spread throughout the Vegas valley, with active communities in:",
        areas: [
          {
            name: "The Strip & Downtown",
            description: "Heart of Vegas's lifestyle scene. Home to lifestyle-friendly hotels, clubs, and events. Perfect for visitors and locals who love the energy of the Strip. Major conventions and takeover parties happen here. Easy access to world-class restaurants and entertainment."
          },
          {
            name: "Summerlin",
            description: "Upscale, master-planned community popular with established lifestyle couples. Beautiful homes often host private parties. More intimate, exclusive scene compared to the Strip. Strong sense of community among local residents. Perfect for 35+ crowd."
          },
          {
            name: "Henderson",
            description: "Family-friendly by day, lifestyle-friendly by night. Growing community of younger couples and professionals. More affordable than Summerlin with great local amenities. Active neighborhood party scene. Popular with 30-45 age group."
          },
          {
            name: "Green Valley & Paradise",
            description: "Diverse lifestyle community close to the Strip but more residential. Mix of locals and hospitality industry professionals. Great for people who want Vegas energy with suburban comfort. Regular community meetups and social events."
          }
        ]
      },
      whyCity: {
        title: "Why Vegas is the Lifestyle Capital",
        reasons: [
          "🎰 Unmatched party scene - Vegas has more lifestyle events, clubs, and conventions than any other US city",
          "🏨 Lifestyle-friendly hotels - Many hotels welcome and cater to lifestyle groups. Easy to host or attend events",
          "✈️ Central location - People fly in from across the country for Vegas lifestyle events. Meet people from everywhere",
          "🌞 Year-round activities - Pool parties, outdoor events, and perfect weather most of the year",
          "🎭 Sex-positive culture - What happens in Vegas stays in Vegas. The city's culture embraces sexual freedom",
          "🎪 Major conventions - Lifestyle conventions bringing thousands of people multiple times per year",
          "🍸 Amazing nightlife - World-class clubs, bars, and entertainment to meet people in amazing settings",
          "💰 Affordable compared to coastal cities - Lower cost of living means more money for fun experiences"
        ]
      },
      localScene: {
        title: "The Las Vegas Lifestyle Experience",
        paragraphs: [
          "Las Vegas has been the unofficial capital of the lifestyle scene for decades. The city hosts some of the largest swinger conventions in the world, with thousands of attendees from across the globe. But beyond the big events, Vegas has a thriving local community that knows how to party year-round.",
          "The swinging scene in Vegas is legendary. Hotel takeovers happen almost every weekend, where entire floors or properties become adults-only playgrounds. From couples-only events to single-male-friendly parties, there's something for everyone. SPICE members organize their own hotel parties, pool parties, and meet-and-greets constantly.",
          "For BDSM and kink enthusiasts, Vegas offers multiple dungeons, fetish clubs, and regular play parties. The city's sex shops are among the best in the country, and there are frequent workshops on everything from rope bondage to impact play. The kink community here is welcoming and educational.",
          "The ENM and polyamory scene in Vegas is smaller but growing rapidly. Many people move to Vegas specifically for its open-minded culture. SPICE members have formed poly discussion groups, date night meetups, and support networks for navigating multiple relationships.",
          "One unique aspect of Vegas is the number of hospitality and entertainment workers in the lifestyle. Dancers, dealers, bartenders, and servers often have flexible schedules and are incredibly open-minded. The local vs. tourist mix creates a dynamic, constantly evolving scene."
        ]
      },
      safetyTips: {
        title: "Staying Safe in Vegas's Lifestyle Scene",
        intro: "Vegas is fun, but stay smart. Follow these safety guidelines:",
        tips: [
          {
            title: "Verify Before You Meet",
            description: "Vegas attracts tourists and visitors, which means more fake profiles and scams. Always verify profiles through SPICE's verification system. Check the blue badge. Video chat before meeting in person. Be especially careful with profiles that seem too good to be true."
          },
          {
            title: "Choose Public Meeting Spots",
            description: "Meet first-time connections in casino bars, coffee shops, or restaurants on the Strip. Popular safe spots: Cosmopolitan lobby bars, Aria, Fremont Street restaurants. Avoid going straight to hotel rooms. Establish chemistry and safety first."
          },
          {
            title: "Watch Your Drinks",
            description: "In Vegas's party atmosphere, never leave drinks unattended. Accept drinks only from bartenders. Pace yourself - Vegas events can be long and intense. Stay hydrated and aware."
          },
          {
            title: "Know Event Reputation",
            description: "Research lifestyle parties and events before attending. Check SPICE reviews and ratings. Established Vegas venues have strong security and clear rules. New or unknown parties? Proceed with caution."
          },
          {
            title: "Have a Transportation Plan",
            description: "Don't drink and drive in Vegas. Use Uber/Lyft, taxis, or designated drivers. If staying on the Strip, walk or use the monorail. Never get in a car with someone you just met unless you've thoroughly vetted them."
          },
          {
            title: "Set Boundaries & Communicate",
            description: "Vegas's party atmosphere can be overwhelming. Know your limits before you go out. Communicate clearly with partners and potential connections. It's always okay to say no or leave."
          }
        ]
      }
    },
    successStory: {
      quote: "My wife and I visited Vegas for a weekend and discovered SPICE. We met two incredible couples at a pool party and had the most amazing experiences. When we got home, we realized we wanted that lifestyle energy all the time. Six months later, we moved to Vegas permanently! The SPICE community here welcomed us with open arms, and we've never been happier. Vegas is lifestyle paradise!",
      author: "Jason & Lisa",
      location: "Summerlin"
    },
    faqs: [
      {
        question: "How many SPICE members are in Las Vegas?",
        answer: "Over 8,200 active members throughout the Las Vegas valley! This includes 3,800+ couples and 4,400+ singles. We have 680+ members active every week, with constant activity from both locals and visitors. Vegas's lifestyle community is one of the most active in the country."
      },
      {
        question: "Is SPICE good for Vegas visitors or just locals?",
        answer: "Both! SPICE is perfect for visitors planning a Vegas trip AND for locals. Many visitors use SPICE to connect with people before their trip, arranging meetups and party invites in advance. Locals use it to meet other residents year-round. The app lets you specify if you're visiting or local."
      },
      {
        question: "What are the best lifestyle events in Vegas?",
        answer: "Vegas has lifestyle events almost every night! Hotel takeover parties happen most weekends on the Strip. Major conventions occur quarterly (check SPICE's events calendar). Pool parties run spring through fall. Private house parties in Summerlin and Henderson happen regularly. Download SPICE to see current events and get invites."
      },
      {
        question: "Can I attend Vegas lifestyle events as a single person?",
        answer: "Absolutely! While some events are couples-only, many Vegas parties welcome singles (both men and women). SPICE clearly marks which events are single-friendly. Single women typically have the easiest access, but respectful single men are welcome at many parties too. The Vegas scene is very inclusive."
      },
      {
        question: "Is the Vegas lifestyle scene expensive?",
        answer: "It can be, but doesn't have to be! Hotel takeover parties on the Strip can range from $100-300 per couple. However, many SPICE members organize free meetups, house parties with modest contributions ($20-50), and social events. Living in Vegas is more affordable than coastal cities, so locals have more budget for fun."
      },
      {
        question: "What's the age range in Vegas's lifestyle scene?",
        answer: "Vegas lifestyle members range from 21 to 70+, with strong representation in every decade. The Strip events tend to attract 25-45 year olds. Summerlin house parties lean 35-55. Henderson is popular with 30-45. The diversity is part of what makes Vegas special - there's truly something for everyone!"
      }
    ],
    relatedCities: ["los-angeles-ca", "phoenix-az", "san-diego-ca"]
  },

  "los-angeles-ca": {
    name: "Los Angeles",
    state: "CA",
    slug: "los-angeles-ca",
    coordinates: {
      lat: "34.0522",
      lng: "-118.2437"
    },
    stats: {
      totalMembers: 12800,
      couples: 5400,
      singles: 7400,
      activeWeekly: 950,
      newThisMonth: 420
    },
    hero: {
      title: "Swingers, BDSM & ENM Dating in Los Angeles",
      subtitle: "Connect with 12,800+ verified lifestyle members across LA. California's largest community for swingers, kink, polyamory, and ethical non-monogamy."
    },
    description: "SPICE connects you with Los Angeles's massive lifestyle community of 12,800+ swingers, BDSM enthusiasts, and ENM practitioners.",
    seo: {
      title: "Swingers & BDSM Dating LA | 12,800+ Lifestyle Members | SPICE App",
      description: "Join LA's biggest lifestyle dating community. 12,800+ verified swingers, BDSM, ENM & poly members from Hollywood to OC. Download SPICE free today.",
      keywords: "swingers Los Angeles, BDSM dating LA, ENM dating Los Angeles, polyamory LA, kink dating Hollywood, lifestyle dating California, swingers near me LA, couples dating Los Angeles"
    },
    content: {
      overview: {
        title: "LA's Vibrant Lifestyle Dating Community",
        paragraphs: [
          "Los Angeles is home to the largest lifestyle community on the West Coast, with over 12,800 verified SPICE members spread across LA County and Orange County. From the beaches of Santa Monica to the hills of Hollywood, from downtown lofts to San Fernando Valley suburbs, LA's lifestyle scene is as diverse and sprawling as the city itself.",
          "The entertainment industry's influence makes LA uniquely sex-positive and open-minded. Actors, musicians, artists, and creative professionals mix with tech workers, healthcare professionals, and entrepreneurs, creating a lifestyle community unlike anywhere else. Discretion and glamour blend with authenticity and experimentation.",
          "Whether you're into exclusive, high-end experiences or down-to-earth community gatherings, LA has it all. The city's perfect weather means year-round pool parties, beach meetups, and outdoor adventures. The lifestyle scene here operates at every level - from A-list celebrity parties to neighborhood house parties where everyone's welcome."
        ]
      },
      neighborhoods: {
        title: "LA's Lifestyle Hotspots",
        intro: "SPICE members thrive throughout Greater Los Angeles, with particularly active communities in:",
        areas: [
          {
            name: "West Hollywood & Hollywood Hills",
            description: "The epicenter of LA's lifestyle scene. Known for upscale parties, celebrity sightings, and sophisticated events. Strong LGBTQ+ and kink communities. Exclusive clubs and private mansions host legendary parties. Popular with entertainment industry professionals and affluent couples."
          },
          {
            name: "Santa Monica, Venice & Marina del Rey",
            description: "Beach lifestyle meets sexual freedom. Younger, athletic crowd. Outdoor activities and beach parties. Laid-back California vibe with progressive values. Popular with 25-40 age group. Strong polyamory and ENM communities."
          },
          {
            name: "San Fernando Valley - Sherman Oaks, Encino, Studio City",
            description: "Suburban lifestyle community with a neighborhood feel. More intimate house parties and regular meetup groups. Established couples and families exploring the lifestyle discreetly. Great for newcomers seeking a welcoming entry point. Popular with 35-55 crowd."
          },
          {
            name: "Downtown LA, Silver Lake & Echo Park",
            description: "Artistic, creative, and edgy. Warehouse parties, art shows with lifestyle themes, and progressive communities. Younger demographic with diverse sexualities and relationship styles. Strong queer, trans, and gender-nonconforming representation."
          },
          {
            name: "Orange County - Irvine, Newport Beach, Huntington Beach",
            description: "OC's lifestyle scene is growing rapidly. More conservative by day, adventurous by night. Beautiful homes for private parties. Beach access for summer events. Affluent couples and professionals. Less scene presence but very active on SPICE."
          }
        ]
      },
      whyCity: {
        title: "Why LA is a Lifestyle Paradise",
        reasons: [
          "🌴 Perfect weather year-round - Pool parties, beach meetups, and outdoor adventures 365 days a year",
          "🎬 Entertainment industry influence - Creative, open-minded people who celebrate sexual freedom",
          "🏖️ Beach lifestyle - Combine lifestyle dating with surfing, yoga, and California beach culture",
          "🌈 Extremely diverse - Every race, ethnicity, body type, sexuality, and relationship style represented",
          "💫 High-end experiences - Luxury mansion parties, yacht events, and celebrity-level gatherings available",
          "🎨 Creative scene - Artistic, experimental approach to sexuality. Burning Man culture influence",
          "🧘 Wellness-focused - LA's health and wellness culture extends to conscious, mindful sexuality",
          "🌃 Massive population - 12,800+ SPICE members means unlimited potential connections"
        ]
      },
      localScene: {
        title: "Inside LA's Lifestyle Scene",
        paragraphs: [
          "Los Angeles's lifestyle scene is as diverse as the city itself. At the high end, there are exclusive parties in Hollywood Hills mansions with celebrity guests, professional DJs, and luxury amenities. These events often require personal referrals and have strict guest lists. SPICE's verification system helps you build the trust needed to access these circles.",
          "The Valley and OC host more accessible house parties where everyday couples and singles meet. These events emphasize community, connection, and creating ongoing friendships. They're perfect for lifestyle beginners and people who prioritize genuine connection over glamour.",
          "LA's BDSM and kink scene is world-renowned. Multiple dungeons operate across the city, from the professional spaces in Hollywood to more intimate playspaces in the Valley. The city hosts major fetish conventions, and local educators offer workshops on everything from shibari to sensation play. SPICE members organize regular kink meetups and play parties.",
          "The polyamory and ENM community in LA is massive and well-organized. Discussion groups, poly potlucks, and relationship skill-building workshops happen weekly. The city's progressive values mean you can be open about non-monogamy in many professional and social circles. Dating as a poly person in LA is remarkably normalized.",
          "Beach parties and summer events are a huge part of LA's lifestyle culture. From clothing-optional beaches in Malibu to private beach house parties in Manhattan Beach, the coastal lifestyle blends perfectly with sexual freedom. SPICE members organize beach volleyball, sunset gatherings, and overnight camping trips."
        ]
      },
      safetyTips: {
        title: "Staying Safe in LA's Lifestyle Scene",
        intro: "LA is generally safe, but be smart about lifestyle dating in such a large city:",
        tips: [
          {
            title: "Verify Profiles Thoroughly",
            description: "LA has a lot of fake profiles, bots, and scammers due to its size and glamour. Always verify through SPICE's verification system. Look for photo AND ID verification. Video chat before meeting. Be skeptical of profiles claiming celebrity status or extreme wealth."
          },
          {
            title: "Meet in Public Places",
            description: "LA has amazing spots for first meetings - coffee shops in Silver Lake, restaurants in Santa Monica, bars in West Hollywood. Never go straight to someone's home. Popular safe meeting spots: The Grove, Third Street Promenade, Abbot Kinney Boulevard."
          },
          {
            title: "Know the Traffic",
            description: "LA traffic is notorious. Plan extra time to get anywhere. Tell someone where you're going and when you'll be back. Don't feel pressured to rush to a second location because of traffic - safety first."
          },
          {
            title: "Drink Responsibly",
            description: "At lifestyle parties, pace yourself. LA events can last many hours. Stay hydrated (especially in summer). Never leave drinks unattended. Accept drinks only from trusted sources or bartenders."
          },
          {
            title: "Research Venues & Hosts",
            description: "Before attending parties, research the host's reputation on SPICE. Check reviews and ratings. Established LA lifestyle venues have strong security. Be cautious with new or unknown events, especially if they're in unusual locations."
          },
          {
            title: "Transportation Safety",
            description: "Don't drink and drive. Use Uber, Lyft, or designated drivers. LA is spread out, so plan transportation in advance. If leaving a party, make sure you're safe to drive or have a ride. Never get in a car with strangers."
          }
        ]
      }
    },
    successStory: {
      quote: "We'd been curious about the lifestyle for years but didn't know where to start. SPICE connected us with an experienced couple in Studio City who became our mentors and friends. They introduced us to the Valley party scene, and we slowly built confidence. Two years later, we're regulars at lifestyle events, have made incredible friendships, and our marriage is stronger than ever. The LA lifestyle community on SPICE changed our lives!",
      author: "David & Jennifer",
      location: "Encino"
    },
    faqs: [
      {
        question: "How many SPICE members are in Los Angeles?",
        answer: "Over 12,800 active members across LA County and Orange County - the largest lifestyle community on the West Coast! This includes 5,400+ couples and 7,400+ singles. We have 950+ members active every week with 420+ new members joining monthly. From Hollywood to OC, Malibu to Pasadena, SPICE connects you to LA's massive lifestyle community."
      },
      {
        question: "Is LA good for lifestyle beginners?",
        answer: "YES! Despite LA's glamorous reputation, there's a huge community of beginners and welcoming experienced members. The Valley neighborhood scene is particularly beginner-friendly, with regular newcomer meetups and educational events. SPICE makes it easy to filter for newbie-friendly events and couples open to mentoring."
      },
      {
        question: "What's the difference between Hollywood and Valley lifestyle scenes?",
        answer: "Hollywood and WeHo tend to be more upscale, exclusive, and glamorous - think mansion parties and industry crowds. The Valley (Sherman Oaks, Encino) is more suburban, accessible, and community-focused - regular house parties and neighborhood groups. Both are amazing, just different vibes. SPICE connects you to both!"
      },
      {
        question: "Can I find lifestyle connections in Orange County?",
        answer: "Absolutely! OC's lifestyle community is growing fast. While smaller than LA proper, there are active SPICE members throughout Irvine, Newport Beach, Huntington Beach, and beyond. Many OC residents also attend LA events. Download SPICE and set your search radius to include Orange County."
      },
      {
        question: "Are there beach-friendly lifestyle events in LA?",
        answer: "Yes! Summer beach parties are huge in LA's lifestyle scene. SPICE members organize gatherings at private beach houses, clothing-optional beaches, and beach clubs. Marina del Rey, Manhattan Beach, and Malibu are popular spots. Check SPICE's events calendar April through October for beach events."
      },
      {
        question: "What's the age range of LA lifestyle members?",
        answer: "LA's lifestyle community spans all ages: 21-30 (25%), 31-40 (35%), 41-50 (25%), 51+ (15%). Beach communities and downtown skew younger. Valley and Hollywood Hills skew slightly older. The diversity means you'll find people in your age range no matter where you are!"
      }
    ],
    relatedCities: ["san-diego-ca", "las-vegas-nv", "san-francisco-ca"]
  },

  "chicago-il": {
    name: "Chicago",
    state: "IL",
    slug: "chicago-il",
    coordinates: { lat: "41.8781", lng: "-87.6298" },
    stats: { totalMembers: 6200, couples: 2600, singles: 3600, activeWeekly: 520, newThisMonth: 180 },
    hero: {
      title: "Swingers, BDSM & ENM Dating in Chicago",
      subtitle: "Connect with 6,200+ verified lifestyle members in the Windy City. Chicago's vibrant community for swingers, kink, and ethical non-monogamy."
    },
    description: "SPICE connects you with Chicago's thriving lifestyle community of 6,200+ swingers, BDSM enthusiasts, and ENM practitioners.",
    seo: {
      title: "Swingers & BDSM Dating Chicago | 6,200+ Lifestyle Members | SPICE",
      description: "Join Chicago's lifestyle dating community. 6,200+ verified swingers, BDSM, ENM & polyamory members. Download SPICE free today.",
      keywords: "swingers Chicago, BDSM dating Chicago, ENM dating Chicago, polyamory Chicago, lifestyle dating Illinois, swingers near me Chicago"
    },
    content: {
      overview: {
        title: "Chicago's Midwest Lifestyle Scene",
        paragraphs: [
          "Chicago has a thriving, under-the-radar lifestyle community that rivals coastal cities. With 6,200+ verified SPICE members, the Windy City offers diverse options for swingers, BDSM enthusiasts, and ENM practitioners across neighborhoods from Lincoln Park to Wicker Park.",
          "Chicago's lifestyle scene is known for being welcoming, down-to-earth, and surprisingly large. The Midwest values create a community that's friendly, respectful, and focused on genuine connections rather than superficial encounters."
        ]
      },
      neighborhoods: {
        title: "Chicago Lifestyle Hotspots",
        intro: "SPICE members are active throughout Chicago, with strong communities in:",
        areas: [
          { name: "River North & Gold Coast", description: "Upscale lifestyle scene with professional couples. High-end parties and exclusive events." },
          { name: "Wicker Park & Bucktown", description: "Artistic, alternative community. Younger lifestyle couples and creative events." },
          { name: "Lincoln Park", description: "Young professionals and established couples. Regular meetups and social events." },
          { name: "Suburbs - Naperville, Schaumburg", description: "Suburban lifestyle scene with house parties and neighborhood communities." }
        ]
      },
      whyCity: {
        title: "Why Chicago for Lifestyle Dating",
        reasons: [
          "🏙️ Large, diverse community - 6,200+ members across all demographics",
          "❄️ Year-round indoor events - Winter doesn't stop the fun!",
          "🎭 Midwest friendliness - Welcoming, genuine people",
          "🍕 Great restaurant scene - Perfect for first meetings",
          "🚇 Excellent public transit - Easy to get anywhere",
          "💰 More affordable than coastal cities",
          "🎨 Creative, artistic scene - Unique events and experiences",
          "🏠 Strong suburban scene - Not just downtown"
        ]
      },
      localScene: {
        title: "The Chicago Lifestyle Experience",
        paragraphs: [
          "Chicago's lifestyle scene operates somewhat under the radar compared to coastal cities, which many see as an advantage. The community is tight-knit, welcoming to newcomers, and focused on building genuine connections rather than quick hookups.",
          "House parties are popular in Chicago, especially during winter months. Couples host in beautiful homes throughout the suburbs and city, creating intimate environments for 20-40 people. Summer brings rooftop parties, boat parties on Lake Michigan, and outdoor gatherings."
        ]
      },
      safetyTips: {
        title: "Chicago Lifestyle Safety Tips",
        intro: "Chicago is generally safe for lifestyle dating, but follow these guidelines:",
        tips: [
          { title: "Meet in Public First", description: "Chicago has great spots: restaurants in River North, cafes in Lincoln Park, bars in Wicker Park. Always meet potential connections in public before private encounters." },
          { title: "Winter Weather Awareness", description: "Chicago winters are brutal. Plan transportation carefully. Don't drive in snow if you've been drinking. Have backup plans for weather." },
          { title: "Neighborhood Awareness", description: "Some Chicago neighborhoods are safer than others. Stick to well-trafficked areas for first meetings. Use ride-sharing rather than walking late at night." }
        ]
      }
    },
    successStory: {
      quote: "We'd been in Chicago for years but had no idea there was such an active lifestyle community! SPICE connected us with amazing couples in Lincoln Park and River North. The Midwest lifestyle scene is so welcoming and genuine - we've made lifelong friends!",
      author: "Tom & Amy",
      location: "Lincoln Park"
    },
    faqs: [
      { question: "How many SPICE members are in Chicago?", answer: "Over 6,200 active members throughout Chicago and suburbs! This includes 2,600+ couples and 3,600+ singles. We have 520+ members active every week." },
      { question: "Is Chicago good for lifestyle beginners?", answer: "YES! Chicago's Midwest friendliness makes it very welcoming for newcomers. Many experienced couples mentor beginners, and there are regular newbie-friendly events." },
      { question: "What about winter? Does the scene die down?", answer: "Not at all! Winter actually brings MORE house parties since everyone's indoors anyway. Chicago lifestyle folks know how to make winter fun!" }
    ],
    relatedCities: ["new-york-ny", "los-angeles-ca", "detroit-mi"]
  },

  "san-francisco-ca": {
    name: "San Francisco",
    state: "CA",
    slug: "san-francisco-ca",
    coordinates: { lat: "37.7749", lng: "-122.4194" },
    stats: { totalMembers: 9500, couples: 3800, singles: 5700, activeWeekly: 780, newThisMonth: 310 },
    hero: {
      title: "Swingers, BDSM & ENM Dating in San Francisco",
      subtitle: "Connect with 9,500+ verified lifestyle members in SF. The Bay Area's most progressive community for swingers, kink, polyamory, and ethical non-monogamy."
    },
    description: "SPICE connects you with San Francisco's massive lifestyle community of 9,500+ swingers, BDSM enthusiasts, and ENM practitioners.",
    seo: {
      title: "Swingers & BDSM Dating San Francisco | 9,500+ Members | SPICE",
      description: "Join SF's progressive lifestyle community. 9,500+ verified swingers, BDSM, ENM & polyamory members. Bay Area's best lifestyle app.",
      keywords: "swingers San Francisco, BDSM SF, ENM dating San Francisco, polyamory Bay Area, kink dating SF, lifestyle dating California"
    },
    content: {
      overview: {
        title: "SF's Progressive Lifestyle Community",
        paragraphs: [
          "San Francisco has one of the most open, progressive, and diverse lifestyle communities in the world. With 9,500+ verified SPICE members, the Bay Area offers unmatched opportunities for exploring swinging, BDSM, polyamory, and all forms of ethical non-monogamy.",
          "SF's sex-positive culture, strong LGBTQ+ community, and tech-forward population create an ideal environment for alternative relationships. From Folsom Street Fair (world's largest leather event) to countless poly meetups, SF celebrates sexual diversity."
        ]
      },
      neighborhoods: {
        title: "San Francisco Lifestyle Areas",
        intro: "SPICE members thrive throughout SF and the Bay Area:",
        areas: [
          { name: "Mission District & Castro", description: "Progressive, queer-friendly, artistic. Strong poly and kink communities. Regular munches and meetups." },
          { name: "SOMA (South of Market)", description: "BDSM dungeons, leather bars, kink clubs. Home to Folsom Street Fair. SF's kink epicenter." },
          { name: "Marina & Pacific Heights", description: "Upscale lifestyle scene. Professional couples, exclusive parties, high-end events." },
          { name: "East Bay - Oakland, Berkeley", description: "More affordable, alternative culture, strong poly community. House parties and community spaces." }
        ]
      },
      whyCity: {
        title: "Why SF is Lifestyle Paradise",
        reasons: [
          "🌈 Most sex-positive city in America",
          "🎨 Alternative culture is mainstream here",
          "💼 Tech-savvy, forward-thinking population",
          "🏳️‍🌈 Strong LGBTQ+ and queer community",
          "📚 Abundant educational resources and workshops",
          "🎭 Folsom Street Fair and major kink events",
          "🌉 Beautiful city for romantic dates",
          "🧘 Wellness-focused, conscious sexuality"
        ]
      },
      localScene: {
        title: "The San Francisco Lifestyle Scene",
        paragraphs: [
          "San Francisco is ground zero for sex-positive culture in America. The city hosts Folsom Street Fair (400,000+ attendees), Dore Alley, and countless other kink and sexuality events. BDSM education is readily available with workshops, classes, and skilled educators.",
          "The polyamory community in SF is massive and well-organized. Regular poly cocktail hours, discussion groups, and community events make it easy to connect. Being openly poly in SF is completely normalized - you can talk about it at work, with friends, anywhere."
        ]
      },
      safetyTips: {
        title: "SF Lifestyle Safety",
        intro: "SF is very safe for lifestyle dating, but be aware:",
        tips: [
          { title: "Tech Savvy Safety", description: "SF has tech-savvy scammers. Always video verify before meeting. Check SPICE verification badges." },
          { title: "Neighborhood Awareness", description: "Some SF areas (Tenderloin, parts of SOMA late night) require caution. Stick to well-lit areas, use ride-sharing." },
          { title: "Housing Situation", description: "Many SF folks have roommates due to high costs. Clarify privacy/hosting situations before planning private encounters." }
        ]
      }
    },
    successStory: {
      quote: "Moving to SF changed our lives! We went from hiding our poly relationship to being completely open. The community here is incredible - we've found amazing partners, made genuine friends, and finally feel like we belong. SPICE connected us to the whole Bay Area scene!",
      author: "Marcus & Luna",
      location: "Mission District"
    },
    faqs: [
      { question: "How many SPICE members are in San Francisco?", answer: "Over 9,500 active members in SF and the Bay Area! This includes 3,800+ couples and 5,700+ singles, with 780+ active weekly." },
      { question: "Is SF better for poly or swinging?", answer: "Both! SF has massive communities for both polyamory and swinging. The poly scene is particularly strong with regular organized events." },
      { question: "What's the age range in SF lifestyle?", answer: "Very diverse: 21-35 (40%), 36-45 (30%), 46+ (30%). Tech industry brings younger crowd, but all ages are well-represented." }
    ],
    relatedCities: ["los-angeles-ca", "san-diego-ca", "portland-or"]
  },

  "atlanta-ga": {
    name: "Atlanta",
    state: "GA",
    slug: "atlanta-ga",
    coordinates: { lat: "33.7490", lng: "-84.3880" },
    stats: { totalMembers: 5800, couples: 2400, singles: 3400, activeWeekly: 480, newThisMonth: 190 },
    hero: {
      title: "Swingers, BDSM & ENM Dating in Atlanta",
      subtitle: "Connect with 5,800+ verified lifestyle members in ATL. The South's most vibrant community for swingers, kink, and ethical non-monogamy."
    },
    description: "SPICE connects you with Atlanta's growing lifestyle community of 5,800+ swingers, BDSM enthusiasts, and ENM practitioners.",
    seo: {
      title: "Swingers & BDSM Dating Atlanta | 5,800+ Lifestyle Members | SPICE",
      description: "Join Atlanta's hottest lifestyle community. 5,800+ verified swingers, BDSM, ENM & poly members. Download SPICE free.",
      keywords: "swingers Atlanta, BDSM dating ATL, ENM dating Atlanta, polyamory Georgia, lifestyle dating Atlanta, swingers near me ATL"
    },
    content: {
      overview: {
        title: "Atlanta's Southern Lifestyle Charm",
        paragraphs: [
          "Atlanta combines Southern hospitality with progressive sexuality, creating a unique lifestyle community of 5,800+ SPICE members. As the South's most diverse city, Atlanta welcomes all relationship styles with open arms.",
          "The Black lifestyle community in Atlanta is particularly strong and vibrant. Combined with strong LGBTQ+ presence and transplants from across the country, Atlanta offers a refreshingly diverse and welcoming scene."
        ]
      },
      neighborhoods: {
        title: "Atlanta Lifestyle Areas",
        intro: "Active SPICE communities throughout metro Atlanta:",
        areas: [
          { name: "Midtown & Virginia Highland", description: "LGBTQ+ friendly, progressive, artistic. Strong poly and kink communities. Young professionals." },
          { name: "Buckhead", description: "Upscale, affluent lifestyle scene. Exclusive parties, professional crowd, 35+ demographic." },
          { name: "East Atlanta & Decatur", description: "Alternative, creative, laid-back. House parties, younger crowd, very welcoming to newcomers." },
          { name: "North Suburbs - Alpharetta, Roswell", description: "Established suburban couples, regular meetups, family-friendly by day, lifestyle by night." }
        ]
      },
      whyCity: {
        title: "Why Atlanta for Lifestyle",
        reasons: [
          "🎵 Vibrant Black lifestyle community",
          "🌈 Strong LGBTQ+ and progressive culture",
          "💰 Affordable compared to coastal cities",
          "✈️ Major airport - easy access for travelers",
          "🏠 Big homes for hosting parties",
          "🌳 Year-round outdoor activities",
          "🎭 Diverse, welcoming community",
          "🍑 Southern hospitality meets sexual freedom"
        ]
      },
      localScene: {
        title: "The Atlanta Lifestyle Experience",
        paragraphs: [
          "Atlanta's lifestyle scene has grown exponentially in the past decade. The city hosts major lifestyle events, has several established clubs, and a thriving house party scene. The diversity of Atlanta is reflected in its lifestyle community - all races, ages, and backgrounds represented.",
          "The kink community in Atlanta is well-organized with regular munches, educational workshops, and play parties. The city has multiple dungeons and kink-friendly spaces. Atlanta's welcoming culture makes it easy for BDSM beginners to find mentors and learn safely."
        ]
      },
      safetyTips: {
        title: "Atlanta Safety Guidelines",
        intro: "Atlanta is generally safe, but smart practices apply:",
        tips: [
          { title: "Traffic Planning", description: "Atlanta traffic is notorious. Plan extra time, don't feel rushed. Meet in convenient locations." },
          { title: "Neighborhood Selection", description: "Stick to Midtown, Buckhead, Virginia Highland, Decatur for first meetings. Well-lit, busy areas." },
          { title: "Southern Discretion", description: "While Atlanta is progressive, some areas of Georgia are conservative. Be mindful of discretion and privacy." }
        ]
      }
    },
    successStory: {
      quote: "Atlanta surprised us! We expected conservative Southern attitudes but found the most welcoming, diverse lifestyle community we've ever experienced. SPICE connected us with couples from all backgrounds, and we've attended incredible parties in Buckhead and Midtown. ATL is seriously underrated!",
      author: "Devon & Simone",
      location: "Midtown"
    },
    faqs: [
      { question: "How many SPICE members are in Atlanta?", answer: "Over 5,800 active members throughout metro Atlanta! This includes 2,400+ couples and 3,400+ singles, with 480+ active weekly." },
      { question: "Is Atlanta's lifestyle scene diverse?", answer: "Absolutely! Atlanta's lifestyle community reflects the city's incredible diversity - all races, ages, sexual orientations, and backgrounds." },
      { question: "Can I find lifestyle events in Atlanta?", answer: "YES! Atlanta has regular parties, club nights, munches, and social events. SPICE's events calendar shows what's happening." }
    ],
    relatedCities: ["miami-fl", "new-orleans-la", "charlotte-nc"]
  }
};

// Export individual city for easy access
export const getCity = (slug: string): CityData | undefined => {
  return cityData[slug];
};

// Export all city slugs for routing
export const getCitySlugs = (): string[] => {
  return Object.keys(cityData);
};

// Export city names for navigation
export const getCityNames = (): Array<{name: string; slug: string}> => {
  return Object.keys(cityData).map(slug => ({
    name: cityData[slug].name,
    slug: slug
  }));
};
