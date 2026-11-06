
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
  Mail,
  MapPin,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// PERSONALIZA TUS DATOS AQUÍ
const perfil = {
  nombre: "Daniel Rivera",
  ubicacion: "Comayagua, Honduras",
  correo: "daniriv2103@gmail.com",
  github: "https://github.com/daniriv12835",
  linkedin: "https://www.linkedin.com/in/daniel-rivera-a7b301436",
  cv: "",
  foto: "src=/portafolio/foto-perfil.jpeg",
};

const proyectos = [
  {
    nombre: "EVIDS · Información aeroportuaria",
    tipo: "Experiencia profesional",
    descripcion:
      "Participación en el desarrollo, despliegue y automatización de un sistema de información para pantallas aeroportuarias. Experiencia en integración, mantenimiento y procesos de implementación.",
    tecnologias: ["Node.js", "IIS", "PowerShell", "CI/CD"],
    estado: "Experiencia real · Código privado",
    icono: Monitor,
  },
  {
    nombre: "Aplicaciones de escritorio .NET",
    tipo: "Proyectos académicos",
    descripcion:
      "Desarrollo de aplicaciones de escritorio utilizando Visual Basic, Windows Forms y programación orientada a objetos. Experiencia en interfaces gráficas y lógica de aplicaciones.",
    tecnologias: ["Visual Basic", ".NET", "WinForms"],
    estado: "Documentación pendiente",
    icono: CodeXml,
  },
  {
    nombre: "Sistema de Tickets IT",
    tipo: "Próximo proyecto personal",
    descripcion:
      "Sistema de gestión de incidencias técnicas que planeo desarrollar para administrar solicitudes, prioridades, usuarios y seguimiento de tickets.",
    tecnologias: ["NestJS", "Prisma", "MySQL"],
    estado: "En planificación",
    icono: Wrench,
  },
];

