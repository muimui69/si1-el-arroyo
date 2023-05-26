import { Ring } from '@uiball/loaders';

export const LoadingLayout = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <Ring
                size={55}
                speed={0.8}
                color="black"
            />
        </div>
    )
}