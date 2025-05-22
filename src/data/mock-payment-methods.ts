
import { PaymentMethod } from '@/types';

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 'pm-001',
    cardNumber: '•••• •••• •••• 4242',
    cardHolder: 'محمد أحمد',
    expiryDate: '12/25',
    isDefault: true,
  },
  {
    id: 'pm-002',
    cardNumber: '•••• •••• •••• 5678',
    cardHolder: 'محمد أحمد',
    expiryDate: '08/24',
    isDefault: false,
  },
];
