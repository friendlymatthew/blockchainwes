

export default function CardComponent(props) {
    return (
        <div className="border border-black rounded-2xl p-4 grid grid-cols-1">
            <div>
                {props.svg}
            </div>
            <div className="text-3xl font-bold" style={{ fontFamily: "Lato"}}>
                {props.title}
            </div>
            <div className="text-lg mt-1 mb-4 font-medium" style={{ fontFamily: "Lato"}}>
                {props.desc}
            </div>
            <div className="flex space-x-3">
                {props.actions.map((action) => {
                    return (
                        <button style={{ fontFamily: "Lato" }} className="bg-yellow-200 rounded-md px-3 py-2 font-semibold md:hover:bg-black md:hover:text-yellow-200 md:ease-in md:transition md:duration-100">
                            {action}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}