import  Head from "next/head"
const layout = ({children,pagina}) => {
  return (
    <div>
      <Head>
        <title>Cafe- {pagina}</title>
        <meta name="description" content="Cafeteria" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12">
              <h1>Cafeterias</h1>
        </aside>
        <main className="md:w-8/12">
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout