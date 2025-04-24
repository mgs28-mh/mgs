'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Ganti dengan API endpoint Anda
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nama Lengkap
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Nama wajib diisi' })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Alamat Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email wajib diisi',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email tidak valid',
            },
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nomor Telepon
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            pattern: {
              value: /^[0-9+ ]+$/,
              message: 'Nomor telepon tidak valid',
            },
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
            errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Pesan Anda
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Pesan wajib diisi' })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-70"
      >
        {isSubmitting ? (
          'Mengirim...'
        ) : (
          <>
            <FiSend /> Kirim Pesan
          </>
        )}
      </button>
    </form>
  );
}