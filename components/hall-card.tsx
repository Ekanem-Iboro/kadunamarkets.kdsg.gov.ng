'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Hall } from './lib/types';
import { Button } from './ui/button';
import { formatCurrency } from './lib/format-currency';

interface HallCardProps {
  hall: Hall;
  onBook: (hall: Hall) => void;
  index: number;
}

export function HallCard({ hall, onBook, index }: HallCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={hall.image}
            alt={hall.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 right-4 bg-[#2980B9] text-white px-3 py-1 rounded-full text-sm font-medium">
            Premium
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-2xl text-[#2C3E50]">{hall.name}</CardTitle>
          <CardDescription className="text-base">{hall.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#2C3E50]">
              {/* <DollarSign className="h-5 w-5 text-[#2980B9]" /> */}
              <span className="h-5 w-5 text-[#2980B9] font-semibold text-[25px]" >#</span>
              <div>
                <p className="text-sm text-gray-500">Price per day</p>
                <p className="text-xl font-bold">{formatCurrency(hall.pricePerDay)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#2C3E50]">
              <MapPin className="h-5 w-5 text-[#5DADE2]" />
              <div>
                <p className="text-sm text-gray-500">Booking fee</p>
                <p className="text-lg font-semibold">{formatCurrency(hall.chargesFee)}</p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={() => onBook(hall)}
            className="w-full bg-[#2980B9] hover:bg-[#5DADE2] text-white font-semibold py-6 text-lg transition-all duration-300"
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
