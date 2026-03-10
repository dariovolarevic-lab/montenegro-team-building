import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { HiMail } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote for Team Building in Montenegro",
  description:
    "Contact Montenegro Team Building for a free quote. Tell us your group size, preferred dates and activities. We organise team building events in Kotor, Budva, Podgorica and across Montenegro.",
  keywords: [
    "contact Montenegro Team Building",
    "team building quote Montenegro",
    "corporate event enquiry Montenegro",
  ],
  alternates: {
    canonical: "https://www.montenegroteambuilding.com/contact",
  },
  openGraph: {
    title: "Contact Us — Get a Quote for Team Building in Montenegro",
    description:
      "Contact us for a free team building quote. Events in Kotor, Budva, Podgorica and across Montenegro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Montenegro Team Building",
    description:
      "Contact us for a free team building quote. Events in Kotor, Budva, Podgorica and across Montenegro.",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Don't forget the date, group size, and other details"
        compact
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-5 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  To find more about our services or to send us your enquiry,
                  please fill in the form and click submit. Alternatively, you
                  can reach us directly:
                </p>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <HiMail className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href="mailto:info@montenegroteambuilding.com"
                      className="font-medium hover:text-amber-600 transition-colors"
                    >
                      info@montenegroteambuilding.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-80">
                <iframe
                  title="Montenegro Team Building Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11871.099858470127!2d18.76!3d42.4247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3309b0c3e2a7%3A0x58e9b3a5f4e8b7a3!2sKotor%2C%20Montenegro!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
