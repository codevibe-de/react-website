type BodyContainerProps = {
    children: React.ReactNode;
};


export default function BodyContainer({children}: BodyContainerProps) {
    return (
        <>
            <main className="px-8 py-6 lg:px-8 min-h-screen">
                {children}
            </main>
        </>
    );
}