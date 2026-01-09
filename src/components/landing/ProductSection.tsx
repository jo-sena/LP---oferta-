import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const elements = [
    "Leitura de ciclos — onde você está, não onde gostaria de estar.",
    "Contexto sobre timing — por que a mesma ação funciona ou falha.",
    "Filtros de decisão — o que ignorar e o que observar.",
    "Posicionamento — onde estar antes do movimento.",
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
          className="prose-dark text-base leading-[1.9] mb-10"
        >
          Este material organiza uma estrutura de leitura do mercado.
          Não é curso. Não é mentoria. Não é sinal.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-serif text-2xl md:text-3xl text-foreground leading-[1.4] tracking-tight mb-14"
        >
          Um mapa para quem sente que falta algo
          <span className="block mt-2 text-muted-foreground font-light">
            que conecte as peças.
          </span>
        </motion.p>

        <div className="space-y-4 mb-14">
          {elements.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
              className="text-muted-foreground/80 text-sm leading-relaxed"
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="prose-dark text-base leading-[1.9] opacity-80"
        >
          Sem fórmulas. Apenas estrutura para decisões melhores.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductSection;
