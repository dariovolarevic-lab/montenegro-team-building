export interface Activity {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  image: string;
  duration: string;
  numberOfPeople: string;
  category: string;
  locations: string;
  galleryImages?: string[];
}

export const activities: Activity[] = [
  {
    slug: "montenegro-scavenger-hunt",
    title: "Montenegro Scavenger Hunt",
    subtitle: "Explore, discover and conquer Montenegro's hidden gems",
    galleryImages: [
      "/images/activities/TH1.webp",
      "/images/activities/TH2.webp",
      "/images/activities/TH3.webp",
      "/images/activities/TH4.webp",
      "/images/activities/TH5.webp",
      "/images/activities/TH6.webp",
    ],
    shortDescription:
      "Teams embark on an exciting adventure, diving into historical sites and cultural traditions as they race against the clock! It's the perfect mix of history, laughter, and icebreaking fun!",
    description:
      "Teams embark on an exciting adventure, diving into historical sites and cultural traditions as they race against the clock! Along the way, they'll tackle fun tasks, snap creative photos, and rack up points for their achievements. It's the perfect mix of history, laughter, and icebreaking fun! Additionally, we can customize the experience with tasks tailored to your company, making it uniquely yours.\n\nThe activity is divided into several rounds, each designed to test a different aspect of teamwork. Some tasks require the whole group to work together, while others challenge individuals to step up and take the lead. Every challenge is carefully crafted to encourage communication, creative thinking, and mutual support — the three pillars of any high-performing team.\n\nOur facilitators are present throughout the event to keep energy levels high, ensure fair scoring, and adapt the pace to your group's needs. After all tasks are completed, teams gather for a final scoring ceremony where points are tallied, winners are announced, and everyone shares their favourite moments from the day.\n\nThe Montenegro Scavenger Hunt is suitable for all fitness levels and requires no special preparation. It works equally well as a standalone event or as part of a wider corporate programme. Groups of all backgrounds — from finance to tech to healthcare — consistently rate it as one of the most enjoyable and memorable team building experiences they've ever had.",
    image: "/images/gallery/montenegro-scavenger-hunt.webp",
    duration: "1 - 3 hours",
    numberOfPeople: "8 - 400",
    category: "Scavenger Hunt",
    locations: "Podgorica, Kotor, Budva and others",
  },
  {
    slug: "create-a-movie",
    title: "Create a Movie",
    subtitle: "Lights, camera, teamwork — your team on the big screen",
    galleryImages: [
      "/images/activities/Create a movie 1.webp",
      "/images/activities/Create a movie 2.webp",
      "/images/activities/Create a movie 3.webp",
      "/images/activities/Create a movie 4.webp",
      "/images/activities/Create a movie 5.webp",
      "/images/activities/Create a movie 6.webp",
    ],
    shortDescription:
      "The cinematic journey begins with crafting a storyline and selecting filming locations. Teams produce polished short films and walk the red carpet at an Oscars-style Awards Ceremony!",
    description:
      "The cinematic journey begins with crafting a storyline, aided by scenario boards for guidance. Teams are empowered to select filming locations that best align with their narrative. Post-production involves our editors refining the footage, adding necessary elements like titles, sounds, or effects to produce polished final cuts lasting 1 to 3 minutes. To culminate this \"Hollywood\" experience, we host an Oscars-style Awards Ceremony, complete with a red carpet event where teams showcase their films. Awards are distributed across various categories, honoring the dedication and creativity of each team. This endeavor not only underscores teamwork and ingenuity but also provides participants with a cherished video as a forever memory and souvenir.\n\nEach team is assigned a dedicated role structure that mirrors a real film production: a director, a scriptwriter, actors, a camera operator, and a producer. This role distribution encourages every participant to contribute meaningfully, regardless of their personality type. Quieter team members often find a natural home behind the camera or in writing, while more outgoing individuals thrive in front of it.\n\nThe filming phase is fast-paced and full of spontaneous moments that bring teams together in a way that few other activities can. Laughter, improvisation, and creative problem-solving are guaranteed. By the time teams hand over their footage for editing, a real sense of shared accomplishment has formed.\n\nThe Awards Ceremony is the highlight of the entire experience. Teams dress up, walk the red carpet, and watch each other's films together. Categories include Best Actor, Best Plot Twist, Best Teamwork, and of course, Best Film Overall. Every team walks away with recognition — and every participant walks away with a video they'll want to share for years to come.",
    image: "/images/gallery/create-a-movie.webp",
    duration: "2 - 4 hours",
    numberOfPeople: "8 - 500",
    category: "Creative",
    locations: "Podgorica, Kotor, Budva and others",
  },
  {
    slug: "classical-treasure-hunt",
    title: "Classical Treasure Hunt",
    subtitle: "Follow the clues, solve the mystery, claim the treasure",
    galleryImages: [
      "/images/activities/TH1.webp",
      "/images/activities/TH2.webp",
      "/images/activities/TH3.webp",
      "/images/activities/TH4.webp",
      "/images/activities/TH5.webp",
      "/images/activities/TH6.webp",
    ],
    shortDescription:
      "Set off on a thrilling treasure hunt, cracking cryptic clues, solving puzzles, and uncovering hidden gems while exploring the city — teamwork and fun guaranteed!",
    description:
      "Set off on a thrilling treasure hunt, where teams crack cryptic clues, solve intriguing puzzles, and uncover hidden gems while exploring the city! This action-packed activity boosts problem-solving skills, strengthens teamwork, and immerses participants in fascinating local history and traditions. Flexible timing allows the adventure to adapt to your team's pace and motivation, typically lasting about 30 minutes more or less. Want to make it extra special? We can customize the Treasure Hunt with a theme of your choice for a truly unforgettable experience!\n\nThe hunt is structured in stages. Each team receives a starting clue that leads them to the next location, where a new challenge awaits. Challenges vary in format — some are logic-based puzzles, others involve physical tasks, trivia questions, or creative assignments. This variety ensures that every member of the team gets a chance to shine, regardless of their strengths.\n\nOne of the key strengths of the Classical Treasure Hunt is how naturally it develops team dynamics. Under a gentle time pressure, teams quickly learn how to delegate, how to listen to each other, and how to make quick decisions together. These are exactly the skills that translate directly into a more effective and connected workplace.\n\nThe activity is fully scalable and can be run with groups of 12 up to 200 participants, split into competing teams of 4 to 8 people. Our event coordinators manage all logistics, briefings, and scoring, so your team simply shows up and enjoys the experience. At the end, scores are revealed, winners are celebrated, and stories from the hunt are shared over drinks — the perfect way to close a great team building day.",
    image: "/images/gallery/classical-treasure-hunt.webp",
    duration: "1 - 3 hours",
    numberOfPeople: "8 - 400",
    category: "Treasure Hunt",
    locations: "Podgorica, Kotor, Budva and others",
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return activities.map((a) => a.slug);
}
