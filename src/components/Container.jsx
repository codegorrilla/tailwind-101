export default function Container({children}){
    return(
        <div className="md:container md:mx-auto">
            <h1>Hello there!</h1>
            {children}
        </div>
    )
}