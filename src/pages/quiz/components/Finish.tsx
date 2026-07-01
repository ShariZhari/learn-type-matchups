import Button from "../../../components/Button"

interface FinishProps {
    points: number;
    restart: () => void;
    goBack: () => void;
}

export default function Finish({ points, restart, goBack }: FinishProps) {
    return <>
        <div className="absolute left-0 bottom-0 top-11 h-100 w-full backdrop-blur-sm"></div>
        <div className="absolute left-0 right-0 mx-auto p-14 w-2/3 rounded-xl bg-mauve-800 shadow-md">
            <h1 className="text-3xl mb-4">Game Finished!</h1>
            <label>POINTS: {points}</label>
            <div className="flex mt-5 gap-20 justify-center items-center">
                <Button title={"Restart quiz"} color={"secondary"} onClick={restart}></Button>
                <Button title={"Choose another quiz"} color={"secondary"} onClick={goBack}></Button>
            </div>
        </div>
    </>

}