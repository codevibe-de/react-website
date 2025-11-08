interface BadgeProps {
    children: React.ReactNode;
    color?: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray';
}

const colorClasses = {
    red: 'bg-red-100 text-red-700 inset-ring-red-600/20',
    blue: 'bg-blue-100 text-blue-700 inset-ring-blue-600/20',
    green: 'bg-green-100 text-green-700 inset-ring-green-600/20',
    yellow: 'bg-yellow-100 text-yellow-700 inset-ring-yellow-600/20',
    purple: 'bg-purple-100 text-purple-700 inset-ring-purple-600/20',
    gray: 'bg-gray-100 text-gray-700 inset-ring-gray-600/20'
};

export default function Badge({children, color = 'red'}: BadgeProps) {
    return (
        <span
            className={`mr-1 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium inset-ring ${colorClasses[color]}`}>
            {children}
        </span>
    )
}
