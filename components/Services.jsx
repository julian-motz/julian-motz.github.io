import { Card } from "./Card"

export const Services = () => {
    return (
        <>
            <div name="section-services" className="h-screen p-20 bg-slate-100">
                <div className="w-70">
                    <div className="my-10">
                        <p className="ml-4 text-left lg:text-6xl font-bold md:text-5xl sm:text-4xl">Services</p>
                    </div>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Card title="DevOps" description="Hi!"/>
                        <Card title="Kubernetes" description="You look"/>
                        <Card title="Software Architecture" description="good!"/>
                    </div>
                </div>
            </div>
        </>
    );
};