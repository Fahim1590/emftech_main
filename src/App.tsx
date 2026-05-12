import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

// Auth
import { AuthProvider, useAuth } from './context/AuthContext';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import { Loader2 } from 'lucide-react';

// Lazy Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const QRGeneratorPage = lazy(() => import('./pages/QRGeneratorPage'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

// Loading component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-dark">
    <Loader2 className="animate-spin text-primary" size={48} />
  </div>
);

// 404 Component
const NotFound = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-dark text-center px-4">
    <h1 className="text-9xl font-black text-white mb-4">404</h1>
    <p className="text-gray-500 text-xl mb-8 uppercase tracking-widest font-bold">Protocol Not Found</p>
    <a href="/" className="btn-primary">Return to Base</a>
  </div>
);

// Protected Admin Route
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth(); // Note: This uses our existing AuthContext
  // For admin specifically, you might want a different check, but using isLoggedIn for now
  if (!isLoggedIn) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LayoutWrapper: React.FC<{ children: React.ReactNode, isDarkMode: boolean, toggleDarkMode: () => void }> = ({ children, isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-dark text-cream' : 'bg-primary-light text-dark'}`}>
      <ScrollToTop />
      {!isAdminPage && <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
      <main>
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppButton />}
    </div>
  );
};

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
    localStorage.setItem('i18nextLng', i18n.language);
  }, [i18n.language, i18n]);

  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <LayoutWrapper isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/qr-generator" element={<QRGeneratorPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              
              {/* 404 catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LayoutWrapper>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
