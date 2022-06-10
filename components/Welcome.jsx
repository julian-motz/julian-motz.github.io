export const Welcome = () => {
    return (
        <>
            <div className="flex-auto align-center text-center text-white">
                <div className='flex justify-center'>
                    <img src="https://bolby-react.vercel.app/images/avatar-1.svg" alt="Bolby" class="mb-4"></img>
                </div>
                <div>
                    <p className="text-4xl">Julian Motz</p>
                    <p className="text-xl p-4"> DevOps | Kubernetes | Cloud Architecture </p>
                </div>
                <div className="p-4">
                    <button className="h-12 w-40 bg-sky-500 hover:bg-sky-400 text-white font-bold border-b-4 border-sky-700 hover:border-sky-500 rounded-full">Contact Me</button>
                </div>
            </div>
        </>
    );
};

export const Welcome2 = () => {
    // const parallax = useParallax({
    //     // easing: 'easeIn',
    //     translateX: [-100, 0, 'ease'],
    //     opacity: [0, 2],
    //     startScroll: 0,
    //     endScroll: 1000

    //     // translateY: [-100, 100, 'easeInOut'],
    //     // scale: [0, 1, 'easeOutBack'],
    // })

    return (
        <>
            <div name="section-welcome" className="h-screen flex align-center bg-slate-100">
                <div className="m-auto text-center text-black">
                    <p className="text-6xl">Julian Motz</p>
                    <p className="text-2xl p-4"> DevOps | Kubernetes | Cloud Architecture </p>
                </div>
            </div>
        </>
    );
};