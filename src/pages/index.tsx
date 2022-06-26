import { useState } from 'react'
import Latex from 'react-latex'
import InputBox from '~/components/InputBox'
import Toggler from '~/components/Toggler'

const defaultValue = String.raw`
$p(x; \theta)=\sum_{z} p(x, z; \theta)$ 
$$(3\times 4) \div (5-3)$$
`

export default function Home() {
  const [inputText, setInputText] = useState(defaultValue)
  const [displayMode, setDisplayMode] = useState(true)

  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex flex-col p-4">
        <h1 className="text-center text-2xl border-b border-b-slate-300 pb-6">
          Latex Preview
        </h1>

        <div className="flex-1 flex py-4">
          <div className="h-full overflow-y-auto w-1/2">
            <Toggler
              checked={displayMode}
              onChange={e => setDisplayMode(e.target.checked)}
              label="Display mode"
            />

            <InputBox
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Paste Latex string to preview"
            />
          </div>

          <div className="h-full overflow-y-auto w-1/2 p-6">
            <Latex displayMode={displayMode}>{inputText}</Latex>
          </div>
        </div>
      </div>
    </div>
  )
}
