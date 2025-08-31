import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface Student {
  name: string;
  age: string;
  dream: string;
  image: string;
  media: string;
}

const StudentCarousel: React.FC = () => {
  const students: Student[] = [
    {
      name: "Chayito",
      age: "",
      dream: "Chayito es risueña y le gusta colorear. Disfruta armar rompecabezas, usar calcetines únicos y participar siempre con alegría.",
      image: "/chayito.jpeg",
      media: "/audio/chayito.ogg"
    },
    {
      name: "David",
      age: "",
      dream: "David es travieso y ama los dinosaurios y a Spider-Man. Le encanta cantar, bailar, colorear y disfrutar de los abrazos.",
      image: "/david.jpeg",
      media: "/audio/david.ogg"
    },
    {
      name: "Yair",
      age: "",
      dream: "Yair es amoroso, bailarín y creativo. Le gusta ayudar a sus compañeros y disfruta cantar y pintar.",
      image: "/jahir.jpeg",
      media: "/audio/jahir.ogg"
    },
    {
      name: "Ana Lorena Alonzo Valenzuela",
      age: "41",
      dream: "Le gusta cantar y bailar música de los años 80. También disfruta armar rompecabezas, platicar, contar chistes, jugar con Barbies y todo lo relacionado con el color rosa.",
      image: "/lorena.jpeg",
      media: "/audio/lorena.ogg"
    },
    {
      name: "Marcia",
      age: "",
      dream: "Marcia es alegre y trabajadora. Le gusta bailar, ayudar, animar a otros y aprender a través del coloreado.",
      image: "/marcia.jpeg",
      media: "/audio/marcia.ogg"
    },
    {
      name: "Max",
      age: "",
      dream: "Max es curioso y disfruta observar insectos y escuchar a las chachalacas. También le gustan los rompecabezas, la sopa de letras y caminar tranquilamente.",
      image: "/max.jpeg",
      media: "/audio/max.ogg"
    },
    {
      name: "Sandy",
      age: "",
      dream: "Sandy es una fashionista creativa que siempre apoya a su hermana. Disfruta realizar actividades divertidas y hacer cosquillas.",
      image: "/sandy.jpeg",
      media: "/audio/sandy.ogg"
    },
    {
      name: "Josué",
      age: "",
      dream: "Josué es fan de Shakira y Belinda. Es conversador, le gusta armar rompecabezas, dar abrazos y disfrutar de un pan con nata.",
      image: "/josue.jpeg",
      media: "/audio/josue.ogg"
    },
    {
      name: "Judith",
      age: "",
      dream: "Judith es risueña y trabajadora. Le gusta bailar, hornear, colorear y dar abrazos a sus compañeros.",
      image: "/judith.jpeg",
      media: "/audio/judith.ogg"
    }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
  };

  const handlePlayAudio = (media: string) => {
    // Pausar audio anterior si existe
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Crear y reproducir nuevo audio
    const audio = new Audio(media);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#808285] mb-8 tracking-tight">
              Conoce a Nuestros Estudiantes
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#14AC94] mb-6 tracking-tight">
              Historias de Superación y Esperanza
            </h3>
            <p className="text-xl md:text-2xl text-[#808285] leading-relaxed max-w-4xl mx-auto font-light">
              Cada estudiante tiene una historia única y un sueño por cumplir. Tu apoyo puede hacer la diferencia.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-[20px]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {students.map((student, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-[20px] shadow-2xl overflow-hidden mx-6 border border-gray-100">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img
                            src={student.image}
                            alt={`${student.name} - Estudiante de Fundación Carolita IAP, ${student.age} años`}
                            className="w-full h-72 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-10 flex flex-col justify-center">
                          <h3 className="text-3xl font-bold text-[#808285] mb-4 tracking-tight">
                            {student.age !== "" ? `${student.name}, ${student.age} años` : student.name}
                          </h3>
                          <p className="text-[#808285] mb-8 text-xl leading-relaxed font-light">
                            "{student.dream}"
                          </p>
                          <div className="space-y-6">
                            <button
                              onClick={() => handlePlayAudio(student.media)}
                              className="inline-flex items-center justify-center px-8 py-4 bg-[#14AC94] text-white rounded-full font-semibold hover:bg-[#0f9582] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                            >
                              <Play className="w-6 h-6 mr-3" />
                              Conoce su historia
                            </button>

                            <div>
                              <WhatsAppButton
                                message={`Hola, quiero apadrinar a  ${student.name} de Fundación Carolita IAP.`}
                                variant="primary"
                                className="w-full text-lg px-8 py-4"
                              >
                                Apadrinar Ahora
                              </WhatsAppButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7 text-[#808285]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-7 h-7 text-[#808285]" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {students.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#EE202E]' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCarousel;
