import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { CONTACT } from "../constants"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle") // idle, success, error

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this Access Key with your actual Web3Forms API Key
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          ...formData,
        }),
      })

      if (response.status === 200) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000) // Reset status after 5s
    }
  }

  return (
    <div className="pb-20 lg:pb-36 pt-16" id="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold tracking-tighter lg:text-5xl"
      >
        Let&apos;s Connect
      </motion.h2>

      <div className="mx-auto max-w-5xl flex flex-col items-start gap-12 lg:flex-row">
        {/* Contact Info Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col gap-6 lg:w-1/3"
        >
          <p className="text-zinc-400 leading-relaxed mb-4 text-lg">
            Ready to start a project or have a question? Let&apos;s talk about
            how we can work together to build something amazing.
          </p>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 transition-colors hover:border-zinc-700">
            <div className="p-3 bg-zinc-800 rounded-full shrink-0">
              <Mail className="w-6 h-6 text-zinc-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 font-medium">Email</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg text-zinc-300 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 transition-colors hover:border-zinc-700">
            <div className="p-3 bg-zinc-800 rounded-full shrink-0">
              <Phone className="w-6 h-6 text-zinc-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 font-medium">Phone</span>
              <a
                href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`}
                className="text-lg text-zinc-300 hover:text-white transition-colors"
              >
                {CONTACT.phoneNo}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 transition-colors hover:border-zinc-700">
            <div className="p-3 bg-zinc-800 rounded-full shrink-0">
              <MapPin className="w-6 h-6 text-zinc-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 font-medium">
                Location
              </span>
              <p className="text-lg text-zinc-300">{CONTACT.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-xl"
          >
            <div className="flex flex-col gap-6 md:flex-row md:gap-4">
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-300 outline-none transition-all focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-300 outline-none transition-all focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-zinc-400"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-300 outline-none transition-all focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                placeholder="How can I help you?"
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-400"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-300 outline-none transition-all focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-200 px-6 py-4 text-base font-semibold text-zinc-900 transition-all hover:bg-white hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 sm:w-auto sm:self-end mt-2"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-900 border-t-transparent"></div>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-1" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm mt-2 text-right">
                Your message has been sent successfully! I will get back to you
                soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm mt-2 text-right">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
