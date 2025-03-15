import newsInfos from "../../json/news.json";

function News() {
    return (
        <div className="flex flex-col w-screen bg-[#FFFFFF] text-[#2b2b2b] items-center p-6">
            <h1 className="text-2xl lg:text-3xl mb-4">Principais notícias</h1>
            <div className="w-75 lg:w-[95%] flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 xl:gap-15">
                {
                    newsInfos.map((item) => (
                        <div key={item.id} className="flex flex-col lg:w-80 xl:w-100 text-left gap-2 mb-4">
                            <a href={item.link} target="_blank">
                                <img src={item.img} className="w-full h-45 lg:h-50 xl:h-60 bg-[#0c73aeb6] p-1 shadow-xl cursor-pointer" />
                            </a>
                            <div className="flex flex-col lg:gap-2">
                                <h1 className="text-md lg:text-xl text-[#0c73aeb6]">{item.title}</h1>
                                <p className="text-xs lg:text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <a href="https://www.faetec.rj.gov.br/index.php/institucional/assessoria-de-comunicacao/noticias" target="_blank" className="text-xl mt-5 lg:mt-15 text-blue-500">Acessar todas as notícias</a>
        </div>
    )
}

export default News;