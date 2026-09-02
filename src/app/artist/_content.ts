export const artistCopy = {
  name: "Matt Shill",
  role: "Singer-songwriter",
  location: "Denver, Colorado",
  tagline: "Warm music for plants and people that like them.",
  seo: {
    title: "Matt Shill — Music",
    description:
      "Singer-songwriter Matt Shill. Listen to Don't Find Me, join the mailing list, watch live videos, and book a gig. Electronic press kit for venues, festivals, and private events.",
  },
  nav: [
    { label: "Listen", href: "#listen" },
    { label: "List", href: "#list" },
    { label: "Watch", href: "#watch" },
    { label: "Bio", href: "#bio" },
    { label: "Book", href: "#book" },
  ],
  hero: {
    eyebrow: "Singer-songwriter · Denver",
    headline: "Matt Shill",
    subline: "Original music on all streaming platforms.",
    ctaListen: "Listen",
    ctaBook: "Book a gig",
  },
  listen: {
    eyebrow: "Music",
    title: "Don't Find Me",
    released: "August 2019",
    genre: "Alternative",
    description:
      "Debut album. Seven songs of rock, soul, and singer-songwriter writing — stories told with a smooth, sultry voice.",
    playerTitle: "Play Don't Find Me on Spotify",
    streamingLabel: "Listen on",
  },
  newsletter: {
    eyebrow: "Mailing list",
    title: "Stay in touch",
    intro: "New music, shows, and the occasional note. No spam.",
    email: "Email",
    emailPlaceholder: "you@email.com",
    submit: "Join the list",
    sending: "Joining…",
    success: "You're on the list. I'll write when there's something worth hearing.",
    already: "You're already on the list.",
    pending: "Check your inbox to confirm — then you're on the list.",
    invalid: "Enter a valid email so I can add you.",
    error: "That didn't go through. Try again in a moment.",
    privacy:
      "I use EmailOctopus to send this. Unsubscribe anytime, or email me to be removed.",
    heroPrivacy: "Unsubscribe anytime.",
  },
  live: {
    eyebrow: "Watch",
    title: "Live",
    intro:
      "Full live performances first. Covers, shorts, and reels live in the feeds below — click through and watch.",
  },
  social: {
    eyebrow: "Covers & clips",
    title: "On social",
    intro:
      "Pick a channel and play. YouTube and TikTok load the live feed; Instagram has recent reels you can watch here or open on the app.",
    youtubeTitle: "Recent videos on YouTube",
    tiktokTitle: "Recent videos on TikTok",
    instagramTitle: "Flip through recent reels on Instagram",
  },
  bio: {
    eyebrow: "Press",
    title: "Bio",
    paragraphs: [
      "Matt Shill is an American singer-songwriter from New York, now based in Denver, Colorado. His music sits between rock and soul — compelling stories, a smooth voice, and a sound that is his own.",
      "He has performed at Okeechobee Music Festival and Festival Miami, sharing the stage with artists including Michael McDonald, Eric Krasno, and Snarky Puppy. Dual degrees in Piano and Guitar Performance from the Frost School of Music (University of Miami), with early training at Eastman.",
      "His debut album Don't Find Me arrived in August 2019 and has since passed a million streams. Available for venues, festivals, private events, and sessions — solo, piano, or guitar.",
    ],
    facts: [
      { label: "Based in", value: "Denver, Colorado" },
      { label: "Genre", value: "Alternative / singer-songwriter" },
      { label: "Instruments", value: "Voice, piano, guitar, bass, drums, production, mixing" },
      { label: "Album", value: "Don't Find Me (2019)" },
    ],
    stagesLabel: "Selected stages",
    stages: [
      "Okeechobee Music Festival",
      "Festival Miami",
      "BalconyTV Miami — Benny's On The Beach",
      "Daza Records (live)",
    ],
  },
  booking: {
    eyebrow: "Booking",
    title: "Book Matt Shill",
    intro:
      "Venues, festivals, private events, weddings, and sessions. Send a few details — I typically reply within one business day.",
    email: "contact@mattshill.com",
    phone: "(585) 794-1114",
    phoneHref: "tel:+15857941114",
    submit: "Send booking inquiry",
    sending: "Sending…",
    success:
      "Got it — thanks. I'll reply to the email you sent, usually within one business day.",
    error:
      "The form didn't send. Email me instead and I'll pick it up from there.",
    activate:
      "FormSubmit sent an activation email to contact@mattshill.com. Click the link in that message, then submit the form once more. Check spam if you don't see it.",
    emailCta: "Email me",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      organization: "Venue or organization",
      eventType: "Event type",
      date: "Date",
      location: "City / location",
      message: "Details",
      messageHint:
        "Room, audience size, set length, backline, and anything else that helps.",
    },
    eventTypes: [
      { value: "", label: "Select one" },
      { value: "venue", label: "Venue / club gig" },
      { value: "festival", label: "Festival" },
      { value: "private", label: "Private event" },
      { value: "wedding", label: "Wedding" },
      { value: "corporate", label: "Corporate" },
      { value: "session", label: "Session / recording" },
      { value: "other", label: "Other" },
    ],
  },
  lessonsCta: {
    line: "I also teach piano, guitar, voice, bass, and drums — online, one-on-one.",
    action: "Take a lesson with Matt Shill",
  },
} as const;

