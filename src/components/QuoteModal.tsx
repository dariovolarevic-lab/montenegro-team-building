"use client";

import { useState } from "react";
import { HiX } from "react-icons/hi";

const activityOptions = [
  "Montenegro Scavenger Hunt",
  "Create a Movie",
  "Classical Treasure Hunt",
];

interface Props {
  onClose: () => void;
}

export default function QuoteModal({ onClose }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    activity: "",
    groupSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        subject: `Quote request - ${form.activity || "General"}`,
        message: `Company: ${form.company}\nGroup Size: ${form.groupSize}\nActivity: ${form.activity}\n\n${form.message}`,
      }),
    });
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-900 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-700 transition-colors"
        >
          <HiX size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">
              We&apos;ll get back to you with a proposal very soon.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
              Send us an enquiry
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              The Montenegro Team Building Team would love to hear from you! Please
              fill out the form below and you can expect to hear from us very soon
              with a proposal!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <span className="text-xs text-gray-400">First</span>
                  </div>
                  <div>
                    <input
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <span className="text-xs text-gray-400">Last</span>
                  </div>
                </div>
              </div>

              {/* Email + Company */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Activity + Group Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Team Building Activity
                  </label>
                  <select
                    name="activity"
                    value={form.activity}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-auto"
                  >
                    <option value="" disabled hidden>Select activity</option>
                    {activityOptions.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Group Size
                  </label>
                  <input
                    name="groupSize"
                    value={form.groupSize}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors uppercase tracking-wider text-sm"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
