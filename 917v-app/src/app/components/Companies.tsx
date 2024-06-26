
import { Typography } from "@mui/material";
import Image from 'next/image';
import { Company } from "@/app/models/StaticDataModel";

export default function Companies ({name, image}: Company) {
    return (
        <div className="flex gap-2">
            <Image
                src={image}
                alt="I am Photo"
                width={50}
                height={50}
                style={{width:"30px", height:"30px" }}
                className='h-6' 
            />
            <Typography>{name}</Typography>
        </div>
    )
}