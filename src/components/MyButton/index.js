import React from 'react'
import './styles.css'
import linkIcon from '../../assets/link.svg'

function MyButton({ text, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="my-button btn-primary d-flex justify-content-between align-items-center w-100">
        <span dangerouslySetInnerHTML={{ __html: text }} />
        <img src={linkIcon} alt="Icono" width="20" height="20" />
      </button>
    </a>
  )
}

export default MyButton
