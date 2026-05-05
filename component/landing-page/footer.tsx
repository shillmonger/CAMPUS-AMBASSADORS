"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

export default function Footer() {
  const quickLinks = [
    { name: "Our Team", href: "/landing-page/team" },
    { name: "Who we are", href: "/landing-page/who-we-are" },
    // { name: "Top Program", href: "/landing-page/innovation-challenge" },
    { name: "Protected Route", href: "/admin-dashboard/dashboard" },
  ];

  const contactInfo = [
    { icon: Phone, value: "+2349164600423" },
    { icon: Mail, value: "info@campusambassador.com.ng" },
    { icon: MapPin, value: "Plot 481 Obafemi Awolowo way, Abuja." },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: "#" },
    { icon: FaFacebook, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaTelegram, href: "#" },
    { icon: FaLinkedin, href: "#" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-15 md:grid-cols-2 xl:grid-cols-4">
          
          {/* About Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
             <div className="relative h-30 w-100 rounded-xl overflow-hidden">
  <Image
    src="https://i.postimg.cc/SNfnC3yf/logo.jpg"
    alt="Startup Abuja Logo"
    fill
    className="object-contain"
  />
</div>
            </Link>
            <p className="text-lg leading-relaxed text-zinc-300">
              Campus Ambassador Community is the premier platform dedicated to fostering innovation, entrepreneurship, and economic growth in Africa.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold tracking-tight text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-300 transition-colors hover:text-[#25D366]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold tracking-tight text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm text-zinc-300">
                  <item.icon className="h-5 w-5 text-[#25D366]" />
                  <span className="flex-1 leading-relaxed">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold tracking-tight text-white">NewsLetter</h4>
            <p className="text-lg leading-relaxed text-zinc-300">
              Subscribe to our newsletter to get firsthand opportunities on conferences and other important Events
            </p>
            <form className="mt-2 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full rounded-lg border border-white/20 bg-zinc-900 p-3 text-sm text-white placeholder-zinc-500 focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
              <button
                type="submit"
                className="w-full rounded-lg cursor-pointer bg-[#25D366] p-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-zinc-400">
              © 2026 Campus Ambassador. All rights Reserved
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-zinc-400 transition-colors hover:text-[#25D366]">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhatsAppFloatingButton />
    </footer>
  );
}