export const albumTracks = [
  { number: 1, title: "Seasons", duration: "4:41" },
  { number: 2, title: "Spain", duration: "5:00" },
  { number: 3, title: "Don't Find Me", duration: "5:21" },
  { number: 4, title: "Upside Down", duration: "6:35" },
  { number: 5, title: "Maddie", duration: "4:08" },
  { number: 6, title: "Like Lovers Do", duration: "3:50" },
  { number: 7, title: "Running Cold", duration: "4:43" },
] as const;

export const streamingLinks = [
  {
    id: "spotify",
    label: "Spotify",
    href: "https://open.spotify.com/artist/6vxuPeQAxdHImxXkNmfA2o",
  },
  {
    id: "apple-music",
    label: "Apple Music",
    href: "https://music.apple.com/us/album/dont-find-me/1475125589",
  },
  {
    id: "youtube-music",
    label: "YouTube Music",
    href: "https://music.youtube.com/channel/UCeTNGIZkuXyHGWOL62o3m4A",
  },
  {
    id: "soundcloud",
    label: "SoundCloud",
    href: "https://soundcloud.com/mattshillmusic",
  },
  {
    id: "tidal",
    label: "Tidal",
    href: "https://tidal.com/artist/9409048",
  },
] as const;

export const socialLinks = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@mattshillmusic",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/mattshillmusic",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@mattshillmusic",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/mattshillmusic",
  },
  {
    id: "threads",
    label: "Threads",
    href: "https://www.threads.com/@mattshillmusic",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/mattshillmusic",
  },
  {
    id: "linktree",
    label: "Linktree",
    href: "https://linktr.ee/mattshill",
  },
] as const;

export const liveVideos = [
  {
    title: "Spain — Live at Daza Records",
    venue: "Daza Records",
    provider: "youtube" as const,
    id: "mU83ykit0CQ",
    href: "https://www.youtube.com/watch?v=mU83ykit0CQ",
  },
  {
    title: "Spain — BalconyTV",
    venue: "Benny's On The Beach, Miami",
    provider: "dailymotion" as const,
    id: "x6jsqem",
    href: "https://www.dailymotion.com/video/x6jsqem",
  },
] as const;

export const spotifyEmbedSrc =
  "https://open.spotify.com/embed/album/3QNMwLskBkTNOJciwSwjdu?utm_source=generator&theme=1";

export const youtubeUploadsEmbedSrc =
  "https://www.youtube-nocookie.com/embed/videoseries?list=UUeTNGIZkuXyHGWOL62o3m4A";

export const tiktokUsername = "mattshillmusic";

export const instagramReels = [
  {
    shortcode: "DNeQ3q5y_Ql",
    title: "Birds of a Feather — cover",
    kind: "reel",
  },
  {
    shortcode: "DNQzCJOOtz-",
    title: "Holocene, pt. 1 — cover",
    kind: "reel",
  },
  {
    shortcode: "DNWMB5rOtFf",
    title: "Holocene, pt. 2 — cover",
    kind: "reel",
  },
  {
    shortcode: "DNGPPf_Otzm",
    title: "A loop and Lil Bieber's truth",
    kind: "reel",
  },
  {
    shortcode: "BpfcbpkB_Rh",
    title: "Spain — Live at Daza Records",
    kind: "p",
  },
  {
    shortcode: "BpfEe0YBO3s",
    title: "Maddie — live at Sofar Sounds Miami",
    kind: "p",
  },
] as const;
