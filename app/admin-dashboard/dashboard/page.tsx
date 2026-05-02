"use client";

import React, { useState, useRef } from 'react';
import { UserPlus, Users, Image as ImageIcon, Link as LinkIcon, Mail, Building, PlusCircle, Upload, X, Trash2 } from 'lucide-react';
import Header from "@/component/landing-page/header";
import Footer from "@/component/landing-page/footer";
import Link from 'next/link';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'speakers' | 'team'>('speakers');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/admin-dashboard';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    email: '',
    linkedinUrl: ''
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      setMessage({ type: 'error', text: 'Please select an image' });
      return;
    }

    if (!formData.name || !formData.role) {
      setMessage({ type: 'error', text: 'Name and role are required' });
      return;
    }

    if (activeTab === 'speakers' && !formData.organization) {
      setMessage({ type: 'error', text: 'Organization is required for speakers' });
      return;
    }

    if (activeTab === 'team' && !formData.email) {
      setMessage({ type: 'error', text: 'Email is required for team members' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('role', formData.role);
      submitData.append('image', selectedImage);
      
      if (activeTab === 'speakers') {
        submitData.append('organization', formData.organization);
      } else {
        submitData.append('email', formData.email);
        submitData.append('linkedinUrl', formData.linkedinUrl);
      }

      const response = await fetch(
        `/api/${activeTab === 'speakers' ? 'speakers' : 'team'}`,
        {
          method: 'POST',
          body: submitData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: result.message });
        // Reset form
        setFormData({
          name: '',
          role: '',
          organization: '',
          email: '',
          linkedinUrl: ''
        });
        removeImage();
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafa]">
      <main className="flex-grow py-12 lg:px-30">
        <div className="container mx-auto max-w-4xl px-4">
          
          <div className="mb-10 items-center justify-between">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-black text-black">Management Dashboard</h1>
              <p className="mt-2 text-zinc-500 font-medium">Update public records for Speakers and Team Members.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => { setActiveTab('speakers'); removeImage(); }}
              className={`flex items-center cursor-pointer gap-2 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === 'speakers' 
                ? 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20' 
                : 'bg-white text-zinc-500 hover:bg-zinc-100'
              }`}
            >
              <UserPlus size={18} /> Add Speaker
            </button>
            <button
              onClick={() => { setActiveTab('team'); removeImage(); }}
              className={`flex items-center cursor-pointer gap-2 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === 'team' 
                ? 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20' 
                : 'bg-white text-zinc-500 hover:bg-zinc-100'
              }`}
            >
              <Users size={18} />Add Team Member
            </button>
            <Link href="/admin-dashboard/delete">
              <button className="flex items-center cursor-pointer gap-2 rounded-xl px-4 py-3 font-bold bg-red-50 text-red-600 hover:bg-red-100 transition-all">
                <Trash2 size={18} /> Manage/Delete
              </button>
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex items-center cursor-pointer gap-2 rounded-xl bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-600 transition-colors"
            >
              <Trash2 size={16} />
              Logout
            </button>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl border border-zinc-100 lg:p-12">
            
            {/* Message Display */}
            {message && (
              <div className={`mb-6 p-4 rounded-xl font-medium ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <PlusCircle className="text-[#25D366]" />
                  <h2 className="text-2xl font-bold text-black">
                    {activeTab === 'speakers' ? 'Speaker Details' : 'Team Member Details'}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]">
                        <Users size={16}/>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-zinc-900 outline-none transition-all focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Role / Title</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]">
                        <Building size={16}/>
                      </div>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g. CEO at TechCorp"
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-zinc-900 outline-none transition-all focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                      />
                    </div>
                  </div>
                  
                  {activeTab === 'speakers' && (
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Organization</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]">
                          <Building size={16}/>
                        </div>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="e.g. Google Nigeria"
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-zinc-900 outline-none transition-all focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'team' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]">
                            <Mail size={16}/>
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jane@startupabuja.com"
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-zinc-900 outline-none transition-all focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">LinkedIn Profile URL</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]">
                            <LinkIcon size={16}/>
                          </div>
                          <input
                            type="text"
                            name="linkedinUrl"
                            value={formData.linkedinUrl}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-zinc-900 outline-none transition-all focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
                          />
                        </div>
                      </div>
                    </>
                  )}

                {/* File Upload Section */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Profile Photo</label>
                  {!previewUrl ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50 cursor-pointer hover:bg-zinc-100 hover:border-[#25D366] transition-all group">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="text-zinc-400 group-hover:text-[#25D366] mb-2" size={24} />
                        <p className="text-sm text-zinc-500 font-medium">Click to upload photo</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                    </label>
                  ) : (
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                      <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
                      <button 
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                </div>
              </div>

              <div className="mt-12">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer rounded-xl bg-black py-4 text-lg font-black text-white transition-transform hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Uploading...' : 'Upload to Website'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const InputGroup = ({ label, icon, placeholder }: { label: string, icon: React.ReactNode, placeholder: string }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-zinc-900 outline-none transition-all focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/10"
      />
    </div>
  </div>
);

export default AdminDashboard;