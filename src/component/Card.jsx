import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const Card = ({ imageSrc, title, description, link }) => {
    return (
        <motion.div 
        initial={ { opacity: 0, y:50 } }
        animate={ { opacity: 1, y:0} }
        transition={ { duration: 0.5, ease: "easeOut" } }
        whileHover={ { scale: 1.05 }}
        className="bg-white shadow-lg rounded-lg p-6 txt-center"
        >
            <div className="relative w-full h-60 mb-4">
            <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" 
            />
            </div>
            <h3 className="text-xl font-bold  text-gray-800">
                { title }
            </h3>
            <p className="text-gray-600 text-sm mt-2">
                { description }
            </p>
            <Link href={link}>
            <motion.button 
            whileHover={ { scale: 1.1 }}
            whileTap={ { scale: 0.9 } }
            className="mt-4 px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-emerald-800 hover:text-white transition"
            >
            Learn More
            </motion.button>
            </Link>
        </motion.div>
    )

}
export default Card;