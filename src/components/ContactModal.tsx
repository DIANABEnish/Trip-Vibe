import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md rounded-2xl border-0 shadow-2xl p-0 overflow-hidden">
        {/* Header */}
        <div className="gradient-brand px-6 py-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              Get in Touch
            </DialogTitle>
            <DialogDescription className="text-white/85 text-sm">
              Ready to plan your dream trip? Reach out to us!
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4 space-y-5">
          {/* Quick contact options */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted hover:bg-accent transition-colors"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-medium text-foreground">Call Us</span>
            </a>
            <a
              href="mailto:info@tripvibe.com"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted hover:bg-accent transition-colors"
            >
              <Mail className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-medium text-foreground">Email</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted hover:bg-accent transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-medium text-foreground">WhatsApp</span>
            </a>
          </div>

          <div className="relative flex items-center">
            <div className="flex-1 border-t border-border" />
            <span className="px-3 text-xs text-muted-foreground">or send a message</span>
            <div className="flex-1 border-t border-border" />
          </div>

          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full gradient-brand mx-auto flex items-center justify-center mb-3">
                <Send className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-foreground">Message Sent!</p>
              <p className="text-sm text-muted-foreground mt-1">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                placeholder="Tell us about your dream trip..."
                required
                maxLength={1000}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl gradient-brand text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
