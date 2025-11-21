import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// In your store file
interface BookingData {
    hallName: string;
    days: number;
    pricePerDay: number;
    charges: number;
    total: number;
    name: string;
    phone: string;
    baseAmount: number;
    discount: number;
    bookingId: string;
    accountNumber: string;
    bankName: string;
    accountName: string;
    fromDate: string; // Add this
    toDate: string;   // Add this
    transactionReference: string;
}

interface BookingStore {
    bookingData: BookingData | null;
    setBookingData: (data: BookingData) => void;
    clearBookingData: () => void;
    getBookingData: () => BookingData | null;
}

export const useBookingStore = create<BookingStore>()(
    persist(
        (set, get) => ({
            bookingData: null,
            setBookingData: (data: BookingData) => set({ bookingData: data }),
            clearBookingData: () => set({ bookingData: null }),
            getBookingData: () => get().bookingData,
        }),
        {
            name: 'booking-storage',
        }
    )
);

// In your store file
interface ConfirmData {
    hallName: string;
    days: number;
    total: number;
    baseAmount: number;
    discount: number;
    fromDate: string;
    toDate: string;
    charges: number;
    status?: string;  // Add this
    transactionReference?: string;  // Add this
}

interface ConfirmStore {
    confirmData: ConfirmData | null;
    setConfirmData: (data: ConfirmData) => void;
}

export const useConfirmStore = create<ConfirmStore>()(
    persist(
        (set, get) => ({
            confirmData: null,
            setConfirmData: (data: ConfirmData) => set({ confirmData: data }),
        }),
        {
            name: 'confirm-storage',
        }
    )
);