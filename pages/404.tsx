import { ReactTerminal, TerminalContextProvider } from 'react-terminal'

type Props = {}

const ErrorPage = (props: Props) => {
  const commands = {
    whoami: 'jackharper',
    cd: (directory: string) => `changed path to ${directory}`,
  }
  const welcomeMessage = (
    <div>
      <p>
        Welcome to the <span className="font-bold">ad-portfolio</span>!
      </p>
      <p>This is the command line interface.</p>
      <p>
        You can access this page by visiting any invalid address resulting in a
        404 Error
      </p>
    </div>
  )

  return (
    <div className="mx-[8%] mt-[5%] h-[40em]  text-center">
      <div className="p-2 pb-6">404 Page Not Found</div>
      <TerminalContextProvider>
        <ReactTerminal
          commands={commands}
          theme={'matrix'}
          welcomeMessage={welcomeMessage}
          prompt={'root@ad-p:~$'}
          themes={{
            mycustomtheme: {
              themeBGColor: '#272B36',
              themeToolbarColor: '#DBDBDB',
              themeColor: '#FFFEFC',
              themePromptColor: '#a917a8',
            },
          }}
          //   theme="mycustomtheme"
        />
      </TerminalContextProvider>
    </div>
  )
}

export default ErrorPage
