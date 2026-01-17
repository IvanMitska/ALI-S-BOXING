'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface TrainerCardProps {
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export function TrainerCard({ name, role, image, specialties }: TrainerCardProps) {
  return (
    <Card className="overflow-hidden group" hover={false}>
      <div className="relative h-80 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-gray-300 text-sm mb-3">{role}</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="brand" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