const habilidades = [
  {
    categoria: "Backend",
    lista: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Prisma",
      "REST APIs",
    ],
  },
  {
    categoria: "Bases de datos",
    lista: ["MySQL", "SQL"],
  },
  {
    categoria: "Frontend y .NET",
    lista: [
      "React",
      "Next.js",
      "JavaScript",
      "Visual Basic",
      "WinForms",
    ],
  },
  {
    categoria: "Infraestructura y DevOps",
    lista: [
      "Linux",
      "Windows",
      "IIS",
      "PM2",
      "Nginx",
      "Git",
      "PowerShell",
      "CI/CD",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-fondo text-principal">
      {/* Fondo decorativo */}
      <div className="ambiente pointer-events-none absolute inset-x-0 top-0 h-[700px]" />

      {/* NAVEGACIÓN */}
      <header className="sticky top-4 z-50 mx-auto w-fit max-w-[calc(100%-20px)]">
        <nav
          className="navegacion flex items-center gap-1 rounded-full p-1.5"
          aria-label="Navegación principal"
        >
          <a href="#inicio">Inicio</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <div className="relative mx-auto max-w-[850px] px-5 sm:px-8">
        {/* INICIO */}
        <section
          id="inicio"
          className="scroll-mt-28 pb-28 pt-28 sm:pt-36"
        >
          {/* FOTO Y ESTADO */}
          <div className="mb-8 flex flex-wrap items-center gap-5">
            <div className="relative">
              <Image
                src={perfil.foto}
                alt={`Fotografía de ${perfil.nombre}`}
                width={100}
                height={100}
                priority
                className="h-24 w-24 rounded-full border-[3px] border-acento/50 bg-tarjeta object-cover shadow-xl"
              />
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-fondo bg-disponible" />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-secundario">
                ¡Bienvenido a mi portafolio!
              </p>

              <span className="estado-disponible inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-disponible">
                <span className="h-2 w-2 rounded-full bg-disponible" />
                Disponible para oportunidades laborales
              </span>
            </div>
          </div>

          {/* PRESENTACIÓN */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hola, soy {perfil.nombre}
            <span className="text-acento">.</span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-acento sm:text-2xl">
            Ingeniero en Infotecnología
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-secundario">
            Apasionado por el{" "}
            <strong className="font-semibold text-principal">
              desarrollo de software
            </strong>
            , especializado en tecnologías Backend,
            automatización y soporte técnico IT.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-secundario">
            Con experiencia práctica en el Departamento de
            Tecnología e Innovación del Aeropuerto Internacional
            de Palmerola, donde participé en actividades de
            desarrollo, infraestructura y soporte tecnológico.
          </p>

          {/* BOTONES */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="boton boton-acento"
            >
              <CodeXml size={18} />
              Ver proyectos
              <ArrowUpRight size={16} />
            </a>

            {perfil.github && (
              <a
                href={perfil.github}
                target="_blank"
                rel="noopener noreferrer"
                className="boton"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            )}

            {perfil.linkedin && (
              <a
                href={perfil.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="boton"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            )}

            {perfil.cv && (
              <a
                href={perfil.cv}
                download
                className="boton"
              >
                <Download size={17} />
                Descargar CV
              </a>
            )}
          </div>

          <div className="mt-9 flex items-center gap-2 text-sm text-secundario">
            <MapPin size={17} className="text-acento" />
            {perfil.ubicacion}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="seccion">
          <h2 className="titulo">
            <BriefcaseBusiness className="text-acento" />
            Experiencia laboral
          </h2>

          <div className="relative ml-2 border-l border-acento/40 py-1 pl-8">
            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-acento bg-fondo" />

            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-acento">
                  Práctica Profesional · Tecnología e Innovación
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Aeropuerto Internacional de Palmerola
                </h3>
              </div>

              <span className="text-sm text-secundario">
                2026
              </span>
            </div>

            <p className="mt-5 leading-8 text-secundario">
              Experiencia en soporte a infraestructura
              tecnológica, desarrollo de aplicaciones y
              automatización en un entorno aeroportuario.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-secundario marker:text-acento">
              <li>
                Diagnóstico y soporte a cámaras CCTV,
                impresoras de quioscos y conectividad.
              </li>
              <li>
                Participación en implementación y despliegue
                de sistemas de información aeroportuaria.
              </li>
              <li>
                Soporte a servicios y aplicaciones en
                entornos Windows y Linux.
              </li>
              <li>
                Actividades de automatización y verificación
                de conectividad de sistemas tecnológicos.
              </li>
            </ul>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="seccion">
          <h2 className="titulo">
            <CodeXml className="text-acento" />
            Proyectos
          </h2>

          <div className="space-y-16">
            {proyectos.map((proyecto, index) => {
              const Icono = proyecto.icono;

              return (
                <article
                  key={proyecto.nombre}
                  className="grid items-center gap-7 sm:grid-cols-2"
                >
                  {/* Vista visual */}
                  <div className="vista-proyecto group flex min-h-60 flex-col justify-between rounded-2xl border border-principal/10 bg-tarjeta p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[.2em] text-secundario">
                      Proyecto {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mx-auto flex w-40 items-center justify-center rounded-xl border border-acento/20 bg-fondo px-4 py-8 shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
                      <Icono
                        className="text-acento"
                        size={54}
                        strokeWidth={1.2}
                      />
                    </div>

                    <span className="text-xs text-secundario">
                      {proyecto.estado}
                    </span>
                  </div>

                  {/* Descripción */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-acento">
                      {proyecto.tipo}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-snug">
                      {proyecto.nombre}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-secundario">
                      {proyecto.descripcion}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tec) => (
                        <span className="etiqueta" key={tec}>
                          {tec}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="seccion">
          <h2 className="titulo">
            <Server className="text-acento" />
            Sobre mí
          </h2>

          <p className="leading-8 text-secundario">
            Soy Ingeniero en Infotecnología con interés
            en el desarrollo Backend, la implementación
            de soluciones tecnológicas y la administración
            de infraestructura IT.
          </p>

          <p className="mt-4 leading-8 text-secundario">
            Me apasiona aprender nuevas tecnologías,
            resolver problemas y desarrollar aplicaciones
            que aporten valor real. Busco una oportunidad
            para continuar creciendo profesionalmente
            y contribuir con mis conocimientos.
          </p>

          <h3 className="mt-10 text-lg font-bold">
            Tecnologías y herramientas
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {habilidades.map((grupo) => (
              <div
                key={grupo.categoria}
                className="tarjeta rounded-xl border border-principal/10 bg-tarjeta p-5"
              >
                <h4 className="font-semibold text-principal">
                  {grupo.categoria}
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {grupo.lista.map((item) => (
                    <span className="etiqueta" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="scroll-mt-28 border-t border-principal/10 pb-20 pt-12"
        >
          <h2 className="text-3xl font-bold">
            ¿Trabajamos juntos?
            <span className="text-acento">.</span>
          </h2>

          <p className="mt-4 max-w-xl leading-8 text-secundario">
            Estoy abierto a nuevas oportunidades
            profesionales en desarrollo de software,
            Backend y soporte tecnológico.
          </p>

          {perfil.correo && (
            <a
              href={`mailto:${perfil.correo}`}
              className="boton boton-acento mt-7"
            >
              <Mail size={18} />
              Contáctame
              <ArrowUpRight size={16} />
            </a>
          )}

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-secundario">
            {perfil.github && (
              <a
                href={perfil.github}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-social"
              >
                <FaGithub />
                GitHub
              </a>
            )}

            {perfil.linkedin && (
              <a
                href={perfil.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-social"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            )}

            {perfil.correo && (
              <a
                href={`mailto:${perfil.correo}`}
                className="enlace-social"
              >
                <Mail size={16} />
                Correo electrónico
              </a>
            )}
          </div>
        </section>

        {/* PIE DE PÁGINA */}
        <footer className="flex flex-wrap justify-between gap-3 border-t border-principal/10 py-7 text-xs text-secundario">
          <p>
            © {new Date().getFullYear()} {perfil.nombre}
          </p>
          <p>
            Desarrollado con Next.js y Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}
