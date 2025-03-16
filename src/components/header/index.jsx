function Header() {

    function slideActivation() {
        const menu = document.getElementById("slider")

        menu.style.left = menu.style.left === "0px" ? "-400px" : "0px"


    }

    return (
        <div className="w-screen h-18 md:h-22 p-4 bg-white flex justify-between items-center">
            <div className="">
                <img src="./icons/menu.svg" onClick={slideActivation} className="w-5 md:w-8 cursor-pointer" />
                <nav className="fixed z-1 top-0 left-[-400px] bg-[#FFFFFF] text-[#2B2B2B] w-60 md:w-75 h-screen flex flex-col gap-4 xl:gap-2 2xl:gap-4 p-6 shadow-2xl transition-all duration-300" id="slider">
                    <div>
                        <img src="./icons/menu.svg" onClick={slideActivation} className="w-5 md:w-8 cursor-pointer" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-3 underline">Menu principal</h1>
                        <ul className="flex flex-col text-lg md:text-xl gap-1 md:gap-2 xl:gap-1 2xl:gap-2">
                            <li><a className="link" href="/">Inicio</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/index.php/institucional/apresentacao-faetec" target="_blank">Apresentação</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/index.php/acoes-e-programas" target="_blank">Ações e Programas</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/index.php/acesso" target="_blank">Servidores</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-3 underline">Novidades</h1>
                        <ul className="flex flex-col text-lg md:text-xl gap-1 md:gap-2 xl:gap-1 2xl:gap-2">
                            <li><a className="link" href="https://www.faetec.rj.gov.br/faetecdigital/index.php/manual-de-regras-e-condutas" target="_blank">Regras e conduta</a></li>
                            <li><a className="link" href="http://www.dominiopublico.gov.br/pesquisa/PesquisaObraForm.jsp" target="_blank">Biblioteca virtual</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/faetecdigital/index.php/apostlias-linux" target="_blank">Apostilas</a></li>
                            <li><a className="link" href="http://www.faetec.rj.gov.br/dif/Arquivos/SISCFD/menu_inicial.htm" target="_blank">CDDs - Cursos</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/faetecdigital/index.php/horario-e-cursos" target="_blank">Horários de cursos</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/faetecdigital/index.php/planos" target="_blank">Planos de Curso</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-3 underline">Outros</h1>
                        <ul className="flex flex-col text-lg md:text-xl gap-1 md:gap-1 2xl:gap-2">
                            <li><a className="link" href="https://www.faetec.rj.gov.br/index.php/institucional/unidades-faetec" target="_blank">Unidades</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/index.php/dados-abertos" target="_blank">Dados abertos</a></li>
                            <li><a className="link" href="https://www.faetec.rj.gov.br/faetecdigital/index.php/contato-mainmenu-3" target="_blank">Contato</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <a href="/"><img src="./logo/faetec.png" className="w-35 md:w-45 2xl:w-55"/></a>
            <div className="w-5"></div>
        </div>
    )
}

export default Header;