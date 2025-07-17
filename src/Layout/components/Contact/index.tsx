import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiLoader,
  FiCheck,
  FiX,
} from "react-icons/fi";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  title: z
    .string()
    .min(2, { message: "Assunto deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
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
    <section className="py-10 mt-10 px-4 rounded-lg bg-[rgba(10,10,20,0.9)] border border-[rgba(138,43,226,0.2)] xs:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showNotification ? 1 : 0,
          y: showNotification ? 0 : 20,
        }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {submitStatus === "success" && (
          <div className="flex items-center bg-green-900/90 border border-green-600 text-green-100 px-4 py-3 rounded-lg shadow-lg">
            <FiCheck className="mr-2" /> Mensagem enviada com sucesso!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="flex items-center bg-red-900/90 border border-red-600 text-red-100 px-4 py-3 rounded-lg shadow-lg">
            <FiX className="mr-2" /> Erro ao enviar mensagem. Tente novamente.
          </div>
        )}
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 xs:mb-12"
        >
          <div className="text-2xl font-bold text-light mb-4 xs:text-3xl">
            <span className="text-primary">{"// "}</span>Contato
          </div>
          <p className="text-light-gray mx-auto text-sm xs:text-base">
            Vamos conversar sobre tecnologia, projetos ou oportunidades!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[rgba(20,20,30,0.8)] border border-[rgba(138,43,226,0.2)] rounded-lg p-6 backdrop-blur-sm transition-all hover:border-[rgba(138,43,226,0.4)]"
          >
            <div className="text-lg font-mono text-purple-300 mb-6 xs:text-xl">
              <span className="text-gray-400 mr-2">{"//"}</span> Envie uma
              mensagem
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {["name", "title", "email"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm text-gray-300 mb-1 capitalize"
                  >
                    {field === "name"
                      ? "Nome *"
                      : field === "title"
                      ? "Assunto *"
                      : "Email *"}
                  </label>
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    className={`w-full bg-[rgba(30,30,40,0.8)] border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 transition-all ${
                      errors[field as keyof typeof errors]
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[rgba(138,43,226,0.3)] focus:ring-purple-500 hover:border-[rgba(138,43,226,0.5)]"
                    }`}
                    placeholder={
                      field === "name"
                        ? "Seu nome"
                        : field === "title"
                        ? "Assunto"
                        : "seu@email.com"
                    }
                    {...register(field as keyof ContactFormData)}
                  />
                  {errors[field as keyof typeof errors] && (
                    <p className="mt-1 text-sm text-red-400 animate-fadeIn">
                      {errors[field as keyof typeof errors]?.message}
                    </p>
                  )}
                </div>
              ))}
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
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || !isDirty || !isValid}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all text-sm xs:text-base ${
                  isSubmitting || !isDirty || !isValid
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
                    <FiSend /> Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contatos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[rgba(20,20,30,0.8)] border border-[rgba(138,43,226,0.2)] rounded-lg p-6 backdrop-blur-sm transition-all hover:border-[rgba(138,43,226,0.4)]"
          >
            <div className="text-lg font-mono text-purple-300 mb-6 xs:text-xl">
              <span className="text-gray-400 mr-2">{"//"}</span>
              Outras formas de contato
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: FiMail,
                  label: "Email",
                  value: "deborahellenvp@gmail.com",
                },
                {
                  icon: FiPhone,
                  label: "Telefone",
                  value: "+55 (88) 99253-1384",
                },
                {
                  icon: FiMapPin,
                  label: "Localização",
                  value: "Sobral, Ceará",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start">
                  <div className="bg-purple-900/30 p-2 rounded-lg mr-4">
                    <Icon className="h-5 w-5 text-purple-300" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-gray-400 text-xs xs:text-sm">
                      {label}
                    </span>
                    <div className=" text-white transition-colors text-xs max-w-full line-clamp-1 xs:text-base">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <span className="text-gray-400 text-sm mb-3 block">
                Redes Sociais
              </span>
              <div className="flex space-x-3">
                {[
                  {
                    href: "https://github.com/debs-veras",
                    label: "GitHub",
                    icon: FiGithub,
                  },
                  {
                    href: "https://linkedin.com/in/débora-hellen-veras-paiva-711955194",
                    label: "LinkedIn",
                    icon: FiLinkedin,
                  },
                ].map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(30,30,40,0.8)] p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
