import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { MapPin, Download, Share2, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/common/SEO';

const QRGeneratorPage: React.FC = () => {
  const { isLoggedIn, login } = useAuth();
  const [mapUrl, setMapUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    const { error } = await login(email, password);
    if (error) {
      setAuthError(error);
      setAuthLoading(false);
    }
  };

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'google-maps-qr.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-dark px-4 sm:px-6">
        <SEO title="QR Login" description="Log in to access the EMFTECH Google Maps QR Generator." />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card max-w-md w-full p-6 sm:p-10 border border-white/10"
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-black text-center text-white uppercase tracking-tighter mb-2">Member Access</h2>
          <p className="text-gray-500 text-center text-sm mb-8 font-medium">Please sign in to use the QR Generator.</p>

          {authError && (
            <div className="flex items-center space-x-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-4">
              <AlertCircle size={16} className="flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="USER@INSTITUTION.COM" 
                className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-white text-sm font-bold"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-dark border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-white transition-all text-white text-sm font-bold"
                required
              />
            </div>
            <button type="submit" disabled={authLoading} className="btn-primary w-full text-xs font-black tracking-[0.3em] flex items-center justify-center disabled:opacity-50">
              {authLoading ? <Loader2 size={16} className="animate-spin" /> : 'AUTHORIZE SESSION'}
            </button>
          </form>
          <p className="mt-8 text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">Restricted Feature • EMFTECH Secure Protocol</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-dark">
      <SEO title="Google Maps QR Generator" description="Generate high-fidelity QR codes for your Saudi business location." />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-3/5">
              <div className="mb-12">
                <div className="w-12 h-0.5 bg-primary mb-8"></div>
                <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Deployment Tool</span>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-6">QR COMMAND <br /> <span className="text-gray-500">GENERATOR</span></h1>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                  Generate high-fidelity Google Maps QR codes for your physical locations. Perfect for restaurants, clinics, and corporate offices across the Kingdom.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Google Maps URL</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input 
                      type="text" 
                      value={mapUrl}
                      onChange={(e) => setMapUrl(e.target.value)}
                      placeholder="https://maps.google.com/..." 
                      className="w-full bg-dark border border-white/10 rounded-lg pl-12 pr-6 py-4 focus:outline-none focus:border-white transition-all text-white text-sm font-bold"
                    />
                  </div>
                  <p className="text-[10px] text-gray-700 font-bold uppercase tracking-wider">Paste the full sharing link from Google Maps</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/5">
              <div className="glass-card p-10 flex flex-col items-center border border-white/10 sticky top-32">
                <div className="bg-white p-6 rounded-2xl mb-8 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  {mapUrl ? (
                    <QRCodeSVG 
                      id="qr-code-svg"
                      value={mapUrl} 
                      size={200} 
                      level="H" 
                      includeMargin={false}
                    />
                  ) : (
                    <div className="w-[200px] h-[200px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
                      <p className="text-gray-400 text-[10px] font-black uppercase text-center tracking-widest p-4">Waiting for Target URL</p>
                    </div>
                  )}
                </div>
                
                <div className="w-full space-y-4">
                  <button 
                    onClick={downloadQR}
                    disabled={!mapUrl}
                    className="w-full btn-primary flex items-center justify-center text-[10px] font-black tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Download size={16} className="mr-3" />
                    DOWNLOAD PNG
                  </button>
                  <button 
                    disabled={!mapUrl}
                    className="w-full btn-secondary flex items-center justify-center text-[10px] font-black tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Share2 size={16} className="mr-3" />
                    SHARE PROTOCOL
                  </button>
                </div>
                <div className="mt-10 pt-8 border-t border-white/5 w-full text-center">
                  <span className="text-[9px] font-black text-gray-700 tracking-[0.3em] uppercase">Status: Secure Generation Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGeneratorPage;
