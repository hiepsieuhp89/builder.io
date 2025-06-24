"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";

import { styles } from "../../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { useTranslations } from "next-intl";

// Portal component for toaster
const ToasterPortal = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <Toaster
      position="top-right"
      containerStyle={{
        zIndex: 999999,
        position: "fixed",
        top: "20px",
        right: "20px",
      }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1a1a2e",
          color: "#fff",
          border: "1px solid #915eff",
          borderRadius: "10px",
          fontFamily: "Poppins, sans-serif",
        },
        success: {
          style: {
            background: "#0f3460",
            border: "1px solid #00d4aa",
          },
        },
        error: {
          style: {
            background: "#3a1a1a",
            border: "1px solid #ff6b6b",
          },
        },
        loading: {
          style: {
            background: "#1a1a2e",
            border: "1px solid #915eff",
          },
        },
      }}
    />,
    document.body
  );
};

// Zod validation schema
const getContactSchema = (t) =>
  z.object({
    name: z
      .string()
      .min(2, t("validation_name_min"))
      .max(50, t("validation_name_max")),
    email: z.string().email(t("validation_email_invalid")),
    message: z
      .string()
      .min(10, t("validation_message_min"))
      .max(1000, t("validation_message_max")),
  });

const Contact = () => {
  const t = useTranslations("Index"); // Initialize the translations
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    try {
      const contactSchema = getContactSchema(t);
      contactSchema.parse(form);
      setErrors({});
      return true;
    } catch (error) {
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("validation_fix_errors"));
      return;
    }

    setLoading(true);

    // Show loading toast
    const loadingToast = toast.loading(t("sending_message"));

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLoading(false);
        toast.dismiss(loadingToast);
        toast.success(t("thankYouMessage"), {
          duration: 5000,
          icon: "🎉",
        });

        setForm({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      setLoading(false);
      console.error('Email sending error:', error);
      toast.dismiss(loadingToast);
      toast.error(error.message || t("errorMessage"), {
        duration: 5000,
        icon: "❌",
      });
    }
  };

  return (
    <>
      <ToasterPortal />
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>{t("getInTouch")}</p>
          <h3 className={styles.sectionHeadText}>{t("contact")}</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("yourName")}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("namePlaceholder")}
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                  errors.name ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors.name}
                </span>
              )}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("yourEmail")}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("emailPlaceholder")}
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors.email}
                </span>
              )}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("yourMessage")}
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("messagePlaceholder")}
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                  errors.message ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors.message}
                </span>
              )}
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary hover:shadow-lg transform hover:scale-105"
              }`}
            >
              {loading ? t("sending") : t("send")}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
