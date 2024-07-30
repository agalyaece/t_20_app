

export default function Hero() {
    return (
        <div className="w-full h-screen">
            <img
                src="https://images.unsplash.com/photo-1623051783741-b9bab2ef3933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cricket stadium image"
                className="w-full h-screen object-cover"
            />

            <div className="max-w-[1240px] m-auto">
                <div className="absolute top-0 w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white items-center  justify-center p-4 mt-50px">
                    <h1 className="font-bold text-4xl ">Find Teams for your favourite sports </h1>
                    <h2 className="text-3xl py-4 italic ">With Cricketer&apos;s Performance Analyzer</h2>
                </div>
            </div>
        </div>
    )
}
