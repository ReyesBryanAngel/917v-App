import { Reviews } from "@/app/models/StaticDataModel";
import { Typography, Divider, Box } from "@mui/material";
import Image from 'next/image';

export default function Review ({ title, poster, description, reviewDetails }: Reviews) {
    return (
        <div className="mb-10 mt-10">
            <Divider />
                <div className="flex flex-col mt-12 p-5 mt-5 text-start gap-3">
                    <Typography sx={{ color:"#6941C6" }} fontWeight="bold">{title}</Typography>
                    <Typography fontWeight="bold" variant="h5">{poster}</Typography>
                    <Typography color="textSecondary" className="lg:w-8/12">{description}</Typography>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="lg:grid lg:grid-cols-2">
                        {reviewDetails.map((reviewDetail, index) => (
                            <div className="flex flex-col gap-2 mt-10 lg:w-9/12" key={index}>
                                <Typography variant="h3" fontWeight="bold" sx={{ marginBottom:"4px", color:"#6941C6" }}>{reviewDetail.rating}</Typography>
                                <Typography fontWeight="bold">{reviewDetail.actionTitle}</Typography>
                                <Typography color="textSecondary">{reviewDetail.actionDescription}</Typography>
                            </div>
                            
                        ))}
                    </div>
                    <div className="flex items-center mt-10 lg:hidden">
                        <Box
                            component="img"
                            alt="my logo."
                            src={"/assets/listboard.png"}                       
                        />
                    </div>
                    <div className="hidden lg:block">
                        <Box
                            component="img"
                            alt="my logo."
                            src={"/assets/listboard.png"} 
                            width={400}
                            height={400}                      
                        />
                    </div>
                </div>
        </div>
    )
}