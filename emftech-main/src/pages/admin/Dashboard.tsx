import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  LayoutDashboard,
  FileText,
  Star,
  Settings2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/common/SEO';

const AdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const stats = [
    { label: 'Total Leads', value: '48', icon: <MessageSquare size={20} />, color: 'text-blue-500' },
    { label: 'Active Services', value: '10', icon: <Briefcase size={20} />, color: 'text-purple-500' },
    { label: 'Portfolio Items', value: '24', icon: <LayoutDashboard size={20} />, color: 'text-emerald-500' },
    { label: 'Testimonials', value: '15', icon: <Star size={20} />, color: 'text-amber-500' },
  ];

  const sidebarLinks = [
    { name: 'Dashboard', icon: <BarChart3 size={20} />, path: '/admin' },
    { name: 'Services', icon: <Briefcase size={20} />, path: '/admin/services' },
    { name: 'Portfolio', icon: <LayoutDashboard size={20} />, path: '/admin/portfolio' },
    { name: 'Leads', icon: <MessageSquare size={20} />, path: '/admin/leads' },
    { name: 'Blog', icon: <FileText size={20} />, path: '/admin/blog' },
    { name: 'Testimonials', icon: <Star size={20} />, path: '/admin/testimonials' },
    { name: 'Settings', icon: <Settings2 size={20} />, path: '/admin/settings' },
  ];

  return (
    <>
      <SEO title="Admin Console" description="EMFTECH Administrative Command Center" noindex />
      <div className="min-h-screen bg-dark-lighter flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 bg-dark flex flex-col pt-24">
          <nav className="flex-grow px-4 space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  link.name === 'Dashboard' ? 'bg-primary/10 text-primary font-bold' : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-white/5">
            <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg w-full transition-colors">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-bold">Admin <span className="text-primary">Overview</span></h1>
              <div className="flex space-x-4">
                <button className="btn-secondary py-2 px-4 text-sm flex items-center">
                  <Settings size={18} className="mr-2" />
                  Site Settings
                </button>
                <button className="btn-primary py-2 px-4 text-sm">
                  Add New Project
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">+12%</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity Table */}
            <div className="glass-card overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xl font-bold">Recent Leads</h3>
                <Link to="/admin/leads" className="text-primary text-sm font-bold hover:underline">View All</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-xs uppercase tracking-wider text-gray-400">
                    <tr>
                      <th className="px-6 py-4 font-bold">Client</th>
                      <th className="px-6 py-4 font-bold">Service</th>
                      <th className="px-6 py-4 font-bold">Date</th>
                      <th className="px-6 py-4 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { name: 'Ahmed Mohammed', company: 'Riyadh Corp', service: 'AI Automation', date: '2025-05-18', status: 'New' },
                      { name: 'Sara Al-Fahad', company: 'HealthPlus', service: 'Health Tech', date: '2025-05-17', status: 'Read' },
                      { name: 'Ibrahim Khalid', company: 'The Grill', service: 'Restaurant Tech', date: '2025-05-17', status: 'Replied' },
                    ].map((lead, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold">{lead.name}</div>
                          <div className="text-xs text-gray-500">{lead.company}</div>
                        </td>
                        <td className="px-6 py-4 text-sm">{lead.service}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{lead.date}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                            lead.status === 'New' ? 'bg-primary/20 text-primary' : 
                            lead.status === 'Read' ? 'bg-blue-500/20 text-blue-500' : 'bg-emerald-500/20 text-emerald-500'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
