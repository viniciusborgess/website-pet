import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Building, Check, Clock, DoorOpen, Hammer, Heart, MapPin, ShieldCheck, Users } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16 ">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-full overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Nossa clínica se dedica ao bem-estar dos animais, oferecendo
              atendimento de excelência e cuidado personalizado. Contamos com
              uma equipe altamente capacitada para garantir o melhor serviço
              para seu pet.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Hammer className="text-red-500" />
                  Aberto desde 2006
                </li>
                <li className="flex items-center gap-2">
                  <Users className="text-red-500" />
                  Equipe com mais de 10 veterinários
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="text-red-500" />
                  Qualidade é nossa prioridade
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Clock className="text-red-500" />
                  Atendimento 24 horas
                </li>
                <li className="flex items-center gap-2">
                  <Building className="text-red-500" />
                  Infraestrutura moderna
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="text-red-500" />
                  Amor e respeito pelos animais
                </li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:scale-103 duration-300"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via Whatsapp
              </a>
              <a
                href="#"
                className="bg-[#d44133] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:scale-103 duration-300"
              >
                <MapPin className="w-5 h-5 text-white" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
