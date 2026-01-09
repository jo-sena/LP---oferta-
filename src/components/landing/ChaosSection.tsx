import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ChaosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const items = [
    "Excesso de informação que não se conecta.",
    "Opiniões conflitantes de quem parece saber.",
    "A sensação de que o timing nunca está certo.",
  ];

  return (
    <section ref={ref} className="py-28 px-6">
      <div className="max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="prose-dark text-base leading-[1.9] mb-10"
        >
          O problema não está no mercado. Está na forma como você o lê.
        </motion.p>

        <div className="space-y-5 mb-12">
          {items.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="text-muted-foreground/70 text-sm leading-relaxed pl-4 border-l border-border/30"
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="prose-dark text-base leading-[1.9]"
        >
          Você não precisa de mais dados.
          Precisa de um modo de <em className="text-foreground not-italic">organizar o que já sabe</em>.
        </motion.p>
      </div>
    </section>
  );
};

export default ChaosSection;
