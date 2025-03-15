function Portals() {
    return (
        <div className="flex flex-col w-screen bg-[#FFFFFF] text-[#2b2b2b] items-center p-6">
            <h1 className="text-2xl lg:text-3xl mb-4">Principais portais</h1>
            <div className="flex flex-wrap wrap justify-center gap-5 md:gap-8">

                <div className="grid md:flex gap-2 md:gap-8">
                    <a href="https://www.faetec.rj.gov.br/index.php/home/inscricoes" target="_blank">
                        <div className="portal">
                            <p>Inscrições</p>
                        </div>
                    </a>
                    <a href="https://www.faetec.rj.gov.br/index.php/institucional/unidades-faetec" target="_blank">
                        <div className="portal">
                            <p>Unidades</p>
                        </div>
                    </a>
                </div>
                <div className="grid md:flex gap-2 md:gap-8">
                    <a href="http://intranet.faetec.rj.gov.br:8001/" target="_blank">
                        <div className="portal">
                            <p>Solicitações</p>
                        </div>
                    </a>
                    <a href="http://intranet.faetec.rj.gov.br:5878/10" target="_blank">
                        <div className="portal">
                            <p>Portal DIVEST</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portals;