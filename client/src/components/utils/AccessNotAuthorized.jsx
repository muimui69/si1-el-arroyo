
export const AccessNotAuthorized = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Acceso no autorizado</h1>
                    <div className="flex items-center justify-center">
                        <p className="text-custom-green text-xl">
                            Lo siento, no tienes permiso para acceder a esta página.
                        </p>
                    </div>
                </div>
                {/* <div className="flex items-center justify-center">
                    <img className="" src={avatarAuth} alt="Avatar" />
                </div> */}
            </div>
        </>
    );
};
