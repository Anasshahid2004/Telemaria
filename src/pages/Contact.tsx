import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contact Section */}
      <main className="flex-1 container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Have questions, feedback, or need support? Fill out the form below or reach us directly at 
          <span className="font-semibold"> support@yourstore.com</span>.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input type="text" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea placeholder="Write your message here..." rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
