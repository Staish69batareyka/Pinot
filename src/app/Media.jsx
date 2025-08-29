import Image from "next/image";

export default function Media({ src, alt = "", className = "" }) {
    if (!src) return null;

    const path = typeof src === "string" ? src : src?.src;

    const isVideo = path?.match(/\.(mp4|mov|webm)$/i);
    const isGif = path?.endsWith(".gif");
    const isImage = path?.match(/\.(png|jpg|jpeg|webp|svg|gif)$/i);

    if (isVideo) {
        return (
            <video src={path} autoPlay loop muted playsInline className={className} />
        );
    }

    if (isGif) {
        return <img src={path} alt={alt} className={className} />;
    }

    if (isImage) {
        return <Image src={path} alt={alt} fill className={className} sizes="100vw" />;
    }

    return <p>Неверный формат</p>;
}
