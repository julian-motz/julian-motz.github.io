import { Parallax, useParallax } from 'react-scroll-parallax';

export const Welcome = () => {
    return (
        <>
            <div name="section-welcome" className="h-screen flex align-center bg-slate-900">
                <div className="m-auto text-center text-white">
                    <p className="text-6xl">Julian Motz</p>
                    <p className="text-2xl p-4"> DevOps | Kubernetes | Cloud Architecture </p>
                </div>
            </div>
        </>
    );
};

export const Welcome2 = () => {
    const parallax = useParallax({
        // easing: 'easeIn',
        translateX: [-100, 0, 'ease'],
        opacity: [0, 2],
        startScroll: 0,
        endScroll: 1000
        
        // translateY: [-100, 100, 'easeInOut'],
        // scale: [0, 1, 'easeOutBack'],
    })

    

    return (
        <>
            <div name="section-welcome" className="h-screen flex align-center bg-slate-100">
                    <div  ref={parallax.ref} className="m-auto text-center text-black">
                        <p className="text-6xl">Julian Motz</p>
                        <p className="text-2xl p-4"> DevOps | Kubernetes | Cloud Architecture </p>

                    </div>
                
            </div>
        </>
    );
};