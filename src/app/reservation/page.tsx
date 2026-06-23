"use client";

import { useState } from "react";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import FadeUp from "@/components/FadeUp";

const timeOptions = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
];

interface FormData {
  date: string;
  time: string;
  guests: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const initialFormData: FormData = {
  date: "",
  time: "",
  guests: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export default function ReservationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "th">("en");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          guests: parseInt(formData.guests),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.errors
          ? Object.values(err.errors).flat().join(", ")
          : "Failed to submit reservation");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background atmospheric image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwkU7_dCIn4ADkc9wZjMf2FladtWNKpvrQBWIgHRk15PhxEVh7r0NnfEIF36_VdV5qOKjjwCiGKl5ShH84i81hZgUHx-DYpyPGaKOm-cv6zNtAFFo6xWdsqFAbhK0QGoWdKJv9ANcO4EfSfgv718QglUCxRu8dGDwQ8SVwZMf0y97bd89iTedKEuYUO_x1R29WK3C6pU9zhNro198B2JjXINp8VgLTb7gX-9Ywv9d0w6bCaq7kY9GJOG8Ymv0k6QHflLbn45JphZA"
          alt="Restaurant atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141312] via-[#141312]/80 to-[#141312]" />
      </div>

      {/* Main Content */}
      <div className="flex-grow pt-[120px] pb-[120px] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {!submitted ? (
            <>
              {/* Header */}
              <FadeUp className="text-center mb-[80px]">
                <h1 className="font-display text-[72px] leading-[1.1] tracking-[-0.02em] font-bold text-tertiary hidden md:block">
                  Make a Reservation
                </h1>
                <h1 className="font-display text-[48px] leading-[1.2] font-bold text-tertiary md:hidden">
                  Reservation
                </h1>
                <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant max-w-2xl mx-auto">
                  Reserve your table at Koon Kitchen for an unforgettable Thai
                  fusion dining experience. We recommend booking in advance to
                  secure your preferred time.
                </p>
                <div className="w-16 h-px bg-tertiary/50 mx-auto mt-8" />
              </FadeUp>

