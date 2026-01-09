import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const forWho = [
    "Já acompanha o mercado cripto há algum tempo.",
    "Percebeu que o problema não é falta de informação.",
    "Quer parar de reagir e começar a se posicionar.",
  ];

  const notForWho = [
    "Está começando do zero.",
    "Busca sinais de compra e venda.",
    "Quer promessas de retorno.",
  ];

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
          className="prose-dark text-base leading-[1.9] mb-12"
        >
          Este material foi pensado para quem:
        </motion.p>

        <div className="space-y-3 mb-14">
          {forWho.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
              className="text-foreground/90 text-sm leading-relaxed"
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-muted-foreground/50 text-sm leading-[1.9] mb-6"
        >
          Não é para quem:
        </motion.p>

        <div className="space-y-2">
          {notForWho.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              className="text-muted-foreground/40 text-xs leading-relaxed"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
