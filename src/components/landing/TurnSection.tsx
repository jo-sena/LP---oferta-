import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TurnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-28 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="w-8 h-px mx-auto bg-muted-foreground/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="prose-dark text-base leading-[1.9] mb-8"
        >
          Você sente que está sempre um passo atrás.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="prose-dark text-base leading-[1.9] mb-12"
        >
          E o resultado foi o mesmo: mais ruído, menos clareza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-serif text-2xl md:text-3xl text-foreground leading-[1.4] tracking-tight"
        >
          O problema não é quantidade.
          <span className="block mt-2 text-muted-foreground font-light">
            É ausência de estrutura.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="prose-dark text-base leading-[1.9] mt-12 opacity-90"
        >
          O que separa quem chega antes de quem chega atrasado
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="prose-dark text-base leading-[1.9] mt-8"
        >
          Não é acesso.
          <span className="block mt-1">Não é insider.</span>
          <span className="block mt-1">Não é sorte.</span>
          <span className="block mt-3 font-medium">É estrutura de leitura.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="prose-dark text-base leading-[1.9] mt-12 opacity-80"
        >
          Sem estrutura, você lê os sinais certos nos momentos errados.
        </motion.p>
      </div>
    </section>
  );
};

export default TurnSection;
