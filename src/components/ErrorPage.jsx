import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="space-y-8">
            <h1 className="font-extrabold text-center text-6xl text-light-blue mt-20">CRM - Clientes</h1>
            <h2 className="font-extrabold text-center text-4xl text-indigo-800 mt-10">Oops!</h2>
            <p className="text-center">Hubo un error</p>
            <p className="text-center">{error.message}</p>
            
        </div>
     )
}