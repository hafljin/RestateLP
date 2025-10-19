import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm, { ContactFormProps } from '../ContactForm';

describe('ContactForm', () => {
  const mockSubmit = vi.fn().mockResolvedValue(undefined);
  const properties = ['サンプル物件A', 'サンプル物件B'];

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  it('validates required fields', async () => {
    render(<ContactForm onSubmit={mockSubmit} properties={properties} />);
    fireEvent.click(screen.getByRole('button', { name: '送信' }));
    expect(await screen.findByRole('alert')).toHaveTextContent('必須項目を入力してください');
  });

  it('shows error for invalid email', async () => {
    render(<ContactForm onSubmit={mockSubmit} properties={properties} />);
    fireEvent.change(screen.getByLabelText('名前*'), { target: { value: 'テスト' } });
    fireEvent.change(screen.getByLabelText('メール*'), { target: { value: 'invalid' } });
    fireEvent.change(screen.getByLabelText('メッセージ*'), { target: { value: 'こんにちは' } });
    fireEvent.click(screen.getByRole('button', { name: '送信' }));
    expect(await screen.findByRole('alert')).toHaveTextContent('メールアドレスが不正です');
  });

  it('calls onSubmit and shows success modal', async () => {
    render(<ContactForm onSubmit={mockSubmit} properties={properties} />);
    fireEvent.change(screen.getByLabelText('名前*'), { target: { value: 'テスト' } });
    fireEvent.change(screen.getByLabelText('メール*'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('メッセージ*'), { target: { value: 'こんにちは' } });
    fireEvent.click(screen.getByRole('button', { name: '送信' }));
    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
    expect(await screen.findByRole('dialog')).toHaveTextContent('送信ありがとうございました！');
  });
});
