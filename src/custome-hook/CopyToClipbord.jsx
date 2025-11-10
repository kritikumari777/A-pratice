import useCopys from './useCopys'

const texts = "I am impleted copy to clipbord to copy the text"

const CopyToClipbord = () => {
    const [isCopied, copyText] = useCopys(texts)
    
  return (
    <div role='button' style={{cursor: "pointer"}} title={texts} onClick={copyText}>{isCopied ? "copied" : texts}</div>
  )
}

export default CopyToClipbord