import React from "react"

export default function Typeform({ url }) {
  return (
    <div style={{ height: "90vh" }}>
      <iframe
        id="typeform-full"
        width="100%"
        title="register form"
        height="100%"
        frameborder="0"
        src={url}
      ></iframe>
    </div>
  )
}
