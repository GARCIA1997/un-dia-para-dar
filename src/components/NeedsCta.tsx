import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeedsCta: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-[#0072BC] to-[#004B87]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-10 md:p-16 border border-white/20 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F26C21] to-[#FBB040] rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Conoce las necesidades de Carolita
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed font-light">
                Descubre cómo puedes apoyar directamente a las personas con discapacidad que forman parte de nuestra fundación. Desde becas de capacitación hasta mejoras en nuestras instalaciones, tu ayuda hace una diferencia real.
              </p>

              <Link
                to="/carolita"
                className="inline-flex items-center bg-gradient-to-r from-[#F26C21] to-[#FBB040] hover:from-[#E85C1A] hover:to-[#EA9F2F] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl text-lg group"
              >
                Explorar necesidades
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-white/70 text-sm md:text-base mt-8 max-w-2xl font-light">
                En la página de Carolita encontrarás información detallada sobre los proyectos que necesitan apoyo y cómo colaborar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedsCta;
