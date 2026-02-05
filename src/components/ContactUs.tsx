import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { useState } from "react";
import Button from "./custom/Button";
import { useFormValidation, type FormValues } from "../lib/formValidation";
import { useRef } from "react";
import Input from "./custom/Input";

const ContactUs: React.FC = () => {
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const initialForm: FormValues = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState<FormValues>(initialForm);
  const [loading, setLoading] = useState(false);
  const { validate } = useFormValidation(refs);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(form)) return;
    if (loading) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "5407eda7-a3b9-4ad2-afc7-32bacc917ad1");
    formData.append("subject", "Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setLoading(false);
      const data = await response.json();
      if (data.success) {
        setForm(initialForm);
        toast.success("Thank you for submission!");
        // e.currentTarget.reset();
        if (e.currentTarget && typeof e.currentTarget.reset === "function") {
          e.currentTarget.reset();
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  // setLoading(true);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
      xl:px-40 pt-20 text-gray-700 dark:text-white"
    >
      <div className="relative text-center">
        <Title
          title="Reach out to us"
          desc="Ready to grow your brand? Let connect and build something exceptional together."
        />
      </div>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 w-full max-w-2xl"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person_icon" />
            <Input
              name="name"
              ref={refs.name}
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              placeholder="Enter your name"
              className="p-3 text-sm outline-none"
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email_icon" />
            <Input
              name="email"
              ref={refs.email}
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="Enter your email"
              className=" p-3 text-sm outline-none"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={5}
            ref={refs.message}
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            placeholder="Enter your message"
          />
        </div>
        <Button
          type="submit"
          loading={loading}
          className="bg-primary w-max min-w-[130px] text-white px-4 py-2 rounded-full hover:scale-103"
        >
          Submit <img src={assets.arrow_icon} alt="submit" width={14} />
        </Button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
