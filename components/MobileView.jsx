import { RiEmotionSadLine } from "react-icons/ri";

export default function MobileView() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center font-poppins">
            <RiEmotionSadLine size={150} className="text-neutral-700 mb-5" />
            <h1 className="text-3xl mb-3">Sorry for the inconvenience</h1>
            <p className="text-xl">The developer is currently <br/> working on a mobile-friendly version</p>
        </div>
    );
}