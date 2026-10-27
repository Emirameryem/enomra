import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetailModal from './components/ServiceDetailModal';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickContactFloating from './components/QuickContactFloating';
import QuoteModal from './components/QuoteModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  const handleOpenLegalModal = (type) => {
    setLegalModalType(type);
  };

  const handleCloseLegalModal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="min-h-screen bg-slateDark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-slateDark-950">
      {/* Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6 Core Services from Business Card */}
        <Services 
          onSelectService={handleSelectService}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Corporate Profile / About Us */}
        <AboutUs />

        {/* Why Choose Enomra? */}
        <WhyChooseUs />

        {/* How We Work (Process) */}
        <ProcessSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Success Projects Showcase */}
        <ProjectsShowcase onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact Info from Card & Interactive Form */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Floating Action Button for Quick Contact & WhatsApp */}
      <QuickContactFloating onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={handleCloseServiceModal}
      />

      {/* General Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
      />

      {/* KVKK / Privacy Modal */}
      <LegalModal 
        type={legalModalType}
        onClose={handleCloseLegalModal}
      />
    </div>
  );
}
