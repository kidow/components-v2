import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const globalTypes = {
  darkMode: true
}

export const decorators = [
  (Story) => (
    <>
      <div className="fixed top-5 left-0 z-50 flex w-full animate-fade-up justify-center">
        <div className="animate-bounce rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4">
          <a
            rel="noreferrer"
            href="https://kidow.me"
            target="_blank"
            className="font-semibold !text-white"
          >
            새 프로젝트로 이전하였습니다. 클릭 시 이동
          </a>
        </div>
      </div>
      <Story />
    </>
  )
]
