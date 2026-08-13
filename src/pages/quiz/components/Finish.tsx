import Button from "../../../components/Button"
import { ARTWORK_URL } from "../../../utils/utils";

interface FinishProps {
    points: number;
    restart: () => void;
    goBack: () => void;
}

const VICTINI = 494;

export default function Finish({ points, restart, goBack }: FinishProps) {
    return <>
        <div className="absolute left-0 bottom-0 top-11 h-1vh w-full backdrop-blur-sm bg-zinc-950/70"></div>
        <div className="absolute left-0 right-0 mx-auto p-4 md:p-14 w-4/5 sm:w-2/3 rounded-xl bg-zinc-800 shadow-md">
            <div className="flex flex-row">
            <div className="w-1/3">
                <img src={ARTWORK_URL + VICTINI + ".png"} />
            </div>
            <div className="w-2/3 self-center">
               <h1 className="text-xl sm:text-3xl mb-4">Game Finished!</h1>
                <label>Total points: {points}</label>
                
            </div>
            </div>
            <div className="flex flex-col md:flex-row mt-5 gap-4 md:gap-20 justify-center items-center">
                    <Button title={"Restart quiz"} onClick={restart}></Button>
                    <Button title={"Choose another quiz"} onClick={goBack}></Button>
                </div> 
        </div>
    </>

}