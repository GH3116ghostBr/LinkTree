import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header(){
    return (
        <header className="bg-blue-800 py-2 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Logo/>

                <Menu/>
            </div>
        </header>
    );
}