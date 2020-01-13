
export default function IFrame({ src, className, showSource }) {
  const iframe = `<iframe src="${src}" scrolling="yes" class="${className}" sandbox></iframe>`
  const sourceTag = showSource ? <span className='iframe-tag'><b>iframe displaying </b> -  {src}</span> : null

  return (
    <div style={{ position: 'relative' }} className='full-dimensions'>
      {sourceTag}
      <div className='iframe-container' dangerouslySetInnerHTML={{ __html: iframe }}></div>
    </div>
  )
}
