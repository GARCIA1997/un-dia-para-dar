import { Heart } from "lucide-react";
import { needs } from "../utils/carolita";

export default function Carolita() {
  const handleWhatsAppClick = (needTitle: string) => {
    const message = encodeURIComponent(
      `Hola, me gustaría apoyar con la ${needTitle} de Carolita.`
    );
    window.open(`https://wa.me/525512345678?text=${message}`, "_blank");
  };

  const handleGeneralSupport = () => {
    const message = encodeURIComponent(
      "Hola, quiero apoyar a la fundación Carolita."
    );
    window.open(`https://wa.me/525512345678?text=${message}`, "_blank");
  };
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center pl-10">
            <img
              src="/images/carolita.png"
              alt="Fundación Carolita"
              className="h-16 sm:h-20 w-auto scale-[2] "
            />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0072BC]/5 via-white to-[#FBB040]/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-[#F26C21] to-[#FBB040] rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004B87] mb-6 leading-tight">
              Apoya a Carolita y sé parte de un cambio con propósito
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              En Carolita acompañamos a personas con discapacidad en su
              desarrollo y autonomía. Cada apoyo fortalece nuestros espacios,
              programas y materiales para seguir construyendo oportunidades con
              dignidad, alegría y participación.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FBB040]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#0072BC]/10 rounded-full blur-3xl"></div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0072BC] mb-4">
              ¿Cómo puedes apoyar?
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Estas son algunas de las necesidades actuales que nos ayudan a
              seguir brindando espacios dignos y oportunidades de desarrollo
              para nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {needs.map((need) => {
              const IconComponent = need.icon;
              return (
                <div
                  key={need.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
                >
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0072BC] to-[#004B87] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent
                          className="w-7 h-7 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-xs font-semibold text-[#0072BC] bg-[#0072BC]/10 px-3 py-1 rounded-full">
                        {need.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#004B87] mb-3">
                      {need.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {need.description}
                    </p>
                    <button
                      onClick={() => handleWhatsAppClick(need.title)}
                      className="w-full bg-[#F26C21] hover:bg-[#D85C15] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg mt-auto"
                    >
                      Apoyar este proyecto
                    </button>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-[#0072BC] via-[#F26C21] to-[#FBB040] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0072BC]/5 to-[#FBB040]/10 rounded-3xl p-8 sm:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F26C21] to-[#FBB040] mb-6">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#004B87] mb-4">
              Cada apoyo cuenta
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Únete a quienes ya hacen posible Carolita y construyamos juntos un
              futuro con más oportunidades, dignidad y participación.
            </p>
            <button
              onClick={handleGeneralSupport}
              className="inline-flex items-center bg-[#0072BC] hover:bg-[#004B87] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Quiero apoyar a Carolita
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#004B87] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 Fundación Carolita, IAP. Con propósito y dignidad.
          </p>
        </div>
      </footer>
    </div>
  );
}
