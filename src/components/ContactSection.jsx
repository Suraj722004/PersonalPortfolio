import { useState, useEffect } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "../pages/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "df7c1ac7-92b5-4036-b935-cf73f4eeb1cc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent! Thank you for your message. I'll get back to you soon.");
        e.target.reset();
      } else {
        alert(`Submission failed: ${data.message || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-center text-white text-4xl font-bold">
          <span className="text-blue-500">Get</span> In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="reveal">
          <p className="text-slate mb-8">
  I'm a passionate and motivated fresher eager to explore new opportunities in the tech industry. 
  If you have any questions, collaboration ideas, or just want to connect, feel free to reach out. 
  I'm excited to learn and grow!
</p>


            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center text-white hover:text-highlight transition-colors duration-300"
              >
                <Mail className="mr-3 text-highlight" size={20} />
                <span>surajbaghel722004@gmail.com</span>
              </a>

              <a
                href="https://github.com/Suraj722004"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-white hover:text-highlight transition-colors duration-300"
              >
                <FaGithub className="mr-3 text-highlight" size={20} />
                <span>https://github.com/Suraj722004</span>
              </a>

              <a
                href="https://www.linkedin.com/in/surajbaghelkalyan/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-white hover:text-highlight transition-colors duration-300"
              >
                <FaLinkedin className="mr-3 text-highlight" size={20} />
                <span>https://www.linkedin.com/in/surajbaghelkalyan/</span>
              </a>
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="New message from portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div>
                <label htmlFor="name" className="text-white block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="bg-highlight text-navy hover:bg-highlight/80 w-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
