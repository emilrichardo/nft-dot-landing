 import Header from "./Header";

export default function Layout({children}) {

    return(
        <div className=" h-full">
            <Header/>
            <main className="h-full">
                {children}
            </main>



        </div>
    )
};