              {/* Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Left Column: Form */}
                <FadeUp className="lg:col-span-7">
                  <div className="glass-panel p-8 md:p-12 rounded-[0.5rem]">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Form Header */}
                      <h2 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background mb-8 border-b border-white/10 pb-4">
                        <div className="flex justify-between items-center">
                          <span>Booking Details</span>
                          <button
                            type="button"
                            onClick={() =>
                              setLang((l) => (l === "en" ? "th" : "en"))
                            }
                            className="text-[12px] leading-[1] tracking-[0.1em] font-semibold text-tertiary font-body"
                          >
                            {lang === "en" ? "English" : "ไทย"} /{" "}
                            {lang === "en" ? "ไทย" : "English"}
                          </button>
                        </div>
                      </h2>

                      {/* Row 1: Date + Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="float-container">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            className="input-glass w-full py-2 font-body text-[16px]"
                          />
                          <label className="float-label">
                            {lang === "en" ? "Date" : "วันที่"} *
                          </label>
                        </div>
                        <div className="float-container">
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className={`input-glass w-full py-2 font-body text-[16px] ${
                              formData.time === ""
                                ? "text-on-surface/40"
                                : ""
                            }`}
                          >
                            <option value="" disabled hidden>
                              {" "}
                            </option>
                            {timeOptions.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          <label
                            className={`float-label ${
                              formData.time !== ""
                                ? "!top-0 !text-[12px] !text-tertiary !tracking-[0.1em] !font-semibold"
                                : ""
                            }`}
                          >
                            {lang === "en"
                              ? "Time (5:00 PM - 10:30 PM)"
                              : "เวลา (17:00 - 22:30)"}{" "}
                            *
                          </label>
                        </div>
                      </div>

                      {/* Row 2: Guests + Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="float-container">
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                            className={`input-glass w-full py-2 font-body text-[16px] ${
                              formData.guests === ""
                                ? "text-on-surface/40"
                                : ""
                            }`}
                          >
                            <option value="" disabled hidden>
                              {" "}
                            </option>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(
                              (n) => (
                                <option key={n} value={n}>
                                  {n} {n === 1 ? (lang === "en" ? "Guest" : "ท่าน") : (lang === "en" ? "Guests" : "ท่าน")}
                                </option>
                              )
                            )}
                          </select>
                          <label
                            className={`float-label ${
                              formData.guests !== ""
                                ? "!top-0 !text-[12px] !text-tertiary !tracking-[0.1em] !font-semibold"
                                : ""
                            }`}
                          >
                            {lang === "en"
                              ? "Number of Guests"
                              : "จำนวนผู้รับประทาน"}{" "}
                            *
                          </label>
                        </div>
                        <div className="float-container">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            className="input-glass w-full py-2 font-body text-[16px]"
                          />
                          <label className="float-label">
                            {lang === "en" ? "Full Name" : "ชื่อ-นามสกุล"} *
                          </label>
                        </div>
                      </div>

                      {/* Row 3: Phone + Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="float-container">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            className="input-glass w-full py-2 font-body text-[16px]"
                          />
                          <label className="float-label">
                            {lang === "en"
                              ? "Phone Number"
                              : "หมายเลขโทรศัพท์"}{" "}
                            *
                          </label>
                        </div>
                        <div className="float-container">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            className="input-glass w-full py-2 font-body text-[16px]"
                          />
                          <label className="float-label">
                            {lang === "en"
                              ? "Email Address"
                              : "อีเมล"}{" "}
                            *
                          </label>
                        </div>
                      </div>

                      {/* Row 4: Notes */}
                      <div className="float-container">
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder=" "
                          rows={3}
                          className="input-glass w-full py-2 font-body text-[16px] resize-none"
                        />
                        <label className="float-label">
                          {lang === "en"
                            ? "Special Requests / Dietary Requirements (Optional)"
                            : "คำขอพิเศษ / ข้อจำกัดด้านอาหาร (ไม่บังคับ)"}
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 bg-terracotta text-white hover:shadow-[0_0_20px_rgba(199,91,57,0.4)] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:shadow-none disabled:hover:translate-y-0 transition-all duration-300 font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase tracking-widest rounded-[0.125rem] flex items-center justify-center space-x-2"
                      >
                        <span>
                          {submitting
                            ? (lang === "en" ? "Submitting..." : "กำลังส่ง...")
                            : (lang === "en"
                                ? "Confirm Reservation"
                                : "ยืนยันการจอง")}
                        </span>
                        {!submitting && <MaterialIcon name="arrow_forward" className="text-lg" />}
                      </button>
                      {submitError && (
                        <p className="text-error text-[14px] mt-4 text-center">
                          {submitError}
                        </p>
                      )}
                    </form>
                  </div>
                </FadeUp>

                {/* Right Column: Info */}
                <FadeUp className="lg:col-span-5 space-y-8">
                  {/* Opening Hours */}
                  <div className="glass-panel p-8 rounded-[0.5rem]">
                    <div className="flex items-center space-x-3 mb-6">
                      <MaterialIcon
                        name="schedule"
                        className="text-tertiary text-2xl"
                      />
                      <h3 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
                        Opening Hours
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { day: "Tuesday - Sunday", hours: "5:00 PM - 11:00 PM" },
                        { day: "Monday", hours: "Closed" },
                      ].map((item) => (
                        <div
                          key={item.day}
                          className="flex justify-between border-b border-white/5 pb-2"
                        >
                          <span className="font-body text-[16px] text-on-surface-variant">
                            {item.day}
                          </span>
                          <span
                            className={`font-body text-[16px] ${
                              item.hours === "Closed"
                                ? "text-tertiary/80"
                                : "text-on-surface"
                            }`}
                          >
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="glass-panel p-8 rounded-[0.5rem]">
                    <div className="flex items-center space-x-3 mb-6">
                      <MaterialIcon
                        name="location_on"
                        className="text-tertiary text-2xl"
                      />
                      <h3 className="font-display text-[24px] leading-[1.4] font-semibold text-on-background">
                        Location
                      </h3>
                    </div>
                    <p className="font-body text-[16px] leading-[1.6] text-on-surface-variant mb-4">
                      123 Sukhumvit Soi 55, Khlong Toei,
                      <br />
                      Bangkok 10110, Thailand
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[14px] text-tertiary hover:text-tertiary/80 transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Get Directions</span>
                      <MaterialIcon
                        name="arrow_forward"
                        className="text-sm"
                      />
                    </a>
                  </div>

                  {/* Booking Policy */}
                  <div className="glass-panel p-8 rounded-[0.5rem] bg-gradient-to-br from-surface-container-high/50 to-transparent">
                    <h3 className="text-[12px] leading-[1] tracking-[0.1em] font-semibold text-tertiary uppercase font-body mb-4">
                      Booking Policy
                    </h3>
                    <ul className="list-disc list-inside space-y-2 font-body text-[14px] leading-[1.6] text-on-surface-variant">
                      <li>
                        Reservations are held for 15 minutes past the booking
                        time
                      </li>
                      <li>
                        For parties of 6 or more, please contact us directly
                      </li>
                      <li>
                        Cancellations must be made at least 4 hours in advance
                      </li>
                      <li>
                        Special dietary requirements can be accommodated with
                        prior notice
                      </li>
                    </ul>
                  </div>
                </FadeUp>
              </div>
            </>
          ) : (
            /* Success State */
            <FadeUp className="max-w-2xl mx-auto">
              <div className="glass-panel p-12 rounded-[0.5rem] text-center">
                {/* Checkmark */}
                <div className="w-20 h-20 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MaterialIcon
                    name="check_circle"
                    className="text-tertiary text-4xl"
                    filled
                  />
                </div>

                <h2 className="font-display text-4xl font-bold text-on-background mb-4">
                  Reservation Confirmed
                </h2>
                <p className="font-body text-[18px] leading-[1.8] text-on-surface-variant mb-8">
                  Thank you,{" "}
                  <span className="text-tertiary font-semibold">
                    {formData.name}
                  </span>
                  ! Your reservation has been confirmed. We look forward to
                  welcoming you.
                </p>

                {/* Confirmation Details */}
                <div className="glass-panel p-6 rounded-[0.5rem] mb-8 inline-block w-full">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <MaterialIcon
                        name="calendar_today"
                        className="text-tertiary text-xl"
                      />
                      <span className="font-body text-[14px] text-on-surface-variant">
                        Date
                      </span>
                      <span className="font-body text-[16px] font-semibold text-on-surface">
                        {formData.date}
                      </span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <MaterialIcon
                        name="schedule"
                        className="text-tertiary text-xl"
                      />
                      <span className="font-body text-[14px] text-on-surface-variant">
                        Time
                      </span>
                      <span className="font-body text-[16px] font-semibold text-on-surface">
                        {formData.time}
                      </span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <MaterialIcon
                        name="group"
                        className="text-tertiary text-xl"
                      />
                      <span className="font-body text-[14px] text-on-surface-variant">
                        Guests
                      </span>
                      <span className="font-body text-[16px] font-semibold text-on-surface">
                        {formData.guests}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body text-[14px] text-on-surface-variant mb-8">
                  We have received your reservation request. We will confirm your booking at{" "}
                  <span className="text-tertiary">{formData.email}</span>
                </p>

                {/* Make Another Booking */}
                <button
                  onClick={handleReset}
                  className="border border-tertiary text-tertiary hover:bg-tertiary/10 transition-all duration-300 px-8 py-3 rounded-[0.125rem] font-body text-[12px] leading-[1] tracking-[0.1em] font-semibold uppercase"
                >
                  Make Another Booking
                </button>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </div>
  );
}
