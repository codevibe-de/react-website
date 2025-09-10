type BodyContainerProps = {
    children: React.ReactNode;
};


export default function BodyContainer({children}: BodyContainerProps) {
    return (
        <>
            <main className="px-6 lg:px-8 py-12 min-h-screen">
                {children}
            </main>
        </>
    );
}