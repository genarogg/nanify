import { ToastOptions } from 'react-toastify';

interface ToastProps {
    type: 'success' | 'error' | 'warning';
    message: string;
    config?: Partial<ToastOptions>;
}
declare const notify: ({ type, message, config }: ToastProps) => void;

export { notify as default };
