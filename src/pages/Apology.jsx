import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";

export default function Apology() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center p-6 max-w-3xl mx-auto"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        I’m truly sorry, my love 💔
      </h2>

      <p className="text-lg leading-relaxed">
        Since the 24th of December, sweetie, I know I’ve been unavailable.
        Going home for the festive season, the overwhelming work, and everything
        around me made me lose balance and I hurt you in the process and it makes me 
	feel bad. That is why i have made this website for you baby 💕. I know this
	does not even come close to making all it up to you but honestly for now this
	is the least I can have for you my love 💕. Nafeel guilt kukuhurt babe. How 
	could i do that to you. How could I? Silly me. Babe I am really sorry 💕.
        <br /><br />
        Today, when I went to my cousin’s place bila kukushow anything (It is bad),
	I apologized over the phone, but I know that wasn’t enough. I failed to
	communicate openly and gently. I didn’t tell you clearly that I wasn’t going
	back to my rental, and I didn’t involve you in my plans even the small ones.
        <br /><br />
        Baby, I understand now what you truly want: balance, attention, and
        being fully involved in my life 🤍. Your feelings are valid, and I take
        full responsibility. I’m learning, listening, and committing to do better
        for you, for us, for our future 🌷
      </p>

      <NavigationButtons back="/" next="/forever" />
    </motion.div>
  );
}
