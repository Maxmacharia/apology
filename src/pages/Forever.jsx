import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";
import herVideo from "../assets/her.mp4";

export default function Forever() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <video
        src={herVideo}
        controls
        className="w-full max-w-md rounded-xl shadow-lg mb-6"
      />

      <p className="max-w-xl text-lg leading-relaxed">
	Cheki hio smile babe. Unanimaliza nayo. Huku nje nashinda nikiringa 
	na wewe na furaha ndani ya roho nikisema
	mamaa akona smile fiti na ni mrembo alafu nasmile. Nikiona jina yako
	kwa hii shambala my heart inaskip a beat.
	<br /><br />
        Baby, thank you for being you 💕  
        Your love, patience, and emotions mean everything to me.
        <br /><br />
        I want you to know this my love for you will never fade.
        Forever and ever, my love 🤍✨
        <br /><br />
        The way you felt is completely normal. Feeling hurt is normal.
        Overthinking is normal. Your emotions matter to me, and I see you,
        hear you, and choose you always 🌸
	<br /><br/>
	Last but not least, I want to appreciate the support unanipea 💕. I am
	really glad babe. You are a Gem na nakupenda sana 💕💕.
      </p>

      <NavigationButtons back="/apology" />
    </motion.div>
  );
}
