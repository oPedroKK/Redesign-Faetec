function Header() {

    function slideActivation() {
        const menu = document.getElementById("slider")

        menu.style.left = menu.style.left === "0px" ? "-400px" : "0px"


    }

    return (
        <div className="w-screen h-18 md:h-22 p-4 bg-white flex justify-between items-center">
            <div className="">
                <img src="./icons/menu.svg" onClick={slideActivation} className="w-5 md:w-8 cursor-pointer"/>
                <nav className="absolute z-1 top-0 left-[-400px] bg-[#FFFFFF] text-[#2B2B2B] w-60 md:w-75 flex flex-col gap-4 p-6 shadow-2xl transition-all duration-300" id="slider">
                    <div>
                        <img src="./icons/menu.svg" onClick={slideActivation} className="w-5 md:w-8 cursor-pointer" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-3 underline">Menu principal</h1>
                        <ul className="flex flex-col text-lg md:text-xl gap-1 md:gap-2">
                            <il>Inicio</il>
                            <il>Institucional</il>
                            <il>Ações e Programas</il>
                            <il>Contato</il>
                            <il>Servidores</il>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-3 underline">Novidades</h1>
                        <ul className="flex flex-col text-lg md:text-xl gap-1 md:gap-2">
                            <il>Regras e conduta</il>
                            <il>Biblioteca virtual</il>
                            <il>Apostilas</il>
                            <il>CDDs - Cursos</il>
                            <il>Horários de cursos</il>
                            <il>Planos de Curso</il>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-3 underline">Outros</h1>
                        <ul className="flex flex-col text-lg md:text-xl gap-1 md:gap-2">
                            <il>Unidades</il>
                            <il>Dados abertos</il>
                            <il>Contato</il>
                        </ul>
                    </div>
                </nav>
            </div>
            <img src="./logo/faetec.png" className="w-35 md:w-45"/>
            <div className="w-5"></div>
        </div>
    )
}

export default Header;