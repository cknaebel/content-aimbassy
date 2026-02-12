import { LucideIcon } from 'lucide-react';

interface IconCircleProps {
  icon: LucideIcon;
  color?: 'lavender' | 'mint' | 'peach' | 'coral';
  size?: 'sm' | 'md' | 'lg';
}

const colorClasses = {
  lavender: 'bg-purple-100 text-purple-600',
  mint: 'bg-teal-100 text-teal-600',
  peach: 'bg-orange-100 text-orange-600',
  coral: 'bg-pink-100 text-pink-600',
};

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
};

const iconSizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export function IconCircle({ icon: Icon, color = 'lavender', size = 'md' }: IconCircleProps) {
  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full flex items-center justify-center flex-shrink-0`}>
      <Icon className={iconSizeClasses[size]} />
    </div>
  );
}
