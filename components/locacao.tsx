"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/content";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface LocacaoProps {
  locacoes: Product[];
}

export default function Locacao({ locacoes }: LocacaoProps) {
  const whatsappUrl =
    "https://wa.me/5591981693250?text=Olá! Gostaria de conhecer a Joy Pegue & Monte.";
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Locações
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deixe a alegria tomar conta de sua festa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locacoes.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div
                    className="h-56 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <Badge className="absolute top-4 left-4 bg-black/70 text-white">
                    {product.categoria}
                  </Badge>

                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {product.descricao}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-rose-gold to-champagne text-black hover:from-champagne hover:to-rose-gold"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="h-4 w-4 mr-2" />
                        Peça seu orçamento
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-black transition-all duration-300"
          >
            Ver Catálogo Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
