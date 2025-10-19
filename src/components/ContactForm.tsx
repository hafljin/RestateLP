import React, { useState } from 'react';

export interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
    property?: string;
    phone?: string;
  }) => Promise<void>;
  properties: string[];
  recaptcha?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, properties, recaptcha }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '', property: '', phone: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    if (!form.name || !form.email || !form.message) return '必須項目を入力してください';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'メールアドレスが不正です';
    return '';
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setError('');
    await onSubmit(form);
    setSuccess(true);
  };
  if (success) return <div role="dialog" aria-modal="true" className="p-8 text-center">送信ありがとうございました！</div>;
  return (
    <form className="bg-white rounded shadow p-6 max-w-md mx-auto" onSubmit={handleSubmit} aria-label="お問い合わせフォーム">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">名前*</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required aria-required="true" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">メール*</label>
        <input id="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required aria-required="true" type="email" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">電話番号</label>
        <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" type="tel" />
      </div>
      <div className="mb-4">
        <label htmlFor="property" className="block mb-1">物件選択</label>
        <select id="property" name="property" value={form.property} onChange={handleChange} className="w-full border rounded px-3 py-2">
          <option value="">選択してください</option>
          {properties.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">メッセージ*</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2" required aria-required="true" />
      </div>
      {error && <div className="text-red-500 mb-2" role="alert">{error}</div>}
      {recaptcha && (
        <div className="mb-4 text-center">
          {/* ダミーreCAPTCHA */}
          <span className="inline-block bg-gray-200 px-4 py-2 rounded">[reCAPTCHA]</span>
        </div>
      )}
      <button type="submit" className="bg-main text-white px-6 py-2 rounded w-full">送信</button>
    </form>
  );
};

ContactForm.displayName = 'ContactForm';
export default ContactForm;
