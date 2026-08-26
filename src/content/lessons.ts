export type LessonSlug =
  | "piano"
  | "guitar"
  | "voice"
  | "bass"
  | "drums"
  | "songwriting";

export interface LessonPage {
  slug: LessonSlug;
  name: string;
  pluralLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  whoFor: string;
  approach: string;
  outcomes: readonly string[];
  faq: readonly { question: string; answer: string }[];
}

export const LESSON_PAGES: Record<LessonSlug, LessonPage> = {
  piano: {
    slug: "piano",
    name: "Piano",
    pluralLabel: "piano lessons",
    title: "Online Piano Lessons | Matt Shill Music",
    description:
      "Online piano lessons for beginners through conservatory audition prep. One-on-one with Matt Shill, Frost & Eastman trained. Free trial available."
    h1: "Online Piano Lessons",
    intro:
      "Whether you're learning your first chords or polishing repertoire for Juilliard, Berklee, or another conservatory, online piano lessons with Matt Shill are built around your goals, not a one-size-fits-all method book."
    whoFor:
      "Kids and teens building technique and confidence, adults starting fresh or returning after years away, and serious students preparing for ABRSM exams or university auditions.",
    approach:
      "Every week is live and one-on-one over video. We mix technique, theory, and ear training with music you actually want to play: classical, contemporary, songwriting accompaniments, or audition repertoire."
    outcomes: [
      "Stronger technique and sight reading at your level",
      "Repertoire that matches your goals and taste",
      "Optional ABRSM and conservatory audition prep",
      "Never Miss A Lesson™ if life gets in the way",
    ],
    faq: [
      {
        question: "Do I need an acoustic piano?",
        answer:
          "A full-size keyboard with weighted keys works well for beginners. Intermediate and advanced students benefit from an acoustic or high-quality digital piano. We'll sort out gear at your free trial.",
      },
      {
        question: "Are online piano lessons as effective as in-person?",
        answer:
          "For technique, repertoire, theory, and audition coaching: yes. I teach exclusively online and work with students across time zones. A stable camera angle on your hands and keys is the main setup requirement."
      },
    ],
  },
  guitar: {
    slug: "guitar",
    name: "Guitar",
    pluralLabel: "guitar lessons",
    title: "Online Guitar Lessons | Matt Shill Music",
    description:
      "Online guitar lessons for kids, adults & audition-bound students. Technique, theory, and songs you care about, with Matt Shill. Book a free trial."
    h1: "Online Guitar Lessons",
    intro:
      "From first open chords to advanced fingerstyle, rock, jazz, or classical repertoire, online guitar lessons focus on real progress and the music that keeps you practicing.",
    whoFor:
      "Beginners who want clear fundamentals, teens building band and performance skills, adults learning for fun, and students preparing portfolios or auditions.",
    approach:
      "We balance fretting-hand and picking technique with theory, ear training, and songs you choose. Acoustic or electric, lessons adapt to your instrument and style."
    outcomes: [
      "Clean technique and confident rhythm",
      "Songs, solos, and styles you want to play",
      "Theory and ear training tied to the fretboard",
      "Structured weekly plan via the student portal",
    ],
    faq: [
      {
        question: "Acoustic or electric: does it matter?"
        answer:
          "Either works. We'll adapt technique and repertoire to your guitar. If you're shopping for a first instrument, I can recommend options at your free trial.",
      },
      {
        question: "Can we work on songwriting or production too?",
        answer:
          "Yes. Many guitar students blend lessons with songwriting, arrangement, and basic production, especially when they're writing originals."
      },
    ],
  },
  voice: {
    slug: "voice",
    name: "Voice",
    pluralLabel: "voice lessons",
    title: "Online Voice Lessons | Matt Shill Music",
    description:
      "Online voice and vocal lessons for kids, teens & adults. Technique, repertoire, and audition prep with Matt Shill. Book your free trial.",
    h1: "Online Voice Lessons",
    intro:
      "Online voice lessons that strengthen healthy technique, expand range and tone, and build performance confidence, whether you sing pop, musical theater, classical, or your own songs."
    whoFor:
      "Young singers finding their voice, adults who want to sing with confidence, and students preparing for school shows, recordings, or conservatory auditions.",
    approach:
      "We warm up with breath and resonance work, then apply it to repertoire you care about. Lessons include performance coaching, diction, and ear training, not just scales."
    outcomes: [
      "Healthier technique and more reliable tone",
      "Repertoire that fits your voice and goals",
      "Audition and performance coaching when you need it",
      "Weekly feedback and practice assignments",
    ],
    faq: [
      {
        question: "What do I need for online voice lessons?",
        answer:
          "A quiet space, a device with a camera and decent mic (phone or laptop is fine to start), and headphones if helpful. I'll suggest setup tweaks at your trial.",
      },
      {
        question: "Do you teach only classical voice?",
        answer:
          "No. I work across styles (pop, musical theater, contemporary, and classical), always with healthy technique underneath whatever style you pursue."
      },
    ],
  },
  bass: {
    slug: "bass",
    name: "Bass",
    pluralLabel: "bass lessons",
    title: "Online Bass Lessons | Matt Shill Music",
    description:
      "Online bass guitar lessons for beginners and advancing players. Groove, technique, and musicianship with Matt Shill. Free trial available.",
    h1: "Online Bass Lessons",
    intro:
      "Online bass lessons that lock in groove, build fretting and plucking technique, and teach you how the bass holds a band together, across rock, funk, jazz, pop, and more."
    whoFor:
      "Beginners who want a solid foundation, band players leveling up their feel, and adults learning bass as a second instrument.",
    approach:
      "We work on time feel, tone, walking lines, and song-based parts, with theory and ear training that actually show up in the music you're playing."
    outcomes: [
      "Stronger time feel and rhythmic confidence",
      "Technique that stays clean at performance tempos",
      "Parts and grooves from songs you care about",
      "Theory that maps to the fretboard",
    ],
    faq: [
      {
        question: "Do I need an amp for online bass lessons?",
        answer:
          "A practice amp or interface into your computer works. We can refine tone and setup once we see what you're working with.",
      },
      {
        question: "Can I start bass with no music background?",
        answer:
          "Absolutely. We'll start with fundamentals and build week by week: rhythm first, then technique and repertoire."
      },
    ],
  },
  drums: {
    slug: "drums",
    name: "Drums",
    pluralLabel: "drum lessons",
    title: "Online Drum Lessons | Matt Shill Music",
    description:
      "Online drum lessons for beginners through advancing players. Technique, grooves, and musical time with Matt Shill. Book a free trial.",
    h1: "Online Drum Lessons",
    intro:
      "Online drum lessons focused on solid time, clean technique, and grooves that serve the song, whether you're on an acoustic kit, electronic kit, or practice pad."
    whoFor:
      "Kids and teens starting out, adults picking up drums for fun or bands, and players who want better independence and musical control.",
    approach:
      "We prioritize listening and feel alongside rudiments and coordination. Lessons use songs you want to play so practice stays connected to real music.",
    outcomes: [
      "Steady time and clearer groove vocabulary",
      "Hand and foot independence that holds up in songs",
      "Rudiments applied to real musical contexts",
      "Weekly structure so practice doesn't stall",
    ],
    faq: [
      {
        question: "Can I take drum lessons without a full kit?",
        answer:
          "A practice pad works for a while, especially for beginners. An electronic kit or acoustic kit lets us cover more grooves and dynamics as you grow.",
      },
      {
        question: "How do online drum lessons handle sound and camera?",
        answer:
          "We'll set a camera angle that shows your kit and posture, and dial in audio so stick and footwork are clear. Most students use a laptop or phone plus a simple mic if needed.",
      },
    ],
  },
  songwriting: {
    slug: "songwriting",
    name: "Songwriting",
    pluralLabel: "songwriting lessons",
    title: "Online Songwriting Lessons | Matt Shill Music",
    description:
      "Online songwriting and music production lessons with Matt Shill. Theory, craft, and recording skills for writers and producers. Free trial.",
    h1: "Online Songwriting Lessons",
    intro:
      "Online songwriting lessons that connect theory, ear training, and craft to the songs you're actually writing, plus optional production and recording guidance from a working musician."
    whoFor:
      "Teens and adults writing originals, producers who want stronger musical foundations, and instrumentalists ready to turn ideas into finished songs.",
    approach:
      "We work on hooks, harmony, melody, lyrics, form, and arrangement, grounded in the instruments you play. Production and recording support is available when you're ready to capture takes."
    outcomes: [
      "Clearer song structures and stronger hooks",
      "Harmony and ear skills that serve your writing",
      "Guidance on demos, recording, and finishing tracks",
      "A weekly plan tied to the songs you're building",
    ],
    faq: [
      {
        question: "Do I need to play an instrument already?",
        answer:
          "It helps, but we can start from where you are. Many songwriting students use piano or guitar as their writing tool, including beginners."
      },
      {
        question: "Can lessons include production and recording?",
        answer:
          "Yes. Outside the studio I'm a songwriter, recording engineer, and performer, so we can move from writing into arranging, tracking, and polish when it fits your goals."
      },
    ],
  },
};

export const LESSON_SLUGS = Object.keys(LESSON_PAGES) as LessonSlug[];

export function getLessonPage(slug: string): LessonPage | undefined {
  return LESSON_PAGES[slug as LessonSlug];
}
