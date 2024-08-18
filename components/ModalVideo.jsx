"use client"
import ReactPlayer from "react-player"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
const ModalVideo = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center gap-4 cursor-pointer">
                    <button className="relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent"><Image src="/assets/home/play.svg" width={36} height={36} alt="" /></button>
                    <span className="text-lg font-primary">Watch Video</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <ReactPlayer width={"100%"} height={"100%"} url={"https://www.youtube.com/watch?v=OsSTkzNRPQM"} />
            </DialogContent>
        </Dialog>
    )
}

export default ModalVideo