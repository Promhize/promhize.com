import React from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import CountDown from './logic/CountDown'
import CountDownView, { CountDownErrorView } from './components/CountDownView'

const Page = () => (
  <main className="xl:flex xl:h-screen bg-grey-lighter">
    <section className="flex flex-1 flex-no-wrap flex-col xl:h-full xl:items-center xl:justify-center">
      <header className="text-3xl mb-8">
        <h2 className="p-2 px-4 my-2 bg-teal-darkest text-white">Templates</h2>
        <h2 className="p-2 px-4 my-2 bg-teal-darkest text-white">Snippets</h2>
        <h2 className="p-2 px-4 my-2 bg-teal-darkest text-white">Animations</h2>
        <h2 className="p-2 px-4 my-2 bg-teal-darkest text-white">
          Coded && Free
        </h2>
      </header>
    </section>
    <div className="flex-1 flex justify-center xl:h-full xl:bg-grey-darker">
      <div className="flex items-center justify-center xl:max-h-full w-64 overflow-hidden">
        <img src="/static/media/iphone-x.svg" alt="" className="" />
        <ErrorBoundary errorView={CountDownErrorView}>
          <CountDown render={CountDownView} />
        </ErrorBoundary>
      </div>
    </div>
  </main>
)

export default Page
