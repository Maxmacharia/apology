import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";
import herImage from "../assets/her.jpg";

export default function Love() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={herImage}
        alt="My love"
        className="w-60 h-60 object-cover rounded-full shadow-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        Baby, My Love 💖
      </h1>

      <p className="max-w-xl text-lg leading-relaxed">
        First of all babe, you are so beautiful and sexy. You keep my mind occupied
	with you smile, perfect body, soothing voice, kind heart and most importantly
	your concern about me and us. Nakumiss babe na nakupenda sana 💕.
	<br /><br/>
	You mean the world to me, babe 🌸  
        Your love, care, compassion, and honesty are my safe place.  
        I respect you deeply and cherish your heart more than words can say 💕
        <br /><br />
        I promise you this, my love I will **always listen** to your advice
        and opinions 🤍. I will always support you, stand by you, and grow with you.
        Every plan I make carries *you* in my heart as my partner, my forever,
        and my future wife 💍✨.
	<br /><br/>
	Always remember to take care of yourself for me. 
      </p>

      <NavigationButtons next="/apology" />
    </motion.div>
  );
}

