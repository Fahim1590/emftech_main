import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../../utils/supabase';

const Contact: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    // Note: You must create a 'leads' table in Supabase first
    const { error } = await supabase.from('leads').insert([data]);

    setLoading(false);
    if (!error) {
      setSubmitted(true);
    } else {
      alert("Submission failed. Ensure your Supabase table 'leads' exists.");
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-dark flex items-center justify-center min-h-[600px]">
        <motion.div initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} className="text-center p-12 glass-card">
          <CheckCircle2 size={64} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Transmission Received</h2>
          <p className="text-gray-500 mb-8">Our team will contact your institution shortly.</p>
          <button onClick={() => setSubmitted(false)} className="btn-secondary text-[10px] font-black tracking-widest">SEND ANOTHER BRIEFING</button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Get In <span className="text-gray-600">Touch</span></h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg text-primary border border-white/5"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-widest">Riyadh HQ</h4>
                    <p className="text-gray-500 text-sm">2054 King Abdulaziz Rd, Riyadh 12643</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg text-primary border border-white/5"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-widest">Call Protocol</h4>
                    <p className="text-gray-500 text-sm">+966 530 350 659</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg text-primary border border-white/5"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-widest">Direct Secure Mail</h4>
                    <p className="text-gray-500 text-sm">irobiul159@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="rounded-2xl border border-white/5 bg-dark-lighter p-8 md:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input name="name" type="text" required placeholder="NAME" className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-gray-800 text-sm font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Company</label>
                    <input name="company" type="text" required placeholder="INSTITUTION" className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-gray-800 text-sm font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email</label>
                    <input name="email" type="email" required placeholder="IDENTIFIER@EMAIL.COM" className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-gray-800 text-sm font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Phone</label>
                    <input name="phone" type="tel" required placeholder="+966" className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-gray-800 text-sm font-bold" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Protocol Required</label>
                    <select name="service" className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-gray-500 text-sm font-bold appearance-none">
                      <option>AI Automation Protocol</option>
                      <option>ERP Central Command</option>
                      <option>CRM Logistics</option>
                      <option>Health Tech Integration</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Briefing</label>
                    <textarea name="message" rows={4} required placeholder="DESCRIBE THE MISSION" className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all resize-none text-white placeholder:text-gray-800 text-sm font-bold"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center text-xs font-black tracking-[0.3em] disabled:opacity-50">
                      {loading ? <Loader2 className="animate-spin" size={18} /> : "INITIATE CONTACT"}
                      {!loading && <Send size={16} className="ml-3" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
