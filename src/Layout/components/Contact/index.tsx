import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiLoader,
  FiCheck,
  FiX,
} from "react-icons/fi";
import emailjs from "emailjs-com";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  title: z.string().min(2, { message: "Assunto deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showNotification, setShowNotification] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (submitStatus !== "idle") {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        setTimeout(() => setSubmitStatus("idle"), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_mf5n8ns",
        "template_iqojkoe",
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          title: data.title,
        },
        "vZYYE4yFx_ZH7fc1U"
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="py-16 bg-[rgba(10,10,20,0.9)] border-t border-b border-[rgba(138,43,226,0.2)]"
    >
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
          showNotification
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        {submitStatus === "success" && (
          <div className="flex items-center bg-green-900/90 border border-green-600 text-green-100 px-4 py-3 rounded-lg shadow-lg">
            <FiCheck className="mr-2" />
            Mensagem enviada com sucesso!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="flex items-center bg-red-900/90 border border-red-600 text-red-100 px-4 py-3 rounded-lg shadow-lg">
            <FiX className="mr-2" />
            Erro ao enviar mensagem. Tente novamente.
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light mb-4">
            <span className="text-primary">{"// "}</span>Contato
          </h2>
          <p className="text-light-gray max-w-[700px] mx-auto">
            Vamos conversar sobre tecnologia, projetos ou oportunidades!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[rgba(20,20,30,0.8)] border border-[rgba(138,43,226,0.2)] rounded-lg p-6 backdrop-blur-sm transition-all hover:border-[rgba(138,43,226,0.4)]">
            <h3 className="text-xl font-mono text-purple-300 mb-6">
              <span className="text-gray-400 mr-2">{"//"}</span> Envie uma
              mensagem
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Nome *
                </label>
                <input
                  id="name"
                  className={`w-full bg-[rgba(30,30,40,0.8)] border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[rgba(138,43,226,0.3)] focus:ring-purple-500 hover:border-[rgba(138,43,226,0.5)]"
                  }`}
                  placeholder="Seu nome"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Assunto *
                </label>
                <input
                  id="title"
                  className={`w-full bg-[rgba(30,30,40,0.8)] border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 transition-all ${
                    errors.title
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[rgba(138,43,226,0.3)] focus:ring-purple-500 hover:border-[rgba(138,43,226,0.5)]"
                  }`}
                  placeholder="Assunto"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full bg-[rgba(30,30,40,0.8)] border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[rgba(138,43,226,0.3)] focus:ring-purple-500 hover:border-[rgba(138,43,226,0.5)]"
                  }`}
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full bg-[rgba(30,30,40,0.8)] border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[rgba(138,43,226,0.3)] focus:ring-purple-500 hover:border-[rgba(138,43,226,0.5)]"
                  }`}
                  placeholder="Sua mensagem..."
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isDirty || !isValid}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : !isDirty || !isValid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg hover:shadow-purple-500/20"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin h-5 w-5" />
                    <span className="animate-pulse">Enviando...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-[rgba(20,20,30,0.8)] border border-[rgba(138,43,226,0.2)] rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-mono text-purple-300 mb-6">
              <span className="text-gray-400 mr-2">{"//"}</span> Outras formas
              de contato
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-4">
                  <FiMail className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <div className="text-white transition-colors">
                    deborahellenvp@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-4">
                  <FiPhone className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Telefone</h4>
                  <div className="text-white transition-colors">
                    +55 (88) 99253-1384
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-4">
                  <FiMapPin className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Localização</h4>
                  <p className="text-white">Sobral, Ceará</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-400 text-sm mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(30,30,40,0.8)] p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(30,30,40,0.8)] p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(30,30,40,0.8)] p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(30,30,40,0.8)] p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(30,30,40,0.8)] p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
