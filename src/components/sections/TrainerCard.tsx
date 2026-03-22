'use client';

import Image from 'next/image';
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
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
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
