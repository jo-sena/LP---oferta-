import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-20"
        >
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="prose-dark text-base leading-[1.9] mb-16"
        >
          Se você chegou até aqui, provavelmente já sentiu que algo faltava.
          Este material organiza essa leitura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 border-2 border-foreground/20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                borderRadius: "0.5rem",
                background: "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              }}
            />
          </div>
          <Button 
            variant="cta" 
            size="xl" 
            className="relative min-w-[240px] px-8 py-6 text-base font-medium transition-all duration-500 hover:tracking-wide hover:shadow-lg"
          >
            Acessar o diagnóstico
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-muted-foreground/40 text-xs mt-8"
        >
          MAPA · Acesso imediato
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-32 pb-8"
        >
          <div className="w-1 h-1 mx-auto rounded-full bg-muted-foreground/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
