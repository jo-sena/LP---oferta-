import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-32">
      <div className="max-w-xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.2] tracking-tight"
        >
          Você sente que está sempre
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="block mt-3 text-muted-foreground italic font-light"
          >
            um passo atrás.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
          className="prose-dark max-w-md mx-auto mt-12 text-base leading-[1.9]"
        >
          Não é falta de esforço. Você estuda, acompanha, tenta entender.
          <span className="block mt-4 opacity-80">
            Mas quando o movimento acontece, você percebe tarde.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="w-12 h-px mx-auto bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
