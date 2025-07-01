// 간단한 이미지 프리로딩 유틸리티
import CatchMole from "../assets/moles1.PNG";
import PipeWatch from "../assets/pipeWatch1.png";
import CatchUp from "../assets/catchUp1.jpg";
import GreenKiwi from "../assets/greenkiwi.jpg";
import Caito from "../assets/caito.jpg";
import Pepe from "../assets/pepe.jpg";
import NetflixReview from "../assets/netflixReview.PNG";
import BlogPlatform from "../assets/blog.PNG";
import ToDoList from "../assets/todolist.PNG";
import profile from "../assets/image0.gif";

export const criticalImages = [
    profile,
    CatchMole,
    PipeWatch,
    CatchUp,
    GreenKiwi,
    Caito,
    Pepe,
    NetflixReview,
    BlogPlatform,
    ToDoList
];

export const initializeImagePreloading = () => {
    try {
        console.log('Starting image preloading...');

        criticalImages.forEach((imageSrc, index) => {
            if (imageSrc) {
                const img = new Image();
                img.onload = () => {
                    console.log(`Image ${index + 1}/${criticalImages.length} loaded successfully`);
                };
                img.onerror = () => {
                    console.warn(`Failed to load image: ${imageSrc}`);
                };
                img.src = imageSrc;
            }
        });

        console.log('Image preloading initialized');
    } catch (error) {
        console.warn('Image preloading failed:', error);
    }
};
