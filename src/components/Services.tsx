import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white overflow-hidden relative z-0">
      <div className="space-y-32">
        
        {/* Block 1: Movimentação de Cargas */}
        <div className="space-y-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-brand-primary uppercase inline-block relative pb-2">
                MOVIMENTAÇÃO DE CARGAS COM ENGENHARIA APLICADA
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-accent"></div>
              </h2>
            </motion.div>
          </div>

          <div className="bg-[#ece9e9] w-full py-12 lg:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-11 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="py-8 lg:py-24"
                >
                  <div className="space-y-6">
                    <p className="text-black text-lg font-medium leading-relaxed">
                      Desenvolvemos projetos de rigging com planejamento técnico completo, análise estrutural e gestão de riscos.
                    </p>
                    
                    <ul className="space-y-3">
                      {[
                        "ESTUDO DE VIABILIDADE TÉCNICA",
                        "PLANO DE IÇAMENTO",
                        "DIMENSIONAMENTO ESTRUTURAL",
                        "ANÁLISE DE RISCOS",
                        "EMISSÃO DE ART"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-black font-black text-sm tracking-widest">
                          <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-black/90 text-base font-medium">
                      Segurança, previsibilidade e precisão em cada operação.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative py-8 lg:py-12"
                >
                  {/* Custom Shape Container: Rounded TL/BR, Cut TR/BL */}
                  <div 
                    className="aspect-[16/10] overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
                    style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%)' }}
                  >
                    <img 
                      src="/Guindaste.png" 
                      alt="Movimentação de Cargas" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Responsabilidade Técnica */}
        <div className="space-y-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:text-left"
            >
              <h2 className="text-3xl lg:text-4x1 font-black tracking-tight text-brand-primary uppercase inline-block relative pb-2">
                RESPONSABILIDADE TÉCNICA INTEGRAL
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-accent"></div>
              </h2>
            </motion.div>
          </div>

          <div className="bg-[#ece9e9] w-full py-12 lg:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-11 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1 relative py-8 lg:py-12"
                >
                  {/* Custom Shape Container: Rounded TL/BR, Cut TR/BL */}
                  <div 
                    className="aspect-[16/10] overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
                    style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%)' }}
                  >
                    <img 
                      src="/responsabilidade.png" 
                      alt="Responsabilidade Técnica" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-1 lg:order-2 py-8 lg:py-24"
                >
                  <div className="space-y-6">
                    <p className="text-black text-lg font-medium leading-relaxed">
                      Engenharia com controle total do processo. Atuação técnica conduzida do início ao fim do projeto, assegurando:
                    </p>
                    
                    <ul className="space-y-3">
                      {[
                        "CONFORMIDADE COM NORMAS TÉCNICAS",
                        "PRECISÃO NOS CÁLCULOS",
                        "REDUÇÃO DE RISCOS OPERACIONAIS",
                        "SEGURANÇA ESTRUTURAL",
                        "CONTROLE TÉCNICO DOCUMENTADO"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-black font-black text-sm tracking-widest">
                          <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-black/90 text-base font-medium">
                      A engenharia não é suporte. É fundamento.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
