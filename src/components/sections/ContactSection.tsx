"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { CodeLine } from "@/components/ui/CodeLine";
import { RenderBlock } from "@/components/ui/RenderBlock";
import { Button } from "@/components/ui/Button";
import { Keyword, Type, Method, Comment } from "@/components/ui/SyntaxTokens";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { personal } from "@/data/personal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputClass =
    "bg-surface-2 border border-border px-3.5 py-3 font-mono text-[13px] text-text rounded-[3px] outline-none focus:border-mauve transition-colors";

  return (
    <section id="contact" className="py-6 pr-4 sm:pr-12">
      <CodeBlock>
        <CodeLine lineNumber={30}>
          <Comment>// --- Contact ---</Comment>
        </CodeLine>
        <CodeLine lineNumber={31}>
          <Keyword>public async Task</Keyword>&lt;<Type>Response</Type>&gt;{" "}
          <Method>SendMessage</Method>(<Type>ContactForm</Type> form)
        </CodeLine>
        <CodeLine lineNumber={32}>{"{"}</CodeLine>
      </CodeBlock>

      <RenderBlock>
        <FadeInWhenVisible>
          <div className="bg-surface border border-border p-8 sm:p-12 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-2xl sm:text-[28px] font-semibold mb-3">
                  Let&apos;s Connect
                </h2>
                <p className="text-sm text-text-dim leading-relaxed mb-6">
                  Have a project in mind or just want to talk code? I&apos;m
                  always up for a conversation about .NET, database systems,
                  or your next big idea.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-mono text-[13px] text-blue no-underline flex items-center gap-2 hover:text-mauve transition-colors"
                  >
                    &#9993; {personal.email}
                  </a>
                  <a
                    href={`https://${personal.github}`}
                    className="font-mono text-[13px] text-blue no-underline flex items-center gap-2 hover:text-mauve transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &#9741; {personal.github}
                  </a>
                  <a
                    href={`https://${personal.linkedin}`}
                    className="font-mono text-[13px] text-blue no-underline flex items-center gap-2 hover:text-mauve transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &#128101; {personal.linkedin}
                  </a>
                  <span className="font-mono text-[13px] text-blue flex items-center gap-2">
                    &#127760; {personal.location}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClass + " w-full"}
                  />
                  {errors.name && (
                    <p className="text-red text-[11px] font-mono mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClass + " w-full"}
                  />
                  {errors.email && (
                    <p className="text-red text-[11px] font-mono mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={inputClass}
                />
                <div>
                  <textarea
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={inputClass + " w-full min-h-[100px] resize-y"}
                  />
                  {errors.message && (
                    <p className="text-red text-[11px] font-mono mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-mono text-[13px] text-green text-center py-3 border border-green/30 rounded-[3px] bg-green/5"
                    >
                      Message sent successfully!
                    </motion.div>
                  ) : (
                    <motion.div key="button" exit={{ opacity: 0 }}>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.span
                            animate={{ opacity: [0.5, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </FadeInWhenVisible>
      </RenderBlock>

      <CodeBlock>
        <CodeLine lineNumber={33}>{"}"}</CodeLine>
      </CodeBlock>
    </section>
  );
}
