interface BadgeProps {
    children: React.ReactNode;
    color?: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray';
}

const colorClasses = {
    red: 'bg-red-50 text-red-700 inset-ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:inset-ring-red-400/20',
    blue: 'bg-blue-50 text-blue-700 inset-ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/20',
    green: 'bg-green-50 text-green-700 inset-ring-green-600/10 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-400/20',
    yellow: 'bg-yellow-50 text-yellow-700 inset-ring-yellow-600/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:inset-ring-yellow-400/20',
    purple: 'bg-purple-50 text-purple-700 inset-ring-purple-600/10 dark:bg-purple-400/10 dark:text-purple-400 dark:inset-ring-purple-400/20',
    gray: 'bg-gray-50 text-gray-700 inset-ring-gray-600/10 dark:bg-gray-400/10 dark:text-gray-400 dark:inset-ring-gray-400/20'
};

export default function Badge({ children, color = 'red' }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium inset-ring ${colorClasses[color]}`}>
            {children}
        </span>
    )
}